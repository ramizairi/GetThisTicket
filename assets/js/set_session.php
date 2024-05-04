<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["email"])) {
    $_SESSION['userEmail'] = $_GET["email"];
    $_SESSION['loggedIn'] = true;
}

// Redirect back to index.php
header("Location: index.php");
exit;
