<?php
session_start();

include "../connection.php";

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // Redirect the user to the authentication page
    header("Location: ../authentification.php");
    exit(); // Stop further execution
}

// Handle form submissions for adding event
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_event'])) {
    // Get event details from the form
    $eventName = isset($_POST['name']) ? mysqli_real_escape_string($conn, $_POST['name']) : '';
    $eventDate = isset($_POST['date']) ? mysqli_real_escape_string($conn, $_POST['date']) : '';
    $eventLocation = isset($_POST['location']) ? mysqli_real_escape_string($conn, $_POST['location']) : '';
    $eventDescription = isset($_POST['description']) ? mysqli_real_escape_string($conn, $_POST['description']) : '';
    $orchestraPrice = isset($_POST['orchestre']) ? intval($_POST['orchestre']) : 0;
    $balconyPrice = isset($_POST['balcon']) ? intval($_POST['balcon']) : 0;
    $galleryPrice = isset($_POST['galerie']) ? intval($_POST['galerie']) : 0;
    $category = isset($_POST['category']) ? mysqli_real_escape_string($conn, $_POST['category']) : '';
    
    // Handle image upload if provided
    $image = '';
    if(isset($_FILES['image'])){
        $image_name = $_FILES['image']['name'];
        $image_tmp_name = $_FILES['image']['tmp_name'];
        $image_size = $_FILES['image']['size'];
        $image_type = $_FILES['image']['type'];
        $image_extension = strtolower(pathinfo($image_name, PATHINFO_EXTENSION));
        $allowed_extensions = array("jpg", "jpeg", "png", "gif");

        if(in_array($image_extension, $allowed_extensions)){
            $image = uniqid() . '.' . $image_extension;
            move_uploaded_file($image_tmp_name, "../path_to_upload_folder/" . $image);
        } else {
            echo "Invalid image format. Allowed formats: JPG, JPEG, PNG, GIF.";
            exit();
        }
    }

    // Insert event into the event table
    $insertEventSql = "INSERT INTO event (name, date, location, description, image) VALUES (?, ?, ?, ?, ?)";
    $insertEventStmt = $conn->prepare($insertEventSql);
    if ($insertEventStmt === false) {
        die("Prepare failed: " . $conn->error);
    }
    $insertEventStmt->bind_param("sssss", $eventName, $eventDate, $eventLocation, $eventDescription, $image);
    if ($insertEventStmt->execute()) {
        // Get the ID of the newly inserted event
        $eventId = $insertEventStmt->insert_id;
        
        // Insert data into the balcon table
        $insertBalconSql = "INSERT INTO balcon (event_id, price) VALUES (?, ?)";
        $insertBalconStmt = $conn->prepare($insertBalconSql);
        if ($insertBalconStmt === false) {
            die("Prepare failed: " . $conn->error);
        }
        $insertBalconStmt->bind_param("ii", $eventId, $balconyPrice);
        if ($insertBalconStmt->execute()) {
            echo "Event added successfully.";
        } else {
            echo "Error adding event: " . $insertBalconStmt->error;
        }
        $insertBalconStmt->close();
    } else {
        echo "Error adding event: " . $insertEventStmt->error;
    }
    $insertEventStmt->close();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Product Detail</title>
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
    <!-- Navbar content -->
    <div class="container-scroller">
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
                            <img src="" alt="profile" />
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
        <div class="container-fluid page-body-wrapper">
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
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-lg-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Add Event</h4>
                                    <form method="POST" action="" enctype="multipart/form-data">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="text" class="form-control" name="name">
                                        </div>
                                        <div class="form-group">
                                            <label>Date</label>
                                            <input type="date" class="form-control" name="date">
                                        </div>
                                        <div class="form-group">
                                            <label>Location</label>
                                            <input type="text" class="form-control" name="location">
                                        </div>
                                        <div class="form-group">
                                            <label>Description</label>
                                            <textarea class="form-control" name="description" required></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label>Orchestre</label>
                                            <input type="number" class="form-control" name="orchestre">
                                        </div>
                                        <div class="form-group">
                                            <label>Balcon</label>
                                            <input type="number" class="form-control" name="balcon">
                                        </div>
                                        <div class="form-group">
                                            <label>Galerie</label>
                                            <input type="number" class="form-control" name="galerie">
                                        </div>
                                        <div class="form-group">
                                            <label>Category</label>
                                            <input type="text" class="form-control" name="category">
                                        </div>
                                        <div class="form-group">
                                            <label>Image</label>
                                            <input type="file" class="form-control" name="image">
                                        </div>
                                        <button type="submit" name="add" class="btn btn-primary">Add event</button>
                                    </form>
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