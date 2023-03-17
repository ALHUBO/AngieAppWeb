<?php 
include("conx.php");
session_start();
include("security.php");

$dat['Error']=0;


$user=(isset($_POST['id']))?AntiSQLInjection($_POST['id']):"";
$facename=(isset($_POST['name']))?AntiSQLInjection($_POST['name']):"";

$dat['id']=0;
if($conx){
    $result = $conx->query("SELECT id,name FROM user WHERE Facebook = '".$user."' LIMIT 1");
    if($result->num_rows==1){
        $row = $result->fetch_array();
        $dat['id']=$row['id'];
        $dat['name']=$row['name'];
        $_SESSION['User']=$dat['id'];
        $_SESSION['UserName']=$dat['name'];
        
    }else{
        if ($conx->query("INSERT INTO user(id, name, correo, pass, Facebook) VALUES (null,'".$facename."','','','".$user."')")) {
            $dat['id']=$user;
            $dat['name']=$facename;
            $_SESSION['User']=$dat['id'];
            $_SESSION['UserName']=$dat['name'];
        }else{
            $dat['ErrorN']=2;
        }
    }
    $conx->close();
}else{
    $dat['Error']=1;
}

echo json_encode($dat);



?>