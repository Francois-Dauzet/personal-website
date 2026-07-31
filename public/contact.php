<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    exit(0);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "contact@francois-d.com"; 

    $email = filter_var($_POST["email"] ?? '', FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST["subject"] ?? '');
    $message = htmlspecialchars($_POST["message"] ?? '');

    if (empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo json_encode(["message" => "Veuillez remplir tous les champs."]);
        exit;
    }

    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Email envoyé avec succès !"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Échec de l'envoi de l'email."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Méthode non autorisée."]);
}
?>
