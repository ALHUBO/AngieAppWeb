<?php 
$data=(isset($_POST['test']))?$_POST['test']:'No se recibió test.';
echo '<div>'.$data.'</div>';
?>