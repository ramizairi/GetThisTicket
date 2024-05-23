<link rel="stylesheet" href="/../assets/css/style-prefix.css">
<div class="header-top">

    <div class="container">

        <ul class="header-social-container">

            <li>
                <a href="#" class="social-link">
                    <iaon-icon name="logo-facebook">
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
                Cuppon code for 5% discount.
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
                        echo '<button class="action-btn" onclick="location.href=\'Client/clientDashboard.php\'">
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
                echo '<button class="action-btn" onclick="location.href=\'authentification.php\'">
                <ion-icon name="person-outline"></ion-icon>
                </button>';
            }
            ?>
            <button class="action-btn">
                <ion-icon name="heart-outline"></ion-icon>
                <span class="count">0</span>
            </button>
            <button class="action-btn">
                <ion-icon name="bag-handle-outline"></ion-icon>
                <span class="count">0</span>
            </button>
        </div>
    </div>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</div>