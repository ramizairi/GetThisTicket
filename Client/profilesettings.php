<?php
session_start();

include "../connection.php";

// Check if the user is not logged in, redirect to authentication page
if (!isset($_SESSION['user_id'])) {
    header("Location: ../authentification.php");
    exit(); // Stop further execution
}

// Set default profile image URL if not set
$profileImage = isset($_SESSION['profileImage']) ? $_SESSION['profileImage'] : "../assets/images/image.png";

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Update user information in the users table
    $userId = $_SESSION['user_id'];
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $about = $_POST['about'];

    $updateUserStmt = $conn->prepare("UPDATE users SET fullname=?, email=?, phone=?, website=?, about=? WHERE id=?");
    $updateUserStmt->bind_param("sssssi", $fullName, $email, $phone, $website, $about, $userId);
    $updateUserResult = $updateUserStmt->execute();

    if ($updateUserResult) {
        // Check if the user already has an address
        $checkAddressStmt = $conn->prepare("SELECT id FROM address WHERE id_user = ?");
        $checkAddressStmt->bind_param("i", $userId);
        $checkAddressStmt->execute();
        $existingAddress = $checkAddressStmt->get_result()->fetch_assoc();

        if ($existingAddress) {
            // If the user has an existing address, update it
            $street = $_POST['street'];
            $city = $_POST['city'];
            $state = $_POST['state'];
            $zipCode = $_POST['zipCode'];

            $updateAddressStmt = $conn->prepare("UPDATE address SET street=?, city=?, state=?, zipcode=? WHERE id_user=?");
            $updateAddressStmt->bind_param("ssssi", $street, $city, $state, $zipCode, $userId);
            $updateAddressResult = $updateAddressStmt->execute();

            if ($updateAddressResult) {
                // Redirect to the same page with a success message
                header("Location: " . $_SERVER['PHP_SELF'] . "?success=1");
                exit();
            } else {
                // Redirect to the same page with an error message
                header("Location: " . $_SERVER['PHP_SELF'] . "?error=1");
                exit();
            }
        } else {
            // If the user doesn't have an address, insert a new one
            $street = $_POST['street'];
            $city = $_POST['city'];
            $state = $_POST['state'];
            $zipCode = $_POST['zipCode'];

            $insertAddressStmt = $conn->prepare("INSERT INTO address (street, city, state, zipcode, id_user) VALUES (?, ?, ?, ?, ?)");
            $insertAddressStmt->bind_param("ssssi", $street, $city, $state, $zipCode, $userId);
            $insertAddressResult = $insertAddressStmt->execute();

            if ($insertAddressResult) {
                // Redirect to the same page with a success message
                header("Location: " . $_SERVER['PHP_SELF'] . "?success=1");
                exit();
            } else {
                // Redirect to the same page with an error message
                header("Location: " . $_SERVER['PHP_SELF'] . "?error=1");
                exit();
            }
        }
    } else {
        // Redirect to the same page with an error message
        header("Location: " . $_SERVER['PHP_SELF'] . "?error=1");
        exit();
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">


    <title>account setting or edit profile - Bootdey.com</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/vendors/feather/feather.css">
    <link rel="stylesheet" href="assets/vendors/ti-icons/css/themify-icons.css">
    <link rel="stylesheet" href="assets/vendors/css/vendor.bundle.base.css">
    <link rel="stylesheet" href="assets/vendors/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/vendors/mdi/css/materialdesignicons.min.css">
    <!-- endinject -->
    <!-- Plugin css for this page -->
    <!-- <link rel="stylesheet" href="assets/vendors/datatables.net-bs4/dataTables.bootstrap4.css"> -->
    <link rel="stylesheet" href="assets/vendors/datatables.net-bs5/dataTables.bootstrap5.css">
    <link rel="stylesheet" href="assets/vendors/ti-icons/css/themify-icons.css">
    <link rel="stylesheet" type="text/css" href="assets/js/select.dataTables.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style type="text/css">
        body {
            margin: 0;
            padding-top: 10%;
            padding-bottom: 10%;
            color: #2e323c;
            background: #f5f6fa;
            position: relative;
            height: 100%;
            background-image: url('../assets/images/profile bg.jpg');
            display: flex;
            justify-content: center;
            align-items: center;
            background-size: cover;
        }

        .account-settings .user-profile {
            margin: 0 0 1rem 0;
            padding-bottom: 1rem;
            text-align: center;
        }

        .account-settings .user-profile .user-avatar {
            margin: 0 0 1rem 0;
        }

        .account-settings .user-profile .user-avatar img {
            width: 90px;
            height: 90px;
            -webkit-border-radius: 100px;
            -moz-border-radius: 100px;
            border-radius: 100px;
        }

        .account-settings .user-profile h5.user-name {
            margin: 0 0 0.5rem 0;
        }

        .account-settings .user-profile h6.user-email {
            margin: 0;
            font-size: 0.8rem;
            font-weight: 400;
            color: #9fa8b9;
        }

        .account-settings .about {
            margin: 2rem 0 0 0;
            text-align: center;
        }

        .account-settings .about h5 {
            margin: 0 0 15px 0;
            color: #007ae1;
        }

        .account-settings .about p {
            font-size: 0.825rem;
        }

        .form-control {
            border: 1px solid #cfd1d8;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border-radius: 2px;
            font-size: .825rem;
            background: #ffffff;
            color: #2e323c;
        }

        .card {
            background: #ffffff;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            border: 0;
            margin-bottom: 1rem;
        }
    </style>
</head>

<body>

    <div class="container">
        <div class="row gutters">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="account-settings">
                            <div class="user-profile">
                                <div class="user-avatar">
                                    <img src="<?php echo $profileImage; ?>" alt="User Picture">
                                </div>
                                <?php
                                if (isset($_SESSION['username'])) {
                                    echo "<h5 class='user-name'>" . $_SESSION['username'] . "</h5>";
                                }
                                if (isset($_SESSION['email'])) {
                                    echo "<h6 class='user-email'>" . $_SESSION['email'] . "</h6>";
                                }
                                ?>
                            </div>
                            <div class="about">
                                <h5>About</h5>
                                <p>I'm Yuki. Full Stack Designer. I enjoy creating user-centric, delightful and human experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                    <div class="card-body">
                        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                            <div class="row gutters">

                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 class="mb-2 text-primary">Personal Details</h6>
                                </div>
                                <!-- Personal Details Section -->
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="fullName">Full Name</label>
                                        <input type="text" class="form-control" id="fullName" name="fullName" placeholder="Enter full name" required>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="eMail">Email</label>
                                        <input type="email" class="form-control" id="eMail" name="email" placeholder="Enter email ID" required>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" class="form-control" id="phone" name="phone" placeholder="Enter phone number">
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="website">Website URL</label>
                                        <input type="url" class="form-control" id="website" name="website" placeholder="Website URL">
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="row gutters">
                                <!-- Address Section -->
                                <hr>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 class="mb-2 text-primary">Address</h6>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="Street">Street</label>
                                        <input type="text" class="form-control" id="Street" name="street" placeholder="Enter Street">
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="ciTy">City</label>
                                        <input type="text" class="form-control" id="ciTy" name="city" placeholder="Enter City">
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="sTate">State</label>
                                        <input type="text" class="form-control" id="sTate" name="state" placeholder="Enter State">
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="zIp">Zip Code</label>
                                        <input type="text" class="form-control" id="zIp" name="zipCode" placeholder="Zip Code">
                                    </div>
                                </div>
                            </div>
                            <div class="row gutters">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="text-right">
                                        <button type="submit" name="submit" class="btn btn-primary">Update</button>
                                        <a href="clientDashboard.php">
                                            <button type="button" id="cancel" name="cancel" class="btn btn-secondary">Cancel</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript">
        // Your JavaScript code
    </script>
</body>


</html>