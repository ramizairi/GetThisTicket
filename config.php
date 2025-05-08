<?php
session_start();

$server = "localhost";
$username = "root";
$password = "";
$db = "getthisticket";

$conn = new mysqli($server, $username, $password, $db);

// Function to insert user data into the database after sign-up
function insertUser($conn, $email, $username, $password)
{
    $sql = "INSERT INTO users (email, username, password) VALUES ('$email', '$username', '$password')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Set session on successful login
if (isset($_SESSION['userEmail'], $_SESSION['userName'], $_SESSION['userPassword'])) {
    $_SESSION['loggedIn'] = true;
}
