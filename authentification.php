<?php
session_start();

// Include Firebase SDK
require_once 'config.php';

if (isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] === true) {
  header("Location: index.php");
  exit;
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
        <!-- Sign-in Form -->
        <form class="sign-in-form">
          <h2 class="title">Sign In</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="email" id="LoginEmail" placeholder="Email" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" id="LoginPassword" placeholder="Password" />
          </div>
          <button type="button" onclick="login()" class="Lbtn solid">Login</button>
          <p class="social-text">Or Sign in with social platforms</p>
          <div class="social-media">
            <a class="social-icon" onclick="signInWithGoogle()">
              <i class="fab fa-google"></i>
            </a>
            <a class="social-icon" onclick="signUpWithFacebook()">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </form>

        <!-- Sign-up Form -->
        <form class="sign-up-form">
          <h2 class="title">Sign Up</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" id="full_name" placeholder="Username" />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button type="button" onclick="register()" class="Sbtn solid">Sign Up</button>
          <p class="social-text">Or Sign up with social platforms</p>
          <div class="social-media">
            <a class="social-icon" onclick="signUpWithFacebook()">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="social-icon" onclick="signUpWithGoogle()">
              <i class="fab fa-google"></i>
            </a>
          </div>
        </form>

      </div>
    </div>
    <div class="panels-container">

      <div class="panel left-panel">
        <div class="content">
          <h3>New here?</h3>

          <form action="logout.php" method="post">
            <button type="submit">Logout</button>
          </form>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
          <button class="Sbtn transparent" id="sign-up-btn">Sign Up</button>
        </div>
        <img src="assets/images/Signin event.webp" class="image" alt="">
      </div>

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

</body>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#available-libraries -->
<input type="hidden" id="redirectUrl" value="index.php">
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-database.js"></script>
<script src="assets/js/Auth.js"></script>

</html>
