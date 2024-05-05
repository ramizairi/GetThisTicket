<?php
session_start();
include "connection.php";

// Sign Up Logic
if (isset($_POST['register'])) {
  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Check if the email already exists
  $check_stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
  $check_stmt->bind_param("s", $email);
  $check_stmt->execute();
  $check_result = $check_stmt->get_result();

  if ($check_result->num_rows > 0) {
    echo "<div class='alert alert-1-warning'>
            <h3 class='alert-title'>This email is already in use. Please choose another one.</h3>
            <p class='alert-content'>Get This Ticket</p>
         </div>";
  } else {
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $insert_stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    if ($insert_stmt) {
      $insert_stmt->bind_param("sss", $username, $email, $hashed_password);
      if ($insert_stmt->execute()) {
        header("Location: index.php");
      } else {

        echo "<div class='alert alert-1-warning'>
            <h3 class='alert-title'>Registration failed. Please try again later.</h3>
            <p class='alert-content'>Get This Ticket</p>
          </div>";
      }
    } else {
      echo "<div class='alert alert-1-warning'>
              <h3 class='alert-title'>Prepare statement failed</h3>
              <p class='alert-content'>. $conn->error .</p>
            </div>";
    }
  }
}

// Sign In Logic
if (isset($_POST['login'])) {
  $email = $_POST['login'];
  $password = $_POST['password'];

  $select_stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
  $select_stmt->bind_param("s", $email);
  $select_stmt->execute();
  $result = $select_stmt->get_result();

  if ($result->num_rows == 1) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
      // Password is correct, start a new session
      $_SESSION['username'] = $row['username'];
      $_SESSION['email'] = $email;
      $_SESSION['user_id'] = $row['id'];
      $_SESSION['logged_in'] = true;
      header("Location: index.php"); // Redirect to welcome page after successful login
    } else {
      echo "<div class='alert alert-1-primary'>
                <h3 class='alert-title'>Welcome back !</h3>
                <p class='alert-content'>Get This Ticket</p>
           </div>";
    }
  } else {
    echo "<div class='alert alert-1-warning'>
              <h3 class='alert-title'>Error in login</h3>
              <p class='alert-content'>Get This Ticket</p>
         </div>";
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SignIn&SignUp</title>
  <link rel="stylesheet" type="text/css" href="assets/css/AuthStyle.css" />
  <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
</head>

<body>
  <div class="container">
    <div class="forms-container">
      <div class="signin-signup">
        <!-- SIGN IN FORM -->
        <form action="" class="sign-in-form" method="POST">
          <h2 class="title">Sign In</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" name="login" placeholder="Email" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" class="Lbtn solid" />
        </form>

        <!-- SIGN UP FORM -->
        <form action="" class="sign-up-form" method="POST">
          <h2 class="title">Sign Up</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" name="register" value="Sign Up" class="Sbtn solid" />
        </form>
      </div>
    </div>
    <!-- Panels container -->
    <div class="panels-container">
      <!-- Left panel -->
      <div class="panel left-panel">
        <div class="content">
          <h3>New here?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
          <button class="Sbtn transparent" id="sign-up-btn">Sign Up</button>
        </div>
        <img src="assets/images/Signin event.webp" class="image" alt="">
      </div>
      <!-- Right panel -->
      <div class="panel right-panel">
        <div class="content">
          <h3>One of us?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
          <button class="Lbtn transparent" id="sign-in-btn">Sign In</button>
        </div>
        <img src="assets/images/signup event.webp" class="image" alt="">
      </div>
    </div>
  </div>
  <script src="assets/js/Auth.js"></script>
</body>

</html>