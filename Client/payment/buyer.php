<?php
// Define your API key and receiver wallet ID
$apiKey = '665132b74cad1e76d5377df3:3kl8Jz48m39gqeVbmh3NrY5I7UbRIUD';
$receiverWalletId = '664f2f813b2ed295cd6f7233'; // Replace with your actual receiver wallet ID

// Define payment details
$paymentData = [
    "receiverWalletId" => $receiverWalletId,
    "token" => "USD",
    "amount" => 10000, // Amount in cents (e.g., $100.00)
    "type" => "immediate",
    "description" => "payment description",
    "acceptedPaymentMethods" => ["wallet", "bank_card", "e-DINAR"],
    "lifespan" => 10,
    "checkoutForm" => true,
    "addPaymentFeesToAmount" => true,
    "firstName" => "John",
    "lastName" => "Doe",
    "phoneNumber" => "22777777",
    "email" => "john.doe@gmail.com",
    "orderId" => "1234657",
    "webhook" => "https://merchant.tech/api/notification_payment",
    "silentWebhook" => true,
    "successUrl" => "https://dev.konnect.network/gateway/payment-success",
    "failUrl" => "https://dev.konnect.network/gateway/payment-failure",
    "theme" => "light"
];

// Convert the payment data to JSON
$jsonData = json_encode($paymentData);

// Initialize cURL
$ch = curl_init();

// Set the URL
curl_setopt($ch, CURLOPT_URL, "https://api.preprod.konnect.network/api/v2/payments/init-payment");

// Set the method to POST
curl_setopt($ch, CURLOPT_POST, 1);

// Set the headers
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "x-api-key: $apiKey"
]);

// Set the request body
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);

// Return the response instead of printing it
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the request
$response = curl_exec($ch);

// Close cURL
curl_close($ch);

// Decode the JSON response
$responseData = json_decode($response, true);

// Check if the request was successful
if (isset($responseData['payUrl'])) {
    // Redirect the user to the payment URL
    header("Location: " . $responseData['payUrl']);
    exit;
} else {
    // Handle the error
    echo "Error initiating payment: " . $response;
}
?>





<!--
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Embed Another Webpage</title>
    <style>
        iframe {
            width: 100%;
            height: 100vh; /* Adjust as needed */
            border: none;
        }
    </style>
</head>
<body>
    <iframe src="https://api.konnect.network/NIDgMZoYL"></iframe>
</body>
</html> -->
