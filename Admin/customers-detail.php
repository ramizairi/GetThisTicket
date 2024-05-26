<?php
session_start();

include "../connection.php";

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // Redirect the user to the authentication page
    header("Location: ../authentification.php");
    exit(); // Stop further execution
}

// Set a default profile image
$profileImage = "path/to/default/profile/image.jpg"; // Update this path to your default image

// Fetch user data based on the username passed as a query parameter
if (isset($_GET['id'])) {
    $username = mysqli_real_escape_string($conn, $_GET['id']);

    // Fetch user data
    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        $user = mysqli_fetch_assoc($result);
        // If user has a profile image, use it
        if (!empty($user['profile_image'])) {
            $profileImage = $user['profile_image'];
        }
    } else {
        die("Query failed: " . mysqli_error($conn));
    }
} else {
    die("Invalid request.");
}

// Handle update operation
// Handle update operation
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update'])) {
    $fullname = isset($_POST['fullname']) ? mysqli_real_escape_string($conn, $_POST['fullname']) : '';
    $new_username = isset($_POST['username']) ? mysqli_real_escape_string($conn, $_POST['username']) : '';
    $password = isset($_POST['password']) ? mysqli_real_escape_string($conn, $_POST['password']) : '';
    $email = isset($_POST['email']) ? mysqli_real_escape_string($conn, $_POST['email']) : '';
    $phone = isset($_POST['phone']) ? mysqli_real_escape_string($conn, $_POST['phone']) : '';
    $website = isset($_POST['website']) ? mysqli_real_escape_string($conn, $_POST['website']) : '';
    $about = isset($_POST['about']) ? mysqli_real_escape_string($conn, $_POST['about']) : '';
    $image = isset($_FILES['image']) ? $_FILES['image'] : null;

    if (!empty($image['name'])) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($image['name']);
        move_uploaded_file($image['tmp_name'], $target_file);
        $profileImage = $target_file;
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $updateSql = "UPDATE users SET 
                    fullname='$fullname', 
                    username='$new_username', 
                    password='$hashed_password', 
                    email='$email', 
                    phone='$phone', 
                    website='$website', 
                    about='$about', 
                    profile_image='$profileImage' 
                  WHERE username='$username'";

    if (mysqli_query($conn, $updateSql)) {
        echo "User updated successfully.";
        // Optionally, update the session user_id if username is changed
        if ($username !== $new_username) {
            $_SESSION['user_id'] = $new_username;
        }
    } else {
        echo "Error updating user: " . mysqli_error($conn);
    }
}

