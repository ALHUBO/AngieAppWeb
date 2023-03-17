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
    <style>
        #allContent{
            position:absolute;
            top:0px;
            left:0px;
            width:100%;
            height:100%;
            overflow: auto;
            background-color: #eee;
        }
        #barMenu{
            position: fixed;
            top: 0px;
            left: 15%;
            width: 85%;
            height: 10%;
            background-color: #FFF;
            display: grid;
            z-index: 100;
            grid-template-columns: 1fr 9fr 1fr ;
            transition: 0.5s;
        }
        #Menu{
            position: fixed;
            left: 0px;
            top: 0px;
            height: 100%;
            width: 15%;
            background-color: #ff839a;
            color: #fff;
            display: grid;
            grid-template-rows: 0fr 1fr;
            grid-template-columns: 100%;
            transition: 0.5s;
            z-index: 10;
        }
        .titlePage{
            font-size: 2vw;
            padding-top: 5vh;
            padding-bottom: 10vh;
            padding-left: 0.5vw;
            padding-right: 0.5vw;
            text-align: center;
        }
        .optsMenu{
            overflow: auto;
            padding-left: 2vw;
            padding-right: 2vw;
            color: #fff;
            font-size: 3.5vh;
        }
        .optsMenu hr{
            border: solid #fff 0.1vh;
        }

        .optsMenu a{
            font-size: 2.8vh;
            color: #fff;
            text-decoration: none;
            transition: 0.2s;
            width: 100%;
            display: block;
            padding-top: 1vh;
            padding-bottom: 1vh;
            padding-left: 0.5vw;
            padding-right: 0.5vw;
            border-radius: 1vh;
            cursor: pointer;
        }
        .optsMenu a:hover{
            background-color: #ffffff26;
        }
        .optsMenu a i {
            font-size: 2.3vh;
        }
        .separaMenu{
            padding-top: 4vh;
        }
        .scrll{
            
        }
        .scrll::-webkit-scrollbar {
            -webkit-appearance: none;
        }

        .scrll::-webkit-scrollbar:vertical {
            width:0.8vw;
        }

        .scrll::-webkit-scrollbar-button:increment,.scrll::-webkit-scrollbar-button {
            display: none;
        } 

        .scrll::-webkit-scrollbar:horizontal {
            height: 1.5vh;
        }

        .scrll::-webkit-scrollbar-thumb {
            background-color: #79797963;
            border-radius: 10vh;
            border: 0.1vh solid #cfe7ffa6;
        }

        .scrll::-webkit-scrollbar-track {
            border-radius: 10vh;  
        }
        .BarMenuDiv{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .BarMenuDiv a{
            padding-right: 1vw;
            padding-left: 1vw;
            font-size: 3.3vh;
            transition: 0.2s;
            height:100%;
            display: flex;
            align-items: center;
            color: #b0b0b0;
            cursor:pointer;

        }
        .BarMenuDiv a:hover{
            background-color: #00b0f424;
            font-size: 4vh;
            border-bottom: solid 1vh #aa0060;
        }
        .ImgPerfMenu{
            height: 6vh;
            border-radius: 100vh;
            outline: solid 0.2vh #009fff;
            cursor: pointer;
        }
        .namePerfMenu{
            padding-left: 3vh;
            font-size: 3vh;
            color: #919191;
            overflow: hidden;
            width: 7vw;
            height: 4vh;
            cursor: pointer;
        }
        .sucheIcon{
            border: none;
            background-color: #ffdae1;
            color: #8c1061;
            border-top-left-radius: 10vh;
            border-bottom-left-radius: 10vh;
            padding-top: 1vh;
            padding-bottom: 1vh;
            padding-left: 0.5vw;
            font-size: 2.5vh;
            transition: 1s;
            margin-left: 2vw;
        }
        .sucheIcon_H{
            border-radius: 10vh;
            padding-right: 0.6vw;
            padding-left: 0.6vw;
            font-size: 3vh;
            cursor: pointer;
            background-color: #ff8ba1;
            color: #fff;
        }
        .sucheIcon_H:hover{
            background-color: #ffdae1;
        }
        .sucheInput{
            border: none;
            background-color: #ffdae1;
            color: #8c1061;
            border-top-right-radius: 10vh;
            border-bottom-right-radius: 10vh;
            outline: none;
            padding-left: 2vh;
            padding-right: 2vh;
            font-size: 2.2vh;
            transition: 1s;
            width: 10vw;
        }
        .sucheInput_H{
            width: 0vh;
            background-color: #fff0;
        }
        #BackLogin{
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background-color: #d7003c45;
            z-index: 10000;
            backdrop-filter: blur(0.5vh);
            cursor: pointer;
            transition: 0.2s;
        }

        #BackLogin2{
            position: fixed;
            top: 10%;
            left: 31%;
            grid-template-rows: 0fr 1fr 0fr 2fr;
            grid-template-columns: 0fr;
            transition: 0.2s;
            justify-content: center;
            background-color: #FFF;
            height: 80%;
            width: 38%;
            border-radius: 2vh;
            -webkit-box-shadow: 0px 0px 15px 15px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 0px 15px 15px rgba(0,0,0,0.75);
            box-shadow: 0px 0px 2vw 2vw rgba(0, 0, 0, 0.22);
            overflow: auto;
            cursor:default;
            z-index: 10001;
            display: grid;
        }
        .BttnBarMenu{
            border: none;
            background-color: #fff;
            font-size: 3.8vh;
            padding-left: 0.5vw;
            padding-right: 0.5vw;
            cursor: pointer;
            transition: 0.35s;
        }
        .BttnBarMenu:hover{
            color: #fd6f89;
            font-size: 4.5vh;
        }
        #MenuBttn{
            border: none;
            background: none;
            margin-left: 1vw;
            cursor: pointer;
            height: 3vw;
            width: 3vw;
            display: flex;
            flex-direction: column;
            gap: 0.65;
        }
        #MenuBttn > div {
            background-color: #ff839a;
            height: 1vh;
            width: 100%;
            border-radius: 0.4vh;
            transition: 0.2s;
            transform-origin: center;
            margin-top: 1vh;
        }

        .MenuBttnX div:first-child{
            transform: translateY(0.9vw) scaleX(1) rotate(45deg) ;
        }
        .MenuBttnX div:nth-child(2){
            opacity:0;
        }
        .MenuBttnX div:nth-child(3){
            transform: translateY(-1vw) scaleX(1) rotate(-45deg);
        }
        #ContentPage{
            position: fixed;
            top: 10%;
            left: 0%;
            overflow: auto;
            background-color: #ffe0e0;
            width: 100%;
            height: 90%;
            z-index: 0;
        }
        #LogoContent{
            width: 100%;
            display: flex;
            justify-content: center;
            padding-top: 5vh;
        }
        #LogoFull{
            height: 18vh;
        }
        .facebook_login{
            background-color: #385898;
            color: #fff;
            border: none;
            padding-top: 1vh;
            padding-bottom: 1vh;
            padding-left: 1vw;
            padding-right: 1vw;
            font-size: 2.8vh;
            border-radius: 1vh;
            width: 10vw;
            cursor: pointer;
            transition: 0.1s;
            margin-top: 2vh;
            margin-bottom: 1vh;
        }
        .facebook_login:hover{
            -webkit-box-shadow: 0px 0px 3vh 0px #385898;
            -moz-box-shadow: 0px 0px 3vh 0px #385898;
            box-shadow: 0px 0px 3vh 0px #385898;
        }

        .facebook_login:active{
            outline: solid #0a1e46 0.4vh;
            background-color: #234384;
            color: #cacaca;
        }
        .google_login{
            background-color: #cf4332;
            color: #fff;
            border: none;
            padding-top: 1vh;
            padding-bottom: 1vh;
            padding-left: 1vw;
            padding-right: 1vw;
            font-size: 2.8vh;
            border-radius: 1vh;
            width: 10vw;
            cursor: pointer;
            transition: 0.1s;
            margin-top: 1vh;
            margin-bottom: 2vh;
        }
        .google_login:hover{
            -webkit-box-shadow: 0px 0px 3vh 0px #cf4332;
            -moz-box-shadow: 0px 0px 3vh 0px #cf4332;
            box-shadow: 0px 0px 3vh 0px #cf4332;
        }
        .google_login:active{
            outline: solid #59120a 0.4vh;
            background-color: #b73020;
            color: #cacaca;
        }
        .loginAngie{
            display: flex;
            flex-direction: column;
            font-size: 4vh;
            color: #c8566d;
        }
        .loginAngie > div{
            display:flex;
        }
        .loginAngie div:first-child{
            font-size: 6vh;
            color: #c8566d;
            align-items: center;
            justify-content: center;
            width: 100%;
            font-weight: bold;
            margin-top: 2vh;
        }
        .loginAngie div:nth-child(2){
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .loginAngie div:nth-child(3){
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .loginAngie div:nth-child(4){
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .inputAngie1{
            outline: none;
            margin-top: 1vh;
            margin-bottom: 1vh;
            padding-top: 1vh;
            padding-bottom: 1vh;
            padding-right: 1vw;
            padding-left: 1vw;
            font-size: 3vh;
            border: solid #fff 0.3vh;
            border-bottom-color: currentcolor;
            border-bottom-style: none;
            border-bottom-width: medium;
            border-bottom: solid #f4a4b4 0.1vh;
            color: #c8566d;
            transition: 0.2s;
        }
        .inputAngie1:hover{
            border-radius: 1vh;
            border: solid #f4a4b4 0.3vh;
        }
        .inputAngie1:focus{
            border-bottom: solid #c8566d 0.5vh;
            padding-top: 2vh;
            padding-bottom: 0.2vh;
        }

        .bttnAngie1{ 
            background-color: #D7909E;
            border-radius: 2vh;
            box-sizing: border-box;
            color: #FFFFFF;
            cursor: pointer;
            display: inline-block;
            font-family: din-round,sans-serif;
            font-size: 3vh;
            font-weight: 700;
            letter-spacing: .3vh;
            line-height: 20px;
            margin: 0;
            outline: none;
            overflow: visible;
            padding: 1.5vh 2vw;
            text-align: center;
            touch-action: manipulation;
            transform: translateZ(0);
            transition: filter .2s;
            user-select: none;
            -webkit-user-select: none;
            vertical-align: middle;
            white-space: nowrap;
            transition: 0.1s;
            border: none;
            border-bottom: solid #C8566D 1vh;
            
        }
        .bttnAngie1:hover{
            -webkit-box-shadow: 0px 0px 3vh 0px #ff3960;
            -moz-box-shadow: 0px 0px 3vh 0px #ff3960;
            box-shadow: 0px 0px 3vh 0px #ff3960;
        }
        .bttnAngie1:active{
            background-color: #C8566D;
            border: none;
            border-top: solid #F9BFCA 1vh;
            color: #cacaca;
        }
        .toolTipBarMenu{
            content: ' ';
            background-color: rgb(255, 255, 255);
            height: auto;
            width: auto;
            position: absolute;
            transform: translate(0vh, 10vh);
            transition: all 0.4s ease 0s;
            border-bottom-left-radius: 2vh;
            border-bottom-right-radius: 2vh;
            border: solid #e1e1e1 0.2vh;
            border-top: none;
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 0%;
            margin: 0;
            right: 0;
        }
        .lds-roller {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
        }
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ff839a;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.contentCategorisInicio{
    background: #fff;
    width: 20%;
    margin-right: 1%;
    -webkit-box-shadow: 0px 0px 4vh 0vh #0006;
    -moz-box-shadow: 0px 0px 4vh 0vh #0006;
    box-shadow: 0px 0px 4vh 0vh #0006;
    border-radius: 2vh;
    padding: 2vh 1vw;
    display: flex;
    flex-direction: column;
    overflow:auto;
}
.contentCategorisInicio div{
    color: #ca3853;
    font-size: 3.3vh;
    font-weight: 600;
    padding-top: 2vh;
    padding-bottom: 1vh;
    cursor: pointer;
}
.contentCategorisInicio a {
    text-decoration: none;
    padding: 0.5vh 1vw;
    font-size: 2.8vh;
    cursor: pointer;
    color: #808080;
    transition: 0.2s;
}
.contentCategorisInicio a:hover{
    color: #ff839a;
    padding: 1vh 1vw;  
}
.contentNewsInicio{
    width: 70%;
}
.CNI_bttns{
    
}
.CNI_productos{
    width: 100%;
    display: flex;
}


.userInicio{
    width: 20% !important;
    background-color: #fff;
    border-radius: 1vh;
    padding: 1vh 1vw;
    overflow: auto;
}
.userCartInicio{
    width: 100% !important;
    display: flex;
    flex-direction: column;
}
.userCartInicio div:nth-child(1){
    width: 100% !important;
    display: flex;
    font-size: 5vh;
    justify-content: center;
    align-items: center;
}
.userCartInicio div:nth-child(1) div{
    width: auto !important;
    border: solid 0.3vh #000;
    border-radius: 10vh;
    overflow: hidden;
    padding: 1vh 1.2vh;
}

.userCartInicio div:nth-child(2){
    text-align: center;
    font-size: 3vh;
    color: #ca3853;
    padding-top: 1vh;
    padding-bottom: 2vh;
}    
.CN_news{
    width: 70%;
    margin-right: 1%;
}
.CN_baner{
    height: 40vh;
    width: 100% !important;
    background-color: #fff;
    border-radius: 3vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
    overflow:hidden;
    display: flex;
}
.CN_destacados{
    margin-bottom: 2vh;
    width: 100% !important;
    background-color: #fff;
    height: 25vh;
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
}
.firstCardProduct{
    width: 20vh;
    padding: 3vh 1vw;
    display: grid;
    grid-template-rows: 1fr 2fr 0fr;
    cursor: pointer;
}
.firstCardProduct div:first-child{
    font-size: 3vh;
    font-weight: 800;
    padding-bottom: 2vh;
}
.firstCardProduct div:nth-child(2){
    color: #797979;
    font-size: 2.6vh;
}
.firstCardProduct a{
    font-size: 2.6vh;
    color: #ca3853;
    font-weight: 800;
}

.producto{
    width: 20vh;
    padding: 3vh 1vw;
    cursor: pointer;
}
.productoIMG1{
    height: 15vh;
    border-radius: 2vh;
}
.productName1{
    font-size: 2.5vh;
    text-align: center;
    background: #ca3853;
    color: #fff;
    border-radius: 2vh;
    transform: translateY(-3vh);
    overflow: hidden;
    max-height: 3vh;
    max-width: 14vh;
    padding: 0vh 0.1vw;
    margin: 0vw 0.3vw;
    font-weight: 600;
}

.baner{
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    transition: 0.2s;
}
.banerImg{
    width: 100%;
    height: 100%;
    
}
img {
    pointer-events: none;  
}
body{
    -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer */
   -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/

}

.menuclosediv{  
    z-index: 9;
    position: fixed;
    top: 10%;
    background-color: #d7003c45;
    height: 90%;
    width: 100%;
    left: 0%;
    backdrop-filter: blur(0.5vh);
    cursor: pointer;
}
.skeleton {
  animation: skeleton-loading 0.8s linear infinite alternate;
}
@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

#productPreviewShow{
    display:flex;
    flex-wrap: wrap;
}
.imgToUpload{
    height: 30vh;
    border-radius: 5vh;
    margin: 3vh 1vw;
}
.txtToUpload{
    text-align: center;
    background: #00c3ff;
    padding: 0.5vh 0.5vw;
    font-size: 3vh;
    font-weight: 600;
    border-radius: 2vh;
    margin: 0vh 2vw;
    margin-top: -3.5vh;
}

#imgProducDetail{
    height: 60vh;
    width: 60vh;
    border-radius: 2vh;
}
.detailsProduct{
    background-color:#fff;
    padding: 2vh 1vw;
    height: 86vh;
    width: 60%;
}
.detailsProduct_title{
    font-size: 9vh;
    font-weight: 600;
    color: #95983d;
    padding: 2vh 2vw;
}
.detailsProduct_descrip{
    -webkit-box-shadow: inset 0px 0px 3vh 1vh rgba(0, 0, 0, 0.14);
        -moz-box-shadow: inset 0px 0px 3vh 1vh rgba(0, 0, 0, 0.14);
        box-shadow: inset 0px 0px 3vh 1vh rgba(0, 0, 0, 0.14);
        font-size: 3.5vh;
        margin: 2vh 2vw;
        padding: 2vh 2vw;
        border-radius: 2vh;
        color: #d0566c;
}
.detailsProduct_pric{
    display: flex;
    justify-content: right;
}
.detailsProduct_pric div{
    font-size: 5vh;
    font-weight: 600;
    padding: 1vh 1vw;
    color: #795d72;
    margin-right: 5vw;
    transform: translateY(-3vh);
    border-radius: 10vh;
    border-bottom: solid 0.5vh;
}
.minNxtD{
    width: 10vw;
    border-radius: 2vh;
    margin: 0vh 1vw;
    pointer-events: all;
    cursor: pointer;
    transition:0.2s;
}
.minNxtD:hover{
    transform: scale(0.8);
}
#itemsDetails{
    display: flex;
    overflow: hidden;
    width: 36vw;
}
#Notifs{
    position: fixed;
    z-index: 10000;
    bottom: 0px;
    right: 0px;
    
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 4vh;
    transition: 1s;
}
.smsNotif{
    cursor: pointer;
    border-radius: 2vh;
    color: #fff;
    margin: 1vh 2vw;
    opacity: 0;
    transition: 1s;
    margin-bottom: -20vh;
}
.smsNotif div:first-child{
    font-size: 3.3vh;
    font-weight: 600;
    padding: 0.5vh 1vw;
    border-top-left-radius: 2vh;
    border-top-right-radius: 2vh;
}
.smsNotif div:nth-child(2){
    font-size: 2.9vh;
    padding: 1vh 1vw;
    min-width: 12vw;
}
.smsNotif div:nth-child(3){
    height: 1vh;
    border-radius: 2vh;
    transition: 1s;
    width: 100%;
}

