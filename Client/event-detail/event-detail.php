<?php
include "../../connection.php";

if (isset($_GET['id'])) {
    $event_id = $_GET['id'];
    $sql = "SELECT * FROM event WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $event_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $event = $result->fetch_assoc();
    } else {
        echo "Event not found.";
        exit();
    }

    $stmt->close();
} else {
    echo "No event ID provided.";
    exit();
}

$conn->close();

$datetime = new DateTime($event['date']);
$date = $datetime->format('Y-m-d');
$time = $datetime->format('H');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title><?php echo htmlspecialchars($event['na   me']); ?></title>
    <meta name="description" content="" />
    <!-- Favicons-->
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <!-- GOOGLE WEB FONT -->
    <link href="https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- COMMON CSS -->
    <!--<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/css/bootstrap.min.css" rel="stylesheet">-->
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="../assets/css/design.css" rel="stylesheet">
    <link href="../assets/css/vendors.css" rel="stylesheet">


    <link rel="stylesheet" href="../../assets/css/style-prefix.css">
    <!-- CUSTOM CSS -->
    <link href="../assets/css/custom.css" rel="stylesheet">
    <style>
        @media (max-width: 992px) {

            /* Parallax bg */
            .parallax-mobile,
            .parallax-window {
                background: rgba(42, 42, 42, 0.59) !important;
                height: 200px !important;
                min-height: 200px !important;
            }

            #price_single_main {
                padding-top: 10px !important;
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
    <section class="parallax-window parallax-mobile" data-parallax="scroll" data-image-src="<?php echo htmlspecialchars($event['image']); ?>" data-natural-width="1400" data-natural-height="470">
        <div class="parallax-content-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <h1><?php echo htmlspecialchars($event['name']); ?></h1>
                        <span><i class="icon-location"></i> <?php echo htmlspecialchars($event['location']); ?></span>
                    </div>
                    <div class="col-md-4">
                        <div id="price_single_main">
                            A partir de <span><?php echo htmlspecialchars($event['orchestre']); ?><sup>TND</sup></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End section -->

    <main>
        <div id="position">
            <div class="container">
                <ul>
                    <li><a href="../../index.php">Accueil </a>
                    </li>
                    <li><a href="../../index.php">Event </a></a>
                    </li>
                    <li><?php echo htmlspecialchars($event['name']); ?></li>
                </ul>
            </div>
        </div>

        <div class="d-md-block d-lg-none">
            <img alt="Image" class="sp-image" src="<?php echo htmlspecialchars($event['image']); ?>" style="width: 100%">
        </div>

        <!-- End Position -->

        <div class="container margin_60">
            <div class="row">

                <aside class="col-lg-4">
                    <div class="box_style_1 expose">
                        <h3 class="inner">- BILLETS -</h3>
                        <form action="../payment/payment.php" id="main-ticket-form" method="post" accept-charset="utf-8">
                            <input type="hidden" name="product_id" value="853">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Orchestre</label>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label><b><?php echo htmlspecialchars($event['orchestre']); ?> <sup>TND</sup></b></label>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <div class="numbers-row">
                                            <input type="text" value="0" class="qty2 form-control" data-max="10" name="quantite_2797">
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Balcon</label>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label><b><?php echo htmlspecialchars($event['balcon']); ?> <sup>TND</sup></b></label>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <div class="numbers-row">
                                            <input type="text" value="0" class="qty2 form-control" data-max="10" name="quantite_2797">
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Galerie</label>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label><b><?php echo htmlspecialchars($event['galerie']); ?> <sup>TND</sup></b></label>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <div class="numbers-row">
                                            <input type="text" value="0" class="qty2 form-control" data-max="10" name="quantite_2797">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="ticket_form_feedback_messages" style="display: none;"></div>
                            <br>
                            <button class="btn_full" id="ticket_form_submit" type="submit">
                                <i id="ticket_form_error_flag" class=" icon_error-circle_alt" style="display: none;"></i>
                                <i id="ticket_form_processing" class="icon_loading animate-spin" style="display: none;"></i>
                                Ajouter au panier</button>
                            <div style="display:none"><label>Fill This Field</label><input type="text" name="honeypot" value="" /></div>
                        </form> <a class="btn_full_outline" id="ticket_form_validate_command" href="../payment/payment.php" style="display: none;"><i class="icon_bag_alt"></i> Valider ma commande </a>
                    </div>

                </aside>
                <div class="col-lg-8" id="single_tour_desc">
                    <div id="single_tour_feat">
                        <ul>
                            <li>
                                <i>
                                    <ion-icon name="location-outline"></ion-icon>
                                </i>
                                <?php echo htmlspecialchars($event['location']); ?>
                            </li>
                            <li><i><ion-icon name="time-outline"></ion-icon></i><?php echo htmlspecialchars($time); ?> H</li>
                            <li><i><ion-icon name="calendar-outline"></ion-icon></i><?php echo htmlspecialchars($date); ?></li>
                        </ul>
                    </div>
                    <div class="d-sm-none d-md-block">
                        <img alt="Image" class="sp-image order-0" src="<?php echo htmlspecialchars($event['image']); ?>" style="width: 100%">
                    </div>

                    <hr />
                    <div class="row">
                        <div class="col-lg-12">
                            <?php echo htmlspecialchars($event['description']); ?>
                        </div>
                    </div>
                    <br>
                </div>

            </div>
        </div>
        <!--End container -->

        <div id="overlay"></div>
        <!-- Mask on input focus -->

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
        <form action="../search.php" role="search" id="searchform" method="get">
            <input value="" name="q" type="text" placeholder="Recherche..." />
            <button type="submit"><i class="icon_set_1_icon-78"></i>
            </button>
            <div style="display:none"><label>Fill This Field</label><input type="text" name="honeypot" value="" /></div>
        </form>
    </div><!-- End Search Menu -->



    <!-- Common scripts -->
    <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>-->
    <!-- Common scripts -->
    <script src="https://teskerti.tn/assets/js/jquery-3.6.1.min.js"></script>
    <script src="https://teskerti.tn/assets/js/common_scripts_min.js"></script>
    <script src="https://teskerti.tn/assets/js/fonctions-custom.js"></script>

    <script type="text/javascript" src="https://teskerti.tn/assets/js/jquery.cookie.min.js"></script>
    <script type="text/javascript">
        (function($) {
            function ticket_form_submit_state() {
                $('#ticket_form_submit').attr('disabled', 'disabled');
                $('#ticket_form_submit_icon').hide();
                $('#ticket_form_error_flag').hide();
                $('#ticket_form_validate_command').hide();
                $('#ticket_form_feedback_messages').hide();
                $('#ticket_form_processing').show();
            }

            function ticket_form_success_state(message) {
                $('#ticket_form_processing').hide();
                $('#ticket_form_error_flag').hide();
                $('#ticket_form_submit_icon').show();
                $('#ticket_form_validate_command').show();
                $('#ticket_form_submit').removeAttr('disabled');
            }

            function ticket_form_error_state(message) {
                $('#ticket_form_processing').hide();
                $('#ticket_form_submit_icon').hide();
                $('#ticket_form_validate_command').hide();
                $('#ticket_form_error_flag').show();
                $('#ticket_form_submit').removeAttr('disabled');
            }

            $(document).on('click', '#ticket_form_submit', function(e) {
                ticket_form_submit_state();
                $.ajax({
                    method: "post",
                    url: "../payment/add.php",
                    data: $('#main-ticket-form').serialize(),
                    success: function(data) {
                        if (data.error === false) {
                            ticket_form_success_state(data.message);
                            setTimeout(function() {
                                $.notify({
                                    icon: '',
                                    title: "<a href=\"../payment/checkout.php\"><h4>Panier</h4>",
                                    message: "<figure><img src='https://teskerti.tn/assets/img/add_ticket.png'/></figure><p>" + data.message + "</p></a>"
                                }, {
                                    icon_type: 'image',
                                    type: 'info',
                                    delay: 500,
                                    timer: 2000,
                                    z_index: 9999,
                                    showProgressbar: false,
                                    placement: {
                                        from: "top",
                                        align: "right"
                                    },
                                    animate: {
                                        enter: 'animated bounceInUp',
                                        exit: 'animated bounceOutDown'
                                    },
                                });
                            }, 10);
                        } else {
                            ticket_form_error_state(data.message);
                            setTimeout(function() {
                                $.notify({
                                    icon: '',
                                    title: "<h4>Erreur</h4>",
                                    message: "<figure><img src='https://teskerti.tn/assets/img/error.png'/></figure><p>" + data.message + "</p>"
                                }, {
                                    icon_type: 'image',
                                    type: 'info',
                                    delay: 500,
                                    timer: 2000,
                                    z_index: 9999,
                                    showProgressbar: false,
                                    placement: {
                                        from: "top",
                                        align: "right"
                                    },
                                    animate: {
                                        enter: 'animated bounceInUp',
                                        exit: 'animated bounceOutDown'
                                    },
                                });
                            }, 10);
                        }
                        if (data.csrf_token) {
                            $('[name=' + csrfName + ']').val(data.csrf_token);
                        } else {
                            $('[name=' + csrfName + ']').val($.cookie(csrfCookie));
                        }
                    },
                    error: function() {
                        $('[name=' + csrfName + ']').val($.cookie(csrfCookie));
                        ticket_form_error_state("\n  <div class=\"alert alert-danger\">\n Nous sommes désolé, votre demande n'a pas été envoyée en raison d'un problème technique.\n<\/div>\n");
                        setTimeout(function() {
                            $.notify({
                                icon: '',
                                title: "<h4>Erreur</h4>",
                                message: "<figure><img src='https://teskerti.tn/assets/img/error.png'></figure> <p>Nous sommes désolé, votre demande n'a pas été envoyée en raison d'un problème technique.</p>"
                            }, {
                                icon_type: 'image',
                                type: 'info',
                                delay: 500,
                                timer: 3000,
                                z_index: 9999,
                                showProgressbar: false,
                                placement: {
                                    from: "top",
                                    align: "right"
                                },
                                animate: {
                                    enter: 'animated bounceInUp',
                                    exit: 'animated bounceOutDown'
                                },
                            });
                        }, 10);
                    },
                    complete: function() {
                        $('.qty2').val("0");
                        updateItemCount();
                        updateCartContent();
                    }
                });
                e.preventDefault();
                return false;
            });

            $(document).on('click', '.btn_map', function(e) {
                $('html, body').animate({
                    scrollTop: $("#map").offset().top
                }, 1000);
            });

            $(".qty2").each(function(index) {
                var input = $(this);
                if (input.is(':disabled')) {
                    input.parent().remove();
                }
            });
        })(window.jQuery);
    </script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-52687636-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-52687636-1');
    </script>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</body>

</html>