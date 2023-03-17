<?php 

function AntiSQLInjection($_str){
    $r='';
    $r = str_replace('"', "&#34;", $_str);
    $r = str_replace("'", "&#39;", $r);
    $r = str_replace(";", "&#59;", $r);
    $r = str_replace(":", "&#58;", $r);
    $r = str_replace("(", "&#40;", $r);
    $r = str_replace(")", "&#41;", $r);
    $r = str_replace(")", "&#41;", $r);
    $r = str_replace("=", "&#61;", $r);
    return $r;
}

function GetPermisos($id_User,$Permisos){
    $r=array();
    $Permisos=AntiSQLInjection($Permisos);
    $id_User=AntiSQLInjection($id_User);
    if($Permisos!=''&&$id_User!=''){
        $result = $GLOBALS['conx']->query("SELECT ".$Permisos." FROM permisos WHERE user = '".$id_User."' LIMIT 1");
        if($result->num_rows==1){
            $row = $result->fetch_array();
            $SupaP = str_replace(" ", "", $Permisos);
            $SupaP = explode(",", $SupaP);
            foreach($SupaP as $val){
                $r[$val]=$row[$val];
            }
        }else{
            $SupaP = str_replace(" ", "", $Permisos);
            $SupaP = explode(",", $SupaP);
            foreach($SupaP as $val){
                $r[$val]=0;
            }
        }
    }
    return $r;
}


function convertImage($originalImage, $outputImage){
    $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));

    if(preg_match('/jpg|jpeg/i',$ext))
        $imageTmp=imagecreatefromjpeg($originalImage);
    else if(preg_match('/png/i',$ext))
        $imageTmp=imagecreatefrompng($originalImage);
    else if(preg_match('/gif/i',$ext))
        $imageTmp=imagecreatefromgif($originalImage);
    else if(preg_match('/bmp/i',$ext))
        $imageTmp=imagecreatefrombmp($originalImage);
    else
        return false;
    imagejpeg($imageTmp, $outputImage, 100);
    imagedestroy($imageTmp);

    return true;
}


?>