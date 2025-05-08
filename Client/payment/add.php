<?php
session_start();
header('Content-Type: application/json');

// Function to sanitize input
function sanitize_input($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check for CSRF token validity if applicable
    // (Assuming CSRF protection is implemented)
    // if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    //     echo json_encode(['error' => true, 'message' => 'Invalid CSRF token.']);
    //     exit;
    // }

    // Get and sanitize input values
    $product_id = isset($_POST['product_id']) ? sanitize_input($_POST['product_id']) : null;
    $quantite_2797 = isset($_POST['quantite_2797']) ? intval($_POST['quantite_2797']) : 0;
    $quantite_2798 = isset($_POST['quantite_2798']) ? intval($_POST['quantite_2798']) : 0;
    $quantite_2799 = isset($_POST['quantite_2799']) ? intval($_POST['quantite_2799']) : 0;

    // Validate input
    if (!$product_id || ($quantite_2797 <= 0 && $quantite_2798 <= 0 && $quantite_2799 <= 0)) {
        echo json_encode(['error' => true, 'message' => 'Invalid input.']);
        exit;
    }

    // Initialize the cart if it doesn't exist
    if (!isset($_SESSION['cart'])) {
        $_SESSION['cart'] = [];
    }

    // Add items to the cart
    $_SESSION['cart'][] = [
        'product_id' => $product_id,
        'quantite_2797' => $quantite_2797,
        'quantite_2798' => $quantite_2798,
        'quantite_2799' => $quantite_2799
    ];

    // Response with success
    echo json_encode([
        'error' => false,
        'message' => 'Tickets added to cart successfully.',
        // 'csrf_token' => $_SESSION['csrf_token'] // If using CSRF tokens
    ]);
} else {
    // If the request method is not POST, return an error
    echo json_encode(['error' => true, 'message' => 'Invalid request method.']);
}
