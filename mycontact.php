<?php

$name=$_POST['name1'];

$email=$_POST['email1'];

$mobileno=$_POST['mobile1'];

$sub=$_POST['subject'];

$message=$_POST['message'];

ini_set('SMTP','smtp.zoho.com');

ini_set('smtp_port',465);

ini_set('sendmail_from', 'admin@giridharighee.com');



//define the receiver of the email

$to = 'giridharifoods@gmail.com';

//define the subject of the email

//$subject = $sub; 

//define the message to be sent. Each line should be separated with \n

$message = "This is A Enquiry from https://giridharighee.com/ , \n Name=".$name."\n"."Email=".$email."\n"."mobile no=".$mobileno."\n"."Message=".$message."\n"; 



//define the headers we want passed. Note that they are separated with \r\n

$headers = 'From: admin@giridharighee.com\r\nReply-To: admin@giridharighee.com';



//send the email

$mail_sent = mail($to, $sub, $message, $headers);

//mail($to, $sub, $message, $headers);



//if the message is sent successfully print "Mail sent correctly". Otherwise print "Mail failed" 

echo $mail_sent ? "<script> alert('Mail sent')</script>" : "<script> alert('Mail not sent')</script>";

echo "<script>

window.location.href='index.html';

</script>";

?>