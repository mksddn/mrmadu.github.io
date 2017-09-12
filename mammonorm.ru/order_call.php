<?php

header("Content-type: text/html; charset=utf-8");

function sendMail($name,$email,$phone,$user_message) {
	$name = strip_tags(urldecode($name));
	$phone = strip_tags(urldecode($phone));
	
	if (isset($user_message) && $user_message != 'undefined') {
		
		$user_message = strip_tags(urldecode($user_message));
		
		$user_message = "<p>".$user_message."</p>";
	
	}
	
	else {
		
		$user_message = '';
		
	}
	
	if (isset($email) && $email != 'undefined') {
	
		$email = strip_tags(urldecode($email));
		
		$email = "<p align=\"left\">Контактный e-mail: <b>".$email."</b></p>";
		
	}
	
	else {
		
		$email = '';
		
	}
	
	$message = "<span align=\"left\"><h6>Заявка на обратный звонок (отправлено ".date('Y/m/d H:i:s').")</h6></span><br/><h3 align=\"left\">".$name."</h3><p align=\"left\">Контактный телефон: <b>".$phone."</b></p>".$email.$user_message;
	$header .= "Content-type: text/html; charset=\"utf-8\"";
	$header.="From: ".$name;
	mail("info@mammonorm.ru","Заявка на обратный звонок от ".$name,$message,$header);
}

	sendMail($_GET['user_name'],$_GET['user_email'],$_GET['user_phone'],$_GET['user_message']);

?>