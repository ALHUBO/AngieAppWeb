<?php 
include("conx.php");
session_start();
include("security.php");

$data['error']=0;

if($conx){
    if($result = $conx->query("SELECT * FROM categoria")){
        $data['dat']=[];
        while($obj=$result->fetch_object()){
            $data['dat'][$obj->{'id'}]=(object)['name'=>$obj->{'name'},'father'=>$obj->{'father'},'childs'=>(object)[]];
        }
    }
    $conx->close();
}else{

}
echo json_encode($data);

?>