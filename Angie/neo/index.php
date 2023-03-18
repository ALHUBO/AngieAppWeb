<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AngieAppWeb</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script src="JS/extern/jquery-3.6.0.min.js"></script>
    <script>
        var page2Load='<?php 
            $dat=(isset($_GET['page']))?$_GET['page']:'inicio';
            echo $dat;
        ?>';
        var pageMenuOpen='<?php 
            $dat=(isset($_GET['menuO']))?true:false;
            echo $dat;
        ?>';
        var itemInit='<?php 
            $dat=(isset($_GET['item']))?''.$_GET['item']:'0';
            echo $dat;
        ?>';
    </script>
    <script src="JS/mine/VGlobals.js"></script>
    <script src="JS/mine/FGlobals.js"></script>

    <link rel="stylesheet" href="CSS/main.css">
    <style>
        #MenuTop{
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 10vh;
            background-color: #000;
        }
        #MenuTop:first-child{
            font-size: 10vh;
            color:#fff;
        }
    </style>
    <script>
        $(document).ready(()=>{
            $(window).resize(()=>{
                let win={w: $(window).width(),h:$(window).height(),o: 'landscape'};
                if(win.w<=win.h) win.o='portrait';
                renderCSS(win);
            });
        });

        function renderCSS(_obj){

        }
    </script>

</head>
<body>
    <div id="MenuTop"><div>Angie</div></div>
    
</body>
</html>