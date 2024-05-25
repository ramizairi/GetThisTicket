<?php
include "../../connection.php";

// Function to get event details by ID
function getEventDetails($conn, $event_id)
{
    $sql = "SELECT e.id, e.name, e.date, e.image,
                   o.price AS orchestre_price,
                   b.price AS balcon_price,
                   g.price AS galerie_price
            FROM event e
            LEFT JOIN orchestre o ON e.orchestre_id = o.id
            LEFT JOIN balcon b ON e.balcon_id = b.id
            LEFT JOIN galerie g ON e.galerie_id = g.id
            WHERE e.id = ?";

    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        // Log SQL error
        file_put_contents('php://stderr', "SQL Error: " . $conn->error . "\n");
        return false;
    }

    $stmt->bind_param("i", $event_id);
    $stmt->execute();
    $result = $stmt->get_result();
    return $result->fetch_assoc();
}

$events = [];
$total_amount = 0; // Initialize total amount

// Get the raw POST data
$post_data = file_get_contents('php://input');

// Debugging: output raw POST data
file_put_contents('php://stderr', "Raw POST Data: " . $post_data . "\n");

// Decode JSON data
$decoded_data = json_decode($post_data, true);

// Debugging: output decoded data
file_put_contents('php://stderr', "Decoded Data: " . print_r($decoded_data, true) . "\n");

if (isset($decoded_data['cart_data']) && is_array($decoded_data['cart_data'])) {
    foreach ($decoded_data['cart_data'] as $item) {
        $event_id = intval($item['id']);
        $event_details = getEventDetails($conn, $event_id);

        // Debugging: Check the event details retrieved from the database
        file_put_contents('php://stderr', "Event Details: " . print_r($event_details, true) . "\n");

        if ($event_details) {
            // Calculate total price based on quantities selected
            $total_price = intval($item['orchestre']) * $event_details['orchestre_price'] +
                intval($item['balcon']) * $event_details['balcon_price'] +
                intval($item['galerie']) * $event_details['galerie_price'];

            // Add total price to the overall total amount
            $total_amount += $total_price;

            // Add event details along with quantities to the events array
            $event_details['orchestre_quantity'] = intval($item['orchestre']);
            $event_details['balcon_quantity'] = intval($item['balcon']);
            $event_details['galerie_quantity'] = intval($item['galerie']);
            $event_details['total_price'] = $total_price;
            $events[] = $event_details;

            // Debugging: echo total price for each event
            file_put_contents('php://stderr', "Price is: $total_price\n");
        }
    }
} else {
    // Debugging: Log that cart_data is not set or is not an array
    file_put_contents('php://stderr', "No valid cart_data received\n");
}

