<?php 
session_start();

unset($_SESSION['User']);
unset($_SESSION['UserName']);
$data['ok']=true;
echo json_encode($data);
?>