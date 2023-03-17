<?php
include("conx.php");
session_start();
include("security.php");
$data['error']=0;
if($conx){
    $img=(isset($_FILES['img']))?$_FILES['img']:null;
    $name=(isset($_POST['name']))?$_POST['name']:'';
    $desc=(isset($_POST['desc']))?$_POST['desc']:'';
    $PC=(isset($_POST['PC']))?$_POST['PC']:'';
    $PV=(isset($_POST['PV']))?$_POST['PV']:'';
    $C=(isset($_POST['C']))?$_POST['C']:'';
    if($img!==null) {
    //Recogemos el archivo enviado por el formulario
    $archivo = $_FILES['img']['name'];
    //Si el archivo contiene algo y es diferente de vacio
    $count=count($archivo);
    if($count>0&&$count<21){
        //Obtenemos algunos datos necesarios sobre el archivo
        $extensiones='';
        for($i=0;$i<$count;$i++){
            $tipo = $_FILES['img']['type'][$i];
            $tamano = $_FILES['img']['size'][$i];
            $temp = $_FILES['img']['tmp_name'][$i];

            $extencion = explode("/", $tipo);
            $extensiones=$extensiones."".$extencion[1].'|';

            //Se comprueba si el archivo a cargar es correcto observando su extensión y tamaño
            if (!((strpos($tipo, "gif") || strpos($tipo, "jpeg") || strpos($tipo, "jpg") || strpos($tipo, "png") || strpos($tipo, "webp")))) {
                $data['error']=3;//no es un archivo permitido
            }
            else if($tamano > 2000000){
                $data['error']=4;//el archivo supera los 200kb
            }
        }
        
        if($data['error']==0){
            date_default_timezone_set('America/Mexico_City');
 
            $fecha_actual = date("Y-m-d H:i:s");
            if ($conx->query("INSERT INTO producto(id, name, extensions, Descript, Pric_C, Pric_V, categoria, upload) VALUES (null,'".$name."', '".$extensiones."', '".$desc."', '".$PC."', '".$PV."', '".$C."', '".$fecha_actual."')")) {
                for($i=0;$i<$count;$i++){
                    $tipo = $_FILES['img']['type'][$i];
                    $tamano = $_FILES['img']['size'][$i];
                    $temp = $_FILES['img']['tmp_name'][$i];
                    $extencion = explode("/", $tipo);
                    if (move_uploaded_file($temp, '../IMG/Producto/'.$conx->insert_id.'.'.$i.'.'.$extencion[1])){
                        //Cambiamos los permisos del archivo a 777 para poder modificarlo posteriormente
                        chmod('../IMG/Producto/'.$conx->insert_id.'.'.$i.'.'.$extencion[1], 0777);
                    }else {
                        $data['error']=5;//ocurrio un error al cargar imagen
                    }
                }
            }else{
                $dat['error']=7;//no se pudo ingresar el producto
            }
        }
    }else{
        $data['error']=2;//occurrio un error al abrir imagen
    }
    }else{
        $data['error']=1;//no se subio una imagen
    }
    $conx->close();
}else{
    $data['error']=6;//no hay conexion con la db
}
echo json_encode($data);
?>