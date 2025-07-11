<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $password = isset($_POST['password']) ? trim($_POST['password']) : '';
    $remember = isset($_POST['remember-me']) ? true : false;

    if (empty($email) || empty($password)) {
        echo "Please fill in both email and password.";
        exit;
    }

    if ($email === "user@example.com" && $password === "password123") {
        echo "Login successful!";
        if ($remember) {
            echo " (Remember me selected)";
        }
    } else {
        echo "Invalid email or password.";
    }
} else {
    echo "Invalid request method.";
}
?>
