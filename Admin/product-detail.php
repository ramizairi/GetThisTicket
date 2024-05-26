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
$eventImage = "path/to/default/profile/image.jpg"; // Update this path to your default image

// Fetch user data based on the event ID passed as a query parameter
if (isset($_GET['id'])) {
    $event_id = mysqli_real_escape_string($conn, $_GET['id']);

    // Fetch event data
    $sql = "SELECT * FROM event WHERE id='$event_id'";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        $event = mysqli_fetch_assoc($result);
        // If event has an image, use it
        if (!empty($event['image'])) {
            $eventImage = $event['image'];
        }
    } else {
        die("Query failed: " . mysqli_error($conn));
    }

    // Prepare and execute the orchestre query
    $sql2 = "SELECT * FROM orchestre WHERE eventID = ?";
    $stmt2 = $conn->prepare($sql2);
    if ($stmt2 === false) {
        die("Prepare failed: " . $conn->error);
    }
    $stmt2->bind_param("i", $event_id);
    $stmt2->execute();
    $result2 = $stmt2->get_result(); // Get the result set
    if ($result2->num_rows > 0) {
        $orchestre = $result2->fetch_assoc();
    } else {
        echo "Orchestre not found.";
        exit();
    }
    $stmt2->close();

    // Prepare and execute the balcon query
    $sql3 = "SELECT * FROM balcon WHERE eventID = ?";
    $stmt3 = $conn->prepare($sql3);
    if ($stmt3 === false) {
        die("Prepare failed: " . $conn->error);
    }
    $stmt3->bind_param("i", $event_id);
    $stmt3->execute();
    $result3 = $stmt3->get_result(); // Get the result set
    if ($result3->num_rows > 0) {
        $balcon = $result3->fetch_assoc();
    } else {
        echo "Balcon not found.";
        exit();
    }
    $stmt3->close();

    // Prepare and execute the galerie query
    $sql4 = "SELECT * FROM galerie WHERE eventID = ?";
    $stmt4 = $conn->prepare($sql4);
    if ($stmt4 === false) {
        die("Prepare failed: " . $conn->error);
    }
    $stmt4->bind_param("i", $event_id);
    $stmt4->execute();
    $result4 = $stmt4->get_result(); // Get the result set
    if ($result4->num_rows > 0) {
        $galerie = $result4->fetch_assoc();
    } else {
        echo "Galerie not found.";
        exit();
    }
    $stmt4->close();
} else {
    die("Invalid request.");
}

// Handle update operation
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update'])) {
    $name = isset($_POST['name']) ? mysqli_real_escape_string($conn, $_POST['name']) : '';
    $date = isset($_POST['date']) ? mysqli_real_escape_string($conn, $_POST['date']) : '';
    $location = isset($_POST['location']) ? mysqli_real_escape_string($conn, $_POST['location']) : '';
    $description = isset($_POST['description']) ? mysqli_real_escape_string($conn, $_POST['description']) : '';
    $orchestre = isset($_POST['orchestre']) ? mysqli_real_escape_string($conn, $_POST['orchestre']) : '';
    $balcon = isset($_POST['balcon']) ? mysqli_real_escape_string($conn, $_POST['balcon']) : '';
    $galerie = isset($_POST['galerie']) ? mysqli_real_escape_string($conn, $_POST['galerie']) : '';
    $category = isset($_POST['category']) ? mysqli_real_escape_string($conn, $_POST['category']) : '';
    $image = isset($_FILES['image']) ? $_FILES['image'] : null;

    // Check if a new image file is uploaded
    if (!empty($image['name'])) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($image['name']);
        move_uploaded_file($image['tmp_name'], $target_file);
        $eventImage = $target_file;
    }

    // Update event details in the database
    $updateSql = "UPDATE event SET 
                    name=?, 
                    date=?, 
                    location=?, 
                    description=?,
                    category=?, 
                    image=? 
                  WHERE id=?";
    $updateStmt = $conn->prepare($updateSql);
    if ($updateStmt === false) {
        die("Prepare failed: " . $conn->error);
    }
    $updateStmt->bind_param("ssssssi", $name, $date, $location, $description, $category, $eventImage, $event_id);
    if ($updateStmt->execute()) {
        echo "Event updated successfully.";
    } else {
        echo "Error updating event: " . $updateStmt->error;
    }
    $updateStmt->close();

    // Update orchestre price
    $updateSql2 = "UPDATE orchestre SET price=? WHERE eventID=?";
    $updateStmt2 = $conn->prepare($updateSql2);
    if ($updateStmt2 === false) {
        die("Prepare failed: " . $conn->error);
    }
    $updateStmt2->bind_param("ii", $orchestre, $event_id);
    if ($updateStmt2->execute()) {
        echo "Orchestre price updated successfully.";
    } else {
        echo "Error updating orchestre price: " . $updateStmt2->error;
    }
    $updateStmt2->close();

    // Update balcon price
    $updateSql3 = "UPDATE balcon SET price=? WHERE eventID=?";
    $updateStmt3 = $conn->prepare($updateSql3);
    if ($updateStmt3 === false) {
        die("Prepare failed: " . $conn->error);
    }
    $updateStmt3->bind_param("ii", $balcon, $event_id);
    if ($updateStmt3->execute()) {
        echo "Balcon price updated successfully.";
    } else {
        echo "Error updating balcon price: " . $updateStmt3->error;
    }
    $updateStmt3->close();

    // Update galerie price
    $updateSql4 = "UPDATE galerie SET price=? WHERE eventID=?";
    $updateStmt4 = $conn->prepare($updateSql4);
    if ($updateStmt4 === false) {
        die("Prepare failed: " . $conn->error);
    }
    $updateStmt4->bind_param("ii", $galerie, $event_id);
    if ($updateStmt4->execute()) {
        echo "Galerie price updated successfully.";
    } else {
        echo "Error updating galerie price: " . $updateStmt4->error;
    }
    $updateStmt4->close();
}

