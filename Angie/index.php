<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Angie Chacharitas</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <!-- type="text/babel" en <script> para jsx-->

    <script src="JS/a076d05399.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="CSS/main.css">
</head>
<body>
    <div id="allContent"></div>
</body>
<script src="JS/jquery-3.6.0.min.js"></script>

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
<script src="JS/VGlobals.js"></script>
<script src="JS/FGlobals.js"></script>

<script>
    $(document).ready(()=>{
        webConfig.win={w: $(window).width(),h:$(window).height(),o: true};
        webConfig.win.o=(webConfig.win.w>webConfig.win.h);
        renderCSS();
        $(window).resize(()=>{
            //win o:[true=landscape]|[false=portrait]
            webConfig.win={w: $(window).width(),h:$(window).height(),o: true};
            webConfig.win.o=(webConfig.win.w>webConfig.win.h);
            renderCSS();
        });
        
    });
    function  renderCSS(){
        console.log(webConfig.win);
        if(webConfig.win.o){
            $('.BarMenuDivV').fadeOut('fast',()=>{
                $('#barMenu').css({gridTemplateColumns: '1fr 9fr 1fr'});
                $('.sucheInput').css({width: ''});
                $('.sucheIcon_H').css({paddingRight: '',paddingLeft: ''});
                $('.BarMenuDiv').fadeIn('fast');
            });
            
        }else{
            $('.BarMenuDiv').fadeOut('fast',()=>{
                $('#barMenu').css({gridTemplateColumns: '1fr 3fr'});
                $('.sucheInput').css({width: '60vw'});
                $('.sucheIcon_H').css({paddingRight: '1.5vw',paddingLeft: '1.5vw'});
                $('.BarMenuDivV').fadeIn('fast',()=>{
                    
                });
            });
            
        }
    }

    
</script>
<script type="text/babel" src="JS/login.jsx"></script>
<script type="text/babel" src="JS/page/catalogo.jsx"></script>
<script type="text/babel" src="JS/page/admin.jsx"></script>
<script type="text/babel" src="JS/page/inicio.jsx"></script>
<script type="text/babel" src="JS/app.jsx"></script>

<script></script>
</html>