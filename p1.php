<?php
/**
 * Created by PhpStorm.
 * User: Xurxo
 * Date: 09/06/2016
 * Time: 16:03
 */
// form params
$browser = $_REQUEST["browser"];
$date = $_REQUEST["date"];
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
$email = $_REQUEST["email"];
$name = $_REQUEST["name"];
$lastname = $_REQUEST["lastname"];
$gender = $_REQUEST["gender"];

$animation = isset($_REQUEST["animation"]) ? $_REQUEST["animation"] : '';
$comedy = isset($_REQUEST["comedy"]) ? $_REQUEST["comedy"] : '';
$crime = isset($_REQUEST["crime"]) ? $_REQUEST["crime"] : '';
$documentary = isset($_REQUEST["documentary"]) ? $_REQUEST["documentary"] : '';
$drama = isset($_REQUEST["drama"]) ? $_REQUEST["drama"] : '';
$sports = isset($_REQUEST["sports"]) ? $_REQUEST["sports"] : '';
$news = isset($_REQUEST["news"]) ? $_REQUEST["news"] : '';

$channels = "";
if($animation) $channels = $channels . " " . "animation";
if($comedy) $channels = $channels . " " . "comedy";
if($crime) $channels = $channels . " " . "crime";
if($documentary) $channels = $channels . " " . "documentary";
if($drama) $channels = $channels . " " . "drama";
if($sports) $channels = $channels . " " . "sports";
if($news) $channels = $channels . " " . "news";

//server params
$server = $_SERVER["HTTP_HOST"];
$software = $_SERVER["SERVER_SOFTWARE"];
$protocol = $_SERVER["SERVER_PROTOCOL"];
$remote = $_SERVER["REMOTE_ADDR"];
$method = $_SERVER["REQUEST_METHOD"];
$request_uri = $_SERVER["REQUEST_URI"];
$user_agent = $_SERVER["HTTP_USER_AGENT"];

?>

<html<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <link rel="stylesheet" type="text/css" href="p1.css" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
<div class="body">
    <div class="title">
        <h1>Practica 1 LRO</h1>
    </div>
    <div class="settings">
        Browser: <?php echo $browser ?> <br>
        Date: <?php echo $date ?> <br>
        Server address: <?php echo $server ?> <br>
        Server software: <?php echo $software ?> <br>
        Requested URI: <?php echo $request_uri ?> <br>
        Remote address: <?php echo $remote ?> <br>
        Protocol: <?php echo $protocol ?> <br>
        User Agent: <?php echo $user_agent ?> <br>
        Method: <?php echo $method ?> <br> <br>
    </div>
    <div class="main">
        Username: <?php echo $username ?> <br>
        Password: <?php echo $password ?> <br> <br>

        Name: <?php echo $name ?> <br>
        Last name: <?php echo $lastname ?> <br>
        Email: <?php echo $email ?> <br>
        Gender: <?php echo $gender ?> <br> <br>

        Channels:
        <div class="box">
            <?php
            if($channels != "") {
                echo $channels;
            } else {
                echo "No channels selected.";
            }
            ?>
        </div>

    </div>
</div>
</body>
</html>