$conn->close();
?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Votre panier</title>
    <meta name="description" content="Concerts, Festivals, Expositions, Sport ▻ R&eacute;servez vos places sur Teskerti ! Le n&deg;1 du E-ticket en Tunisie - Paiement 100% s&eacute;curis&eacute;." />
    <meta name="keywords" content="Teskerti, Concerts, Festivals, Expositions, Sport, R&eacute;server , E-ticket , Tunisie" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="robots" content="max-image-preview:large" />
    <!-- Favicons-->
    <link rel="shortcut icon" href="https://teskerti.tn/assets/img/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" type="image/x-icon" href="https://teskerti.tn/assets/img/apple-touch-icon-57x57-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="https://teskerti.tn/assets/img/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="https://teskerti.tn/assets/img/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="https://teskerti.tn/assets/img/apple-touch-icon-144x144-precomposed.png">

    <!-- GOOGLE WEB FONT -->
    <link href="https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- COMMON CSS -->
    <!--<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/css/bootstrap.min.css" rel="stylesheet">-->
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet">
    <!-- REVOLUTION SLIDER CSS -->
    <link rel="stylesheet" type="text/css" href="../assets/fonts/css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/settings.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/layers.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/navigation.css">

    <!-- CUSTOM CSS -->
    <link href="../assets/css/custom.css" rel="stylesheet">
    <link href="../assets/css/shop.css" rel="stylesheet">
    <link href="../assets/css/design.css" rel="stylesheet">
    <style>
        @media (max-width: 767px) {
            .table.cart-list td:nth-of-type(1):before {
                content: "BILLET" !important;
            }

            .table.cart-list td:nth-of-type(2):before {
                content: "PRIX" !important;
            }

            .table.cart-list td:nth-of-type(3):before {
                content: "FRAIS" !important;
            }

            .table.cart-list td:nth-of-type(4):before {
                content: "QUANTITÉ" !important;
            }

            .table.cart-list td:nth-of-type(5):before {
                content: "TOTAL" !important;
            }

            .table.cart-list td:nth-of-type(6):before {
                content: "ACTIONS" !important;
            }

            .thumb_cart {
                display: initial;
            }
        }

        .ui.loading {
            position: relative;
            cursor: default;
            pointer-events: none;
        }

        .ui.loading:before {
            position: absolute;
            content: '';
            top: 0%;
            left: 0%;
            background: rgba(255, 255, 255, .8);
            width: 100%;
            height: 100%;
            z-index: 100
        }

        .ui.loading:after {
            position: absolute;
            content: '';
            top: 50%;
            left: 50%;
            margin: -1.5em 0em 0em -1.5em;
            width: 3em;
            height: 3em;
            -webkit-animation: form-spin 0.6s linear;
            animation: form-spin 0.6s linear;
            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            border-radius: 500rem;
            border-color: #767676 rgba(0, 0, 0, .1) rgba(0, 0, 0, .1) rgba(0, 0, 0, .1);
            border-style: solid;
            border-width: .2em;
            box-shadow: 0 0 0 1px transparent;
            visibility: visible;
            z-index: 101
        }

        @-webkit-keyframes form-spin {
            from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg)
            }

            to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg)
            }
        }

        @keyframes form-spin {
            from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg)
            }

            to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg)
            }
        }
    </style>
</head>

<body>
    <?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    include '..\..\unchangable\header.php';
    ?>
    <!--=================================
