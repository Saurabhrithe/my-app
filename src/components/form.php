<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['mail'];
$message= $_POST['msg'];
$to = "srsr70srsr@gmail.com";
$subject = "Portfolio Mail";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@my-app.com" . "\r\n";

if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
//header("Location:thankyou.html");
?>