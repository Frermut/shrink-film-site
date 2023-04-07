<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$name  = urldecode($name);
$email = urldecode($email);
$name = trim($name);
$email = trim($email);

// echo $name;
// echo "<br>";
// echo $email;

if (mail($email, "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From: info@poliolefin.com \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>