Header -->

    <div id="preloader">
        <div class="sk-spinner sk-spinner-wave">
            <div class="sk-rect1"></div>
            <div class="sk-rect2"></div>
            <div class="sk-rect3"></div>
            <div class="sk-rect4"></div>
            <div class="sk-rect5"></div>
        </div>
    </div>
    <!-- End Preload -->

    <div class="layer"></div>
    <!-- Mobile menu overlay mask -->

    <style>
        .cart_count_down {
            -webkit-box-pack: center;
            justify-content: center;
            font-size: 0.625rem;
            margin-top: -2px;
        }

        .dropdown.dropdown-cart {
            min-width: 30px;
        }
    </style>

    <section id="hero_2" class="background-image" data-background="url(../../assets/images/header.jpg)">
        <div class="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
            <div class="intro_title">
                <h1>Passez votre commande</h1>
                <div class="bs-wizard row">

                    <div class="col-4 bs-wizard-step active">
                        <div class="text-center bs-wizard-stepnum">Votre panier</div>
                        <div class="progress">
                            <div class="progress-bar"></div>
                        </div>
                        <a class="bs-wizard-dot"></a>
                    </div>

                    <div class="col-4 bs-wizard-step disabled">
                        <div class="text-center bs-wizard-stepnum">Vos informations</div>
                        <div class="progress">
                            <div class="progress-bar"></div>
                        </div>
                        <a class="bs-wizard-dot"></a>
                    </div>

                    <div class="col-4 bs-wizard-step disabled">
                        <div class="text-center bs-wizard-stepnum">Paiement</div>
                        <div class="progress">
                            <div class="progress-bar"></div>
                        </div>
                        <a href="#" class="bs-wizard-dot"></a>
                    </div>

                </div>
                <!-- End bs-wizard -->
            </div>
            <!-- End intro-title -->
        </div>
        <!-- End opacity-mask-->
    </section>
    <!-- End Section hero_2 -->

    <main>
        <div id="position">
            <div class="container">
                <ul>
                    <li><a href="#">Accueil</a>
                    </li>
                    <li><a href="#">Votre panier</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- End position -->

        <div class="container margin_60">
            <div class="cart-section">
                <div id="cart_feedback_messages" class="margin_30" style="display: none;"></div>
                <table class="table table-striped cart-list shopping-cart">
                    <thead>
                        <tr>
                            <th>
                                Billet
                            </th>
                            <th>
                                Prix
                            </th>
                            <th>
                                FRAIS
                            </th>
                            <th>
                                Quantité
                            </th>
                            <th>
                                Total
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="ui">
                        <?php foreach ($events as $event) : ?>
                            <tr>
                                <td>
                                    <div class="thumb_cart">
                                        <img src="<?php echo htmlspecialchars($event['image']); ?>" alt="Image">
                                    </div>
                                    <span class="item_cart"><b><?php echo htmlspecialchars($event['name']); ?></b><br />Le<br /><?php echo htmlspecialchars($event['date']); ?></span>
                                </td>
                                <td>
                                    <?php echo htmlspecialchars($event['price']); ?>
                                </td>
                                <td>
                                    <?php echo htmlspecialchars($event['price']); ?> <!-- Assuming the "FRAIS" is the same as the price -->
                                </td>
                                <td>
                                    Orchestre: <?php echo intval($event['orchestre_quantity']); ?><br>
                                    Balcon: <?php echo intval($event['balcon_quantity']); ?><br>
                                    Galerie: <?php echo intval($event['galerie_quantity']); ?>
                                </td>
                                <td>
                                    <?php echo htmlspecialchars($event['total_price']); ?>
                                </td>
                                <td class="options">
                                    <a class="delete-item"><i class="icon_trash"></i><i class="icon_loading animate-spin" style="display: none;"></i></a>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>

                <!-- End col -->
                <div class="cart-options clearfix" id="cart_coupon">
                    <div class="float-start">
                        <form action="checkout.php" id="promo-code-form" method="post" accept-charset="utf-8">
                            <div class="apply-coupon">
                                <div class="form-group">
                                    <input type="text" name="coupon_code" maxlength="10" value="" placeholder="Code de réduction" class="form-control">
                                </div>
                                <div class="form-group">
                                    <button class="btn_cart_outine" id="promo_code_submit" type="submit">
                                        <i id="promo_code_submit_icon" class="icon_check"></i>
                                        <i id="promo_code_error_flag" class=" icon_error-circle_alt" style="display: none;"></i>
                                        <i id="promo_code_processing" class="icon_loading animate-spin" style="display: none;"></i>
                                        Valider</button>
                                </div>
                            </div>
                            <div style="display:none"><label>Fill This Field</label><input type="text" name="honeypot" value="" /></div>
                        </form>
                    </div>
                </div>
                <div id="promo_code_feedback_messages" style="display: none;"></div>
                <div class="row justify-content-end" id="cart_amount">
                    <div class="column col-lg-4 col-md-6">
                        <ul class="totals-table">
                            <li class="clearfix"><span class="col">Sous Total</span><span class="col" id="total_subtotal">950.000 TND</span>
                            </li>
                            <li class="clearfix"><span class="col">Frais</span><span class="col" id="total_fee">3.000 TND</span>
                            </li>
                            <li class="clearfix total"><span class="col">Montant total</span><span class="col" id="total">953.000 TND</span>
                            </li>
                        </ul>
                        <a href="buyer.php" class="btn_full">Passer la commande <i class="arrow_carrot-right"></i></a>
                    </div>
                </div>

            </div>
        </div>
    </main>
    <!-- End main -->


    <?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    include '..\..\unchangable\footer.php';
    ?>

    <div id="toTop"></div><!-- Back to top button -->

    <!-- Common scripts -->
    <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>-->
    <script src="../../assets/js/jquery-3.6.1.min.js"></script>
    <script src="../../assets/js/common_scripts_min.js"></script>
    <script src="../../assets/js/fonctions-custom.js"></script>



    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Function to send cart data to the server
            function sendCartDataToServer() {
                const cart = JSON.parse(localStorage.getItem('cart')) || [];

                fetch('checkout.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            cart_data: cart
                        })
                    })
                    .then(response => response.text())
                    .then(data => {
                        document.querySelector('#checkout-details').innerHTML = data;
                    })
                    .catch(error => console.error('Error:', error));
            }

            // Call the function to send cart data when the page loads
            sendCartDataToServer();
        });
    </script>


</body>

</html>