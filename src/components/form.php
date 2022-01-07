<?php
//get data from form  
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email= $_POST['mail'];
$phone = $_POST['phone'];
$message= $_POST['msg'];
$to = "srsr70srsr@gmail.com";
$subject = "Portfolio Mail";
$txt ="Name = ". $fname . "\r\n Phone =" . $phone . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n";

if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
//header("Location:thankyou.html");
?>