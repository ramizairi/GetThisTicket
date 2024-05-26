<link rel="stylesheet" href="../../assets/css/style-prefix.css">
<div class="header-top">
    <div class="container">
        <ul class="header-social-container">
            <li>
                <a href="#" class="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                </a>
            </li>
            <li>
                <a href="#" class="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a>
            </li>
            <li>
                <a href="#" class="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
            </li>
            <li>
                <a href="#" class="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
            </li>
        </ul>
        <div class="header-alert-news">
            <p>
                Use
                <b>Use "Welcome"</b>
                Coupon code for 5% discount.
            </p>
        </div>
    </div>
</div>
<div class="header-main">
    <div class="container">
        <a href="../../index.php" style="font-family: almaz; color: black; text-decoration: none; font-size: 150%;">
            Get This Ticket
        </a>
        <div class="header-search-container">
            <input type="search" name="search" class="search-field" placeholder="Search...">
            <button class="search-btn">
                <ion-icon name="search-outline"></ion-icon>
            </button>
        </div>
        <div class="header-user-actions">
            <?php
            // Check if the user is logged in
            if (isset($_SESSION['user_id'])) {
                $user_id = $_SESSION['user_id'];
                $query = "SELECT usertype FROM users WHERE id = $user_id";
                $result = mysqli_query($conn, $query);
                if ($result && mysqli_num_rows($result) > 0) {
                    $row = mysqli_fetch_assoc($result);
                    $usertype = $row['usertype'];
                    // Display appropriate icon based on user type
                    if ($usertype == 'client') {
                        echo '<button class="action-btn" onclick="window.location.href="../payment/checkout.php"">
                <ion-icon name="settings-outline"></ion-icon>
                </button>';
                    } elseif ($usertype == 'admin') {
                        echo '<button class="action-btn" onclick="location.href=\'admin/adminDashboard.php\'">
                <ion-icon name="settings-outline"></ion-icon>
                </button>';
                    }
                }
            } else {
                // User is not logged in, display default icon
                echo '<button class="action-btn" onclick="window.location.href="authentification.php"">
                <ion-icon name="person-outline"></ion-icon>
                </button>';
            }
            ?>
            <button class="action-btn" onclick="window.location.href='../payment/checkout.php'">
                <ion-icon name="bag-handle-outline"></ion-icon>
                <span class="count">0</span>
            </button>
        </div>
    </div>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        function updateCartCount() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let totalCount = cart.reduce((total, item) => {
                return total + (parseInt(item.Qorchestre) || 0) + (parseInt(item.Qbalcon) || 0) + (parseInt(item.Qgalerie) || 0);
            }, 0);

            document.querySelectorAll('.action-btn .count').forEach(countElement => {
                countElement.textContent = totalCount;
            });
        }

        function addToCart() {
            const productId = document.getElementById('product_id').value;
            const productImage = <?php echo json_encode($event['image']); ?>;
            const productName = <?php echo json_encode($event['name']); ?>;
            const productDate = <?php echo json_encode($event['date']); ?>;
            const productLocation = <?php echo json_encode($event['location']); ?>;

            const priceOrchestreU = <?php echo json_encode($orchestre['price']); ?>;
            const priceBalconU = <?php echo json_encode($balcon['price']); ?>;
            const priceGalerieU = <?php echo json_encode($galerie['price']); ?>;

            const quantiteOrchestre = document.getElementById('quantite_2797').value;
            const quantiteBalcon = document.getElementById('quantite_2798').value;
            const quantiteGalerie = document.getElementById('quantite_2799').value;

            const priceOrchestre = quantiteOrchestre * priceOrchestreU;
            const priceBalcon = quantiteBalcon * priceBalconU;
            const priceGalerie = quantiteGalerie * priceGalerieU;
            const totalPrice = priceOrchestre + priceBalcon + priceGalerie;

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const event = {
                id: productId,
                image: productImage,
                name: productName,
                date: productDate,
                location: productLocation,
                Porchestre: priceOrchestreU,
                Pbalcon: priceBalconU,
                Pgalerie: priceGalerieU,
                Qorchestre: quantiteOrchestre,
                Qbalcon: quantiteBalcon,
                Qgalerie: quantiteGalerie,
                totalPrice: totalPrice
            };

            cart.push(event);
            updateCartCount();
        }

        document.getElementById('ticket_form_submit').addEventListener('click', function(e) {
            e.preventDefault();
            addToCart();
        });

        updateCartCount();
    });
</script>