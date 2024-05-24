<!-- checkout.php -->
<?php
include "../../connection.php";

// Function to get event details by ID
function getEventDetails($conn, $event_id)
{
    $sql = "SELECT * FROM event WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $event_id);
    $stmt->execute();
    $result = $stmt->get_result();
    return $result->fetch_assoc();
}

$events = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['cart_data'])) {
    $cart_data = json_decode($_POST['cart_data'], true);
    if (json_last_error() === JSON_ERROR_NONE) {
        foreach ($cart_data as $item) {
            $event_id = intval($item['id']);
            $event_details = getEventDetails($conn, $event_id);
            if ($event_details) {
                $event_details['quantity'] = intval($item['quantity']);
                $events[] = $event_details;
            }
        }
    } else {
        echo "Invalid cart data.";
        exit();
    }
} else {
    echo "No cart data provided.";
    exit();
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
    <link href="../assets/css/style.css" rel="stylesheet">
    <link href="../assets/css/vendors.css" rel="stylesheet">

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

    <?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    include '..\..\unchangable\header.php';
    ?>
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

    <section id="hero_2" class="background-image" data-background="url(https://teskerti.tn/uploads/bg/header_bg.jpg)">
        <div class="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
            <div class="intro_title">
                <h1>Passez votre commande</h1>
                <div class="bs-wizard row">

                    <div class="col-4 bs-wizard-step active">
                        <div class="text-center bs-wizard-stepnum">Votre panier</div>
                        <div class="progress">
                            <div class="progress-bar"></div>
                        </div>
                        <a href="https://teskerti.tn/booking/checkout" class="bs-wizard-dot"></a>
                    </div>

                    <div class="col-4 bs-wizard-step disabled">
                        <div class="text-center bs-wizard-stepnum">Vos informations</div>
                        <div class="progress">
                            <div class="progress-bar"></div>
                        </div>
                        <a href="https://teskerti.tn/booking/order" class="bs-wizard-dot"></a>
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
                        <tr id="91f84d6406e599300e29756adc369b5d">
                            <td>
                                <div class="thumb_cart">
                                    <img src="<?php echo htmlspecialchars($event['image']); ?>" alt="Image">
                                </div>
                                <span class="item_cart"><b><?php echo htmlspecialchars($event['name']); ?></b>
                                    <br />Pass 3 Days <br />01 Août 2024 à 20:00 </span>
                            </td>
                            <td>
                            <?php echo htmlspecialchars($event['price']); ?> </td>
                            <td>
                                1.500 </td>
                            <td>
                                <div class="numbers-row" data-id="91f84d6406e599300e29756adc369b5d">
                                    <input type="text" value="1" class="qty2 form-control">
                                </div>

                            </td>
                            <td>
                                <strong class="total_item"><?php echo htmlspecialchars($event['price']); ?></strong>
                            </td>
                            <td class="options">
                                <a data-id="91f84d6406e599300e29756adc369b5d" class="delete-item"><i class="icon_trash"></i><i class="icon_loading animate-spin" style="display: none;"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- End col -->
                <div class="cart-options clearfix" id="cart_coupon">
                    <div class="float-start">
                        <form action="https://teskerti.tn/booking/checkout" id="promo-code-form" method="post" accept-charset="utf-8">
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
                        <a href="https://teskerti.tn/booking/buyer" class="btn_full">Passer la commande <i class="arrow_carrot-right"></i></a>
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

    <!-- Search Menu -->
    <div class="search-overlay-menu">
        <span class="search-overlay-close"><i class="icon_set_1_icon-77"></i></span>
        <form action="https://teskerti.tn/search" role="search" id="searchform" method="get">
            <input value="" name="q" type="text" placeholder="Recherche..." />
            <button type="submit"><i class="icon_set_1_icon-78"></i>
            </button>
            <div style="display:none"><label>Fill This Field</label><input type="text" name="honeypot" value="" /></div>
        </form>
    </div><!-- End Search Menu -->

    <!-- Common scripts -->
    <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>-->
    <script src="../../assets/js/jquery-3.6.1.min.js"></script>
    <script src="../../assets/js/common_scripts_min.js"></script>
    <script src="../../assets/js/fonctions-custom.js"></script>


    <script type="text/javascript">
        (function($) {

            $(document).on('click', '.button_inc', function(e) {
                var button = $(this);
                $('.ui').addClass('loading');
                button.attr('disabled', 'true');
                $('#cart_feedback_messages').hide();
                var rowid = button.closest('.numbers-row').data('id');
                var qty = button.parent().find("input").val();
                $.ajax({
                    method: "put",
                    url: "https://teskerti.tn/booking/update?rowid=" + rowid + "&qty=" + qty,
                    success: function(data) {
                        if (data.error === false) {
                            if (data.total && data.total > 0) {
                                if (data.total_subtotal) {
                                    $('#total_subtotal').html(data.total_subtotal);
                                }
                                if (data.total_fee) {
                                    $('#total_fee').html(data.total_fee);
                                }
                                if (data.total) {
                                    $('#total').html(data.total);
                                }
                                if (data.total_item && data.total_item > 0) {
                                    button.closest('.numbers-row').find('.total_item').html(data.total_item);
                                    button.removeAttr('disabled');
                                } else {
                                    $('tr#' + rowid).hide();
                                }
                            } else {
                                $('#cart_amount').html("");
                                $('#cart_amount').hide();
                                $('#cart_coupon').html("");
                                $('#cart_coupon').hide();
                                $('tr#' + rowid).hide();
                                $('.cart-list').hide();
                                $('#cart_feedback_messages').html("\n  <div class=\"alert alert-info\">\n Votre panier est vide.\n<\/div>\n");
                                $('#cart_feedback_messages').fadeIn('slow');
                            }
                        }
                        if (data.total_item) {
                            $('tr#' + rowid).find('.total_item').html(data.total_item)
                        }
                        if (data.qty_item) {
                            $('tr#' + rowid).find('.qty2').val(data.qty_item)
                        }
                        if (data.message) {
                            $('#cart_feedback_messages').html(data.message);
                            $('#cart_feedback_messages').fadeIn('slow');
                        }
                    },
                    error: function() {
                        $('#cart_feedback_messages').html("\n  <div class=\"alert alert-danger\">\n Nous sommes désolé, votre demande n'a pas été envoyé en raison d'un problème technique.\n<\/div>\n");
                        $('#cart_feedback_messages').fadeIn('slow');
                    },
                    complete: function() {
                        updateItemCount();
                        updateCartContent();
                        $('.ui').removeClass('loading');
                    }
                });
                e.preventDefault();
                return false;
            });

            $(document).on('click', '.delete-item', function(e) {
                $('.ui').addClass('loading');
                $('#cart_feedback_messages').hide();
                var rowid = $(this).data('id');
                var item = $(this);
                $(this).find('.icon-trash').hide();
                $(this).find('.icon_loading').show();
                $.ajax({
                    method: "delete",
                    url: "https://teskerti.tn/booking/delete?rowid=" + rowid,
                    success: function(data) {
                        if (data.error === false) {
                            $('tr#' + rowid).hide();
                            if (data.total && data.total > 0) {
                                if (data.total_subtotal) {
                                    $('#total_subtotal').html(data.total_subtotal);
                                }
                                if (data.total_fee) {
                                    $('#total_fee').html(data.total_fee);
                                }
                                if (data.total) {
                                    $('#total').html(data.total);
                                }
                            } else {
                                $('#cart_amount').html("");
                                $('#cart_amount').hide();
                                $('#cart_coupon').html("");
                                $('#cart_coupon').hide();
                                $('.cart-list').hide();
                                $('#cart_feedback_messages').html("\n  <div class=\"alert alert-info\">\n Votre panier est vide.\n<\/div>\n");
                                $('#cart_feedback_messages').fadeIn('slow');
                            }
                        }
                        if (data.message) {
                            $('#cart_feedback_messages').html(data.message);
                            $('#cart_feedback_messages').fadeIn('slow');
                        }
                    },
                    error: function() {
                        $('#cart_feedback_messages').html("\n  <div class=\"alert alert-danger\">\n Nous sommes désolé, votre demande n'a pas été envoyé en raison d'un problème technique.\n<\/div>\n");
                        $('#cart_feedback_messages').fadeIn('slow');
                    },
                    complete: function() {
                        updateItemCount();
                        updateCartContent();
                        $('.ui').removeClass('loading');
                    }
                });
                e.preventDefault();
                return false;
            });

            function promo_code_submit_state() {
                $('#promo_code_submit').attr('disabled', 'disabled');
                $('#promo_code_submit_icon').hide();
                $('#promo_code_error_flag').hide();
                $('#promo_code_validate_command').hide();
                $('#promo_code_feedback_messages').hide();
                $('#promo_code_processing').show();
            }

            function promo_code_success_state(message) {
                $('#promo_code_processing').hide();
                $('#promo_code_error_flag').hide();
                $('#promo_code_submit_icon').show();
                $('#promo_code_validate_command').show();
                $('#promo_code_submit').removeAttr('disabled');
                $('#promo_code_feedback_messages').html(message);
                $('#promo_code_feedback_messages').fadeIn('slow');
            }

            function promo_code_error_state(message) {
                $('#promo_code_processing').hide();
                $('#promo_code_submit_icon').hide();
                $('#promo_code_validate_command').hide();
                $('#promo_code_error_flag').show();
                $('#promo_code_submit').removeAttr('disabled');
                $('#promo_code_feedback_messages').html(message);
                $('#promo_code_feedback_messages').fadeIn('slow');
            }

            $(document).on('click', '#promo_code_submit', function(e) {
                promo_code_submit_state();
                $('.ui').addClass('loading');
                $.ajax({
                    method: "post",
                    url: "promo.php",
                    data: $('#promo-code-form').serialize(),
                    success: function(data) {
                        if (data.error === false) {
                            location.reload();
                        } else {
                            promo_code_error_state(data.message);
                            $('.ui').removeClass('loading');
                        }
                    },
                    complete: function() {
                        $('.ui').removeClass('loading');
                    }
                });
                e.preventDefault();
                return false;
            });

        })(window.jQuery);
    </script>

</body>

</html>