.smsNotif_info{
    background-color: #00acb5;
}
.smsNotif_info div:first-child{
    background-color: #008188;

}
.smsNotif_info div:nth-child(3){
    background-color: #96ffff;
}

.smsNotif_error{
    background-color: #d20000;
}
.smsNotif_error div:first-child{
    background-color: #900;

}
.smsNotif_error div:nth-child(3){
    background-color: #ff9696;
}
.smsNotif_success{
    background-color: #790;
}
.smsNotif_success div:first-child{
    background-color: #516800;

}
.smsNotif_success div:nth-child(3){
    background-color: #deff96;
}
.smsNotif_warning{
    background-color: #ff8f00;
}
.smsNotif_warning div:first-child{
    background-color: #c87000;

}
.smsNotif_warning div:nth-child(3){
    background-color: #ffd196;
}
.FatherCategory{
    border: solid #FF008F 0.4vh;
    margin: 1vh 1vw;
    padding: 1vh 1vw;
}
.childsCategory{
    border: solid #000 0.4vh;
    margin: 1vh 1vw;
    padding: 1vh 1vw;
}
ul{
    list-style: none;
    line-height: 2em;
}

ul summary{
    cursor: pointer;
    list-style-type: none;
}

ul summary::marker{
    display: none;
}
ul summary::-webkit-details-marker{
    display: none;
}

ul li{
    position: relative;
    
}

ul li::before{
    position:absolute;
    left:-10px;
    top: 0px;
    border-bottom:2px solid grey;
    content: "";
    width: 8px;
    height: 1em;
}
ul li::after{
    position:absolute;
    left:-10px;
    top: 0px;
    border-left:2px solid grey;
    content: "";
    width: 8px;
    height: 100%;
}

ul li:last-child::after{
    display:none;
}

ul.tree > li:after,ul.tree > li:before{
    display: none;
}

ul summary::before{
    position:absolute;
    left:-1.25em;
    top:.55em;
    content: "+";
    background: #bf0;
    display:block;
    width: 15px;
    height: 15px;
    border-radius: 50em;
    z-index: 999;
    text-align: center;
    line-height: .80em;
    outline: solid #6d9500 0.4vh;
}
.ul details{
    transition:0.2s;
}
ul details[open] > summary::before{
    content: '-';
    background: #ccc;
}
ul details[open] {
    background: #fff;
    padding: 1vh 1vw;
    outline: solid #6d9500 0.4vh;
    border-radius: 2vh;
    margin: 1vh 0vw;
}
    </style>
</head>
<body>
    <div id="allContent"></div>
</body>
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
<script src="JS/jquery-3.6.0.min.js"></script>
<script src="JS/VGlobals.js"></script>
<script src="JS/FGlobals.js"></script>
<script type="text/babel" src="JS/login.jsx"></script>
<script type="text/babel" src="JS/page/catalogo.jsx"></script>
<script type="text/babel" src="JS/page/admin.jsx"></script>
<script type="text/babel" src="JS/page/inicio.jsx"></script>
<script type="text/babel" src="JS/app.jsx"></script>
</html>