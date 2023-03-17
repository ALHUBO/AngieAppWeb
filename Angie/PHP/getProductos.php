<?php 
include("conx.php");
session_start();
include("security.php");

$data=(object)['data'=>(object)[],'error'=>0];
//$data['1']=['name'=>'hola'];

$type=(isset($_POST['type']))?$_POST['type']:'';

if($conx){
    if($type=='destacado'){
        if($result = $conx->query("SELECT id,name,extensions FROM producto")){
            $dat=[];
            while($obj=$result->fetch_object()){
                $ext=$obj->{'extensions'};
                $ext=explode('|',$ext);
                $dat[$obj->{'id'}]=['name'=>$obj->{'name'},'ext'=>$ext[0]];
            }
            $data->{'data'}=$dat;
        }else{
            $data->{'error'}=2;
        }
    }else if($type=='detail'){
        $id=(isset($_POST['id']))?$_POST['id']:0;
        if($id>0){
            if($result = $conx->query("SELECT name,extensions,Descript,Pric_V,categoria,upload FROM producto WHERE id = '".$id."' LIMIT 1")){
                $obj=$result->fetch_object();
                $dat=[$id=>(object)[]];
                $dat[$id]=[
                    'name'=>$obj->{'name'},
                    'ext'=>$obj->{'extensions'},
                    'Descript'=>$obj->{'Descript'},
                    'Pric_V'=>$obj->{'Pric_V'},
                    'categoria'=>$obj->{'categoria'},
                    'upload'=>$obj->{'upload'},
                ];
                $data->{'data'}=$dat;
            }else{
                $data->{'error'}=2;
            }
        }
    }
    $conx->close();
}else{
    $data->{'error'}=1;
}

echo  json_encode($data);
?>