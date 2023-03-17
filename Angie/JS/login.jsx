const showLog=(vr_visib,vr_id)=>{
    if(vr_visib){
        $('#'+vr_id).fadeIn('slow');
        $('#'+vr_id+'2').fadeIn('slow');
    }else{
        $('#'+vr_id).fadeOut('slow');
        $('#'+vr_id+"2").fadeOut('slow');
    }
}

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1421384878266684',
      cookie     : true,
      xfbml      : true,
      version    : 'v4.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

function loginFacebook(vr_id,vr_name,fnc_login=(data)=>{return;}){
    AjaxJson({
        vr_url: "PHP/loginFacebook.php",
        vr_data: {id: vr_id, name: vr_name},
        fnc_success: (data)=>{
            if(data.Error==0){
                user.login=true;
                user.id=vr_id;
                user.name=vr_name;
                fnc_login({vr_stat: user.login,vr_logout: false});
                showSMS({vr_title: 'Bienvenido',vr_type:'success',vr_sms: '¡Es hora de comprar!',vr_time: 4});
            }else if(data.Error==1){
                console.log("Error en la conexion");
                fnc_login({vr_stat: false,vr_logout: false});
            }else if(data.Error==2){
                console.log("Error en logup");
                fnc_login({vr_stat: false,vr_logout: false});
            }
        },
        fnc_error: (e)=>{
            fnc_login({vr_stat: false,vr_logout: false});
        }
    });
}



const BackLogin=({login=false,fncLogin=(data)=>{return;},actionLog=false,fncActionLog=()=>{return;}})=>{
    const [loading,setLoad]=useState(false);
    const facebookLoginHandler=(response)=>{
        //leer datos del user
        window.FB.api('/me?fields=id,name,email,picture',userData=>{
            //console.log(userData);
            loginFacebook(userData.id,userData.name,fncLogin);
            setLoad(false);
        });
    };

    const facebookLogin=()=>{
        setLoad(true);
        if(!window.FB) return false;
        //hecer login
        if(!user.login){
            window.FB.getLoginStatus(response=>{
                if(response.status==='connected'){
                    //leer datos user
                    facebookLoginHandler(response);
                }else{
                    //intentar iniciar sesion
                    window.FB.login(facebookLoginHandler,{scope: 'public_profile,email'});
                }
            });
        }else{
            setLoad(false);
            fncLogin({vr_stat: true,vr_logout: false});
            showSMS({vr_title: 'Bienvenido',vr_type:'success',vr_sms: '¡Es hora de comprar!',vr_time: 4});
        }
    }

  return (
    <><div id="BackLogin" style={{display: 'none'}} onClick={()=>showLog(false,'BackLogin')}></div>
    <div id="BackLogin2" style={{display: 'none'}} className="scrll">
  {
  (loading)?(<>
    <div style={{fontSize: '5vh',width: '27vw',textAlign: 'center',color: '#e64563',paddingTop: '15vh',paddingBottom: '10vh'}}>Iniciando sesión...</div>
    <div style={{display: 'flex',justifyContent: 'center'}}>
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  </>)
  :
            ((!login)?
        (<>
        <div style={{width: '160%',display: 'flex',justifyContent: 'end'}}><button style={{fontSize: '3vh',marginTop: '1.5vh',backgroundColor: 'transparent',border: 'none',color: '#c8566d',cursor: 'pointer',marginRight: '1vw'}} onClick={()=>showLog(false,'BackLogin')}><Icon val="close"/></button></div>
        <div className="loginAngie">
            {(actionLog)?<><div>Registrarse</div></>:(
            <><div>Iniciar sesión</div>
            <div><input className="inputAngie1" placeholder="Usuario ó Correo" type="text"/></div>
            <div><input className="inputAngie1" placeholder="Contraseña" type="password"/></div>
            <div><button className="bttnAngie1" style={{marginBottom: '2vh'}}>Iniciar sesion</button></div>
            </>)
        }
        </div>
        <div>
        {(actionLog)?<><div><button onClick={()=>fncActionLog(false)}>Iniciar sesión</button></div></>:(<>
            <div><button>Olvide mi contraseña</button></div>
            <div><button onClick={()=>fncActionLog(true)}>Registrarse</button></div></>)
        }
        </div>
        <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
            <div style={{color: '#c8566d',fontWeight: '800',fontSize: '3.5vh'}}>ó ingresa con: </div>
            <div><button className="facebook_login" onClick={facebookLogin}><Icon val="facebook"/>&nbsp;&nbsp;Facebook</button></div>
            <div><button className="google_login"><Icon val="google"/>&nbsp;&nbsp;Google</button></div>
        </div>
        </>)
        :(<div style={{width: '100%',height: '100%',display: 'flex',alignItems: 'center',justifyContent: 'center',fontSize: '3.5vh',color: '#c8566d'}}>Ya iniciaste sesión&nbsp;&nbsp;&nbsp;<Icon val="faceSmileWink"/></div>)
        
    )}</div></>);
}
function logOut(fnc_login=()=>{return;}){
    $("#bttnLogOut").prop('disabled',true);
    AjaxJson({
        vr_url: 'PHP/logout.php',
        fnc_success: ()=>{
            fnc_login({vr_stat: false,vr_logout: true});
            user.login=false;
            user.id='';
            user.name='';
            showSMS({vr_title: 'Adiós',vr_type:'success',vr_sms: '¡Vuelve Pronto!',vr_time: 1});
        }
    })
    
}

