<?php 
session_start();

$dat['id']=(isset($_SESSION['User']))?$_SESSION['User']:"";
$dat['name']=(isset($_SESSION['UserName']))?$_SESSION['UserName']:"";

echo json_encode($dat);
?>