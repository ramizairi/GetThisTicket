<?php
$apiKey = '665132b74cad1e76d5377df3:3kl8Jz48m39gqeVbmh3NrY5I7UbRIUD';
$receiverWalletId = '664f2f813b2ed295cd6f7233';

// Define payment details
$paymentData = [
    "receiverWalletId" => $receiverWalletId,
    "token" => "USD",
    "amount" => 10000,
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


$jsonData = json_encode($paymentData);


$ch = curl_init();


curl_setopt($ch, CURLOPT_URL, "https://api.preprod.konnect.network/api/v2/payments/init-payment");


curl_setopt($ch, CURLOPT_POST, 1);


curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "x-api-key: $apiKey"
]);


curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);


curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);


$response = curl_exec($ch);


if ($response === false) {
    $error = curl_error($ch);
    curl_close($ch);
    die("cURL Error: " . $error);
}


curl_close($ch);


$responseData = json_decode($response, true);


if (isset($responseData['payUrl'])) {
    
    header("Location: " . $responseData['payUrl']);
    exit;
} else {
    
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