const UserCart=({name='User',id='',fncLogin=()=>{return;},login=false,inicio=false,fncActionLog=(data)=>{return;}})=>{
    const showTool=(vr_vis)=>{
        if(vr_vis){
            $("#tooltipUser").fadeIn('fast');
        }else{
            $("#tooltipUser").fadeOut('fast');
        }
    }
    return (inicio)?(
    <div className="userCartInicio">
        {(login)?<>
        <div><img className="ImgPerfMenu " src="IMG/ALHUBO/NoPicPerfil.jpeg" style={{height: '10vh',marginTop: '5vh'}}/></div>
        <div style={{display: 'block'}}>Bienvenido {name}
        </div>
        </>:
        <><div><div><Icon val="Perfil"/></div></div>
        <div>Te damos la bienvenida a Angie Chacharitas</div>
        <div><button onClick={()=>{showLog(true,'BackLogin');fncActionLog(true)}}>Registrarse</button><button onClick={()=>{showLog(true,'BackLogin');fncActionLog(false)}}>Iniciar sesión</button></div></>
        }
    </div>):
    ((login)?
    (<div style={{display: 'flex',alignItems: 'center',cursor:'pointer'}} onMouseOver={()=>showTool(true)} onMouseLeave={()=>showTool(false)}>
      <img className="ImgPerfMenu " src="IMG/ALHUBO/NoPicPerfil.jpeg"/>
      <div className="namePerfMenu">{name}</div>
      <div id="tooltipUser" className="toolTipBarMenu" style={{display:'none'}}  onMouseOver={()=>showTool(true)} onMouseLeave={()=>showTool(false)}>
        <button className="bttnAngie1" style={{margin: '2vh 2vw', fontSize: '2.5vh',padding: '1vh 1vw'}}><Icon val="Perfil"/> Perfil</button>
        <button id="bttnLogOut" className="bttnAngie1" style={{margin: '2vh 2vw', fontSize: '2.5vh',padding: '1vh 1vw'}} onClick={()=>logOut(fncLogin)}><Icon val="exit"/> Cerrar Sesión</button>
      </div>
    </div>):
    (<button className="BttnBarMenu" onClick={()=>{showLog(true,'BackLogin');fncActionLog(false);}}><Icon val="Perfil"/></button>));
  }



  function isLogin(vr_funset=(data)=>{return;}){
    AjaxJson({
        vr_url: "PHP/loginGet.php",
        fnc_success: (data)=>{
            user.load=true;
            user.login=(data.id!=''&&data.name!='');
            if(user.login){
                user.id=data.id;
                user.name=data.name;
                vr_funset(true);
            }else{
                vr_funset(false);
            }
        }
    });
  }