// Handle delete operation
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete'])) {
    $deleteSql = "DELETE FROM event WHERE id=?";
    $deleteStmt = $conn->prepare($deleteSql);
    if ($deleteStmt === false) {
        die("Prepare failed: " . $conn->error);
    }
    $deleteStmt->bind_param("i", $event_id);
    if ($deleteStmt->execute()) {
        echo "Event deleted successfully.";
        header("Location: adminDashboard.php"); // Redirect to adminDashboard page after deletion
        exit();
    } else {
        echo "Error deleting event: " . $deleteStmt->error;
    }
    $deleteStmt->close();
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
                            <img src="<?php echo htmlspecialchars($eventImage); ?>" alt="profile" />
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
                                    <h4 class="card-title">Event Detail</h4>
                                    <?php if ($event) : ?>
                                        <form method="POST" action="" enctype="multipart/form-data">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" class="form-control" name="name" value="<?php echo htmlspecialchars($event['name']); ?>">
                                            </div>
                                            <div class="form-group">
                                                <label>Date : <span style="color: red;"><?php echo htmlspecialchars($event['date']); ?></span></label>
                                                <input type="date" class="form-control" name="date" value="<?php echo htmlspecialchars($event['date']); ?>">
                                            </div>
                                            <div class="form-group">
                                                <label>Location</label>
                                                <input type="text" class="form-control" name="location" value="<?php echo htmlspecialchars($event['location']); ?>">
                                            </div>
                                            <div class="form-group">
                                                <label>Description</label>
                                                <textarea class="form-control" name="description" required><?php echo htmlspecialchars($event['description']); ?></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label>Orchestre</label>
                                                <input type="number" class="form-control" name="orchestre" value="<?php echo htmlspecialchars($orchestre['price']); ?>">
                                            </div>
                                            <div class="form-group">
                                                <label>Balcon</label>
                                                <input type="number" class="form-control" name="balcon" value="<?php echo htmlspecialchars($balcon['price']); ?>">
                                            </div>
                                            <div class="form-group">
                                                <label>Galerie</label>
                                                <input type="number" class="form-control" name="galerie" value="<?php echo htmlspecialchars($galerie['price']); ?>">
                                            </div>
                                            <div class="form-group">
                                                <label>Category</label>
                                                <input type="text" class="form-control" name="category" value="<?php echo htmlspecialchars($event['category']); ?>">
                                            </div>
                                            <div class="form-group">
                                                <label>Image</label>
                                                <input type="file" class="form-control" name="image">
                                            </div>
                                            <button type="submit" name="update" class="btn btn-primary">Update</button>
                                            <button type="submit" name="delete" class="btn btn-danger">Delete</button>
                                        </form>
                                    <?php else : ?>
                                        <p>No event found.</p>
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