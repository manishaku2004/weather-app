<?php
$apikey="752fec28fc6746d6834180243260104";
if(isset($_GET['city'])){
    $city=$_GET['city'];
    $url = "http://api.weatherapi.com/v1/current.json?key=$apiKey&q=$city&aqi=yes";

    $response = file_get_contents($url);

    echo $response; // JSON return karega
}
?>