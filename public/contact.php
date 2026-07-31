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

    $recaptcha_secret = "6Lfnbm4tAAAAAIvTF7JBf3Pvv9sbAEE6WoAyJZ9C";
    
    $email = filter_var($_POST["email"] ?? '', FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST["subject"] ?? '');
    $message = htmlspecialchars($_POST["message"] ?? '');
    $recaptcha_response = $_POST['g-recaptcha-response'] ?? '';

    if (empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo json_encode(["message" => "Veuillez remplir tous les champs."]);
        exit;
    }

    if (empty($recaptcha_response)) {
        http_response_code(400);
        echo json_encode(["message" => "Veuillez valider le Captcha."]);
        exit;
    }

    $verify_response = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $response_data = json_decode($verify_response);

    if (!$response_data->success) {
        http_response_code(400);
        echo json_encode(["message" => "Validation du Captcha échouée."]);
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
