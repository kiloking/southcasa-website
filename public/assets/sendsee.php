<?php
	$sendTo = "therain0908@gmail.com,maizizi@gmail.com";//收件者
	$subject = $_POST['msgMailTitle'];  //主旨
	$namess = $_POST['name'] ;
	$tel = $_POST['tel'];
	$email = $_POST['mail'] ;
	// $house_types = $_POST['house_types']; 
	// $area = $_POST['area']; 

	$msg = "顧客姓名:".$namess."\n".
		"聯絡電話:". $tel."\n".   
		"電子信箱:". $email."\n";
		// "房屋類型:". $house_types."\n".
		// "居住區域:". $area."\n";
	mb_internal_encoding("UTF-8");
	mail($sendTo, $subject, $msg);
	// if (mail($sendTo, $subject, $msg)) {
	// 		http_response_code(200);
	// } else {
	// 		http_response_code(500);
	// }
	// ini_set( 'display_errors', 1 );
	// error_reporting( E_ALL );
	// $from = "test@hostinger-tutorials.com";
	// $to = "test@hostinger.com";
	// $subject = "Checking PHP mail";
	// $message = "PHP mail works just fine";
	// $headers = "From:" . $from;
	// if(mail($sendTo,$subject,$msg)) {
	// 		echo "The email message was sent.";
	// } else {
	// 		echo "The email message was not sent.";
	// }
?>