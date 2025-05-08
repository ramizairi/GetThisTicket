<?php

require_once 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    try {
        $user = $auth->createUserWithEmailAndPassword($email, $password);
        $_SESSION['uid'] = $user->uid;
        header("Location: dashboard.php");
    } catch (\Kreait\Firebase\Exception\Auth\EmailExists $e) {
        echo 'The email address is already in use.';
    } catch (Exception $e) {
        echo 'Something went wrong: ' . $e->getMessage();
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Sign Up</title>
</head>
<body>

<h2>Sign Up</h2>
<form method="post">
    <input type="email" name="email" placeholder="Email" required><br><br>
    <input type="password" name="password" placeholder="Password" required><br><br>
    <button type="submit">Sign Up</button>
</form>

</body>
</html>
