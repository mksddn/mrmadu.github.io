<?php

$frm_name  = "ЗАКАЗ";
$recepient = "info@zaborbiz.ru";
$sitename = "zaborbiz.ru";
$subject   = "\"$sitename\"";

$form = trim($_POST["form_name"]);
$name = trim($_POST["name"]);
$city = trim($_POST["city"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$text = trim($_POST["comment"]);

$message = "
Форма: $form<br>
Имя: $name <br>
Город: $city <br>
Телефон: $phone <br>
Почта: $email <br>
Комментарий: $text
";

mail($recepient, $subject, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient");