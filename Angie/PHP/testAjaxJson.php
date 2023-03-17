<?php 
$data['respuesta']=(isset($_POST['test']))?$_POST['test']:'No se recibió test.';
echo json_encode($data);
?>