<link rel="stylesheet" href="/../assets/css/style-prefix.css">
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
        <a href="index.html" style="font-family: almaz; color: black; text-decoration: none; font-size: 150%;">
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
                        echo '<button class="action-btn" onclick="location.href=\'Admin/adminDashboard.php\'">
                <ion-icon name="settings-outline"></ion-icon>
                </button>';
                    }
                }
            } else {
                // User is not logged in, display default icon
                echo '<button class="action-btn" onclick="window.location.href="../../authentification.php"">
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
                return total + (parseInt(item.orchestre) || 0) + (parseInt(item.balcon) || 0) + (parseInt(item.galerie) || 0);
            }, 0);

            document.querySelectorAll('.action-btn .count').forEach(countElement => {
                countElement.textContent = totalCount;
            });
        }

        updateCartCount();

        // Assuming you have a way to know when items are added to the cart,
        // you can call updateCartCount() again after adding items.
        // Example:
        // document.getElementById('ticket_form_submit').addEventListener('click', function() {
        //     // Perform actions related to adding items to cart
        //     updateCartCount();
        // });
    });
</script>