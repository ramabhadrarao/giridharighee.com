<?php

$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$message=$_POST['message'];

ini_set('SMTP','smtp.zoho.com');
ini_set('smtp_port',465);
ini_set('sendmail_from', 'admin@giridharighee.com');

//define the receiver of the email
$to = 'giridharifoods@gmail.com';

//define the subject of the email
$subject = 'New Enquiry from Bhilwara Milk Website'; 

//define the message to be sent. Each line should be separated with \n
$message = "This is A Enquiry from Bhilwara Milk Website, \n Name=".$name."\n"."Email=".$email."\n"."Phone=".$phone."\n"."Message=".$message."\n"; 

//define the headers we want passed. Note that they are separated with \r\n
$headers = 'From: admin@giridharighee.com\r\nReply-To: admin@giridharighee.com';

//send the email
$mail_sent = mail($to, $subject, $message, $headers);

//if the message is sent successfully print "Mail sent correctly". Otherwise print "Mail failed" 
echo $mail_sent ? "<script> alert('Thank you! Your message has been sent successfully.')</script>" : "<script> alert('Sorry, there was an error sending your message. Please try again.')</script>";

echo "<script>
window.location.href='index.html';
</script>";

?>