// Handle delete operation
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete'])) {
    $deleteSql = "DELETE FROM users WHERE username='$username'";
    if (mysqli_query($conn, $deleteSql)) {
        echo "User deleted successfully.";
        header("Location: customers.php"); // Redirect to customers page after deletion
        exit();
    } else {
        echo "Error deleting user: " . mysqli_error($conn);
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Customer Detail</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="assets/vendors/feather/feather.css">
    <link rel="stylesheet" href="assets/vendors/ti-icons/css/themify-icons.css">
    <link rel="stylesheet" href="assets/vendors/css/vendor.bundle.base.css">
    <link rel="stylesheet" href="assets/vendors/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/vendors/mdi/css/materialdesignicons.min.css">
    <!-- endinject -->
    <!-- inject:css -->
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- endinject -->
    <link rel="shortcut icon" href="assets/images/favicon.png" />
</head>

<body>
    <div class="container-scroller">
        <!-- partial:partials/_navbar.html -->
        <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
                <a class="navbar-brand brand-logo me-5" href="../index.php">Get This Ticket</a>
                <a class="navbar-brand brand-logo-mini" href="../index.php">GTT</a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span class="icon-menu"></span>
                </button>
                <ul class="navbar-nav mr-lg-2">
                    <li class="nav-item nav-search d-none d-lg-block">
                        <div class="input-group">
                            <div class="input-group-prepend hover-cursor" id="navbar-search-icon">
                                <span class="input-group-text" id="search">
                                    <i class="icon-search"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search">
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item dropdown">
                        <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                            <i class="icon-bell mx-0"></i>
                            <span class="count"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                            <p class="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-success">
                                        <i class="ti-info-alt mx-0"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <h6 class="preview-subject font-weight-normal">Application Error</h6>
                                    <p class="font-weight-light small-text mb-0 text-muted"> Just now </p>
                                </div>
                            </a>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-warning">
                                        <i class="ti-settings mx-0"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <h6 class="preview-subject font-weight-normal">Settings</h6>
                                    <p class="font-weight-light small-text mb-0 text-muted"> Private message </p>
                                </div>
                            </a>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-info">
                                        <i class="ti-user mx-0"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <h6 class="preview-subject font-weight-normal">New user registration</h6>
                                    <p class="font-weight-light small-text mb-0 text-muted"> 2 days ago </p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item nav-profile dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" id="profileDropdown">
                            <img src="<?php echo htmlspecialchars($profileImage); ?>" alt="profile" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <a href="profilesettings.php" class="dropdown-item">
                                <i class="ti-settings text-primary"></i> Settings </a>
                            <a href="../authentification/logout.php" class="dropdown-item">
                                <i class="ti-power-off text-primary"></i> Logout </a>
                        </div>
                    </li>
                    <li class="nav-item nav-settings d-none d-lg-flex">
                        <a class="nav-link" href="#">
                            <i class="icon-ellipsis"></i>
                        </a>
                    </li>
                </ul>
                <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span class="icon-menu"></span>
                </button>
            </div>
        </nav>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:partials/_sidebar.html -->
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="adminDashboard.php">
                            <i class="icon-grid menu-icon"></i>
                            <span class="menu-title">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="customers.php">
                            <i class="icon-head menu-icon"></i>
                            <span class="menu-title">Customers</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="orders.php">
                            <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">Orders</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="products.php">
                            <i class="icon-bar-graph menu-icon"></i>
                            <span class="menu-title">Products</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="payments.php">
                            <i class="icon-contract menu-icon"></i>
                            <span class="menu-title">Payments</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.php">
                            <i class="icon-head menu-icon"></i>
                            <span class="menu-title">Home</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-lg-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Customer Detail</h4>
                                    <?php if ($user) : ?>
                                        <form method="POST" action="" enctype="multipart/form-data">
                                            <div class="form-group">
                                                <label>Full Name</label>
                                                <input type="text" class="form-control" name="fullname" value="<?php echo htmlspecialchars($user['fullname']); ?>" required>
                                            </div>
                                            <div class="form-group">
                                                <label>Username</label>
                                                <input type="text" class="form-control" name="username" value="<?php echo htmlspecialchars($user['username']); ?>" required>
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" name="password" required>
                                            </div>
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="email" class="form-control" name="email" value="<?php echo htmlspecialchars($user['email']); ?>" required>
                                            </div>
                                            <div class="form-group">
                                                <label>Phone Number</label>
                                                <input type="text" class="form-control" name="phone" value="<?php echo htmlspecialchars($user['phone']); ?>" required>
                                            </div>
                                            <div class="form-group">
                                                <label>Website</label>
                                                <input type="text" class="form-control" name="website" value="<?php echo htmlspecialchars($user['website']); ?>" required>
                                            </div>
                                            <div class="form-group">
                                                <label>About</label>
                                                <textarea class="form-control" name="about" required><?php echo htmlspecialchars($user['about']); ?></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label>Profile Image</label>
                                                <input type="file" class="form-control" name="image">
                                            </div>
                                            <button type="submit" name="update" class="btn btn-primary">Update</button>
                                            <button type="submit" name="delete" class="btn btn-danger">Delete</button>
                                        </form>
                                    <?php else : ?>
                                        <p>No user found.</p>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    <div class="d-sm-flex justify-content-center justify-content-sm-between">
                        <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2023. Made with ❤️ by <a href="https://med-rami.me/" target="_blank">Med Rami Zairi</a> - Get This Ticket</span>
                        <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i class="ti-heart text-danger ms-1"></i></span>
                    </div>
                </footer>
            </div>
            <!-- main-panel ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
    <!-- plugins:js -->
    <script src="assets/vendors/js/vendor.bundle.base.js"></script>
    <!-- endinject -->
    <!-- Plugin js for this page -->
    <!-- End plugin js for this page -->
    <!-- inject:js -->
    <script src="assets/js/off-canvas.js"></script>
    <script src="assets/js/template.js"></script>
    <script src="assets/js/settings.js"></script>
    <script src="assets/js/todolist.js"></script>
    <!-- endinject -->
    <!-- Custom js for this page-->
    <!-- End custom js for this page-->
</body>

</html>