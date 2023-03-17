


const LikeBttn=({value='Click me'}) => {
    const [click,setClick]=useState(false);
    return (
      click ? 
        ("Ya click ")
        :
        (<button onClick={()=>setClick(!click)}>{value}</button>)
      
        );
};
const Icon=({val='def'})=>{
  let icn="fas fa-skull";
  if(val=='Inicio'){
    icn="fas fa-home";
  }else if(val=='Nuevo'){
    icn="fas fa-newspaper";
  }else if(val=='Destacado'){
    icn="fab fa-font-awesome-flag";
  }else if(val=='Mi pedido'){
    icn="fas fa-shopping-cart";
  }else if(val=='Catalogo'){
    icn="fas fa-book-open";
  }else if(val=='Mecanica'){
    icn="fas fa-file-contract";
  }else if(val=='Perfil'){
    icn="far fa-user";
  }else if(val=='Opciones'){
    icn="fas fa-tools";
  }else if(val=='Suche'){
    icn="fas fa-search";
  }else if(val=='Menu'){
    icn="fas fa-bars";
  }else if(val=='heart'){
    icn="far fa-heart";
  }else if(val=='faceSmileWink'){
    icn="far fa-smile-wink";
  }else if(val=='facebook'){
    icn="fab fa-facebook-square";
  }else if(val=='google'){
    icn="fab fa-google";
  }else if(val=='close'){
    icn="fas fa-times";
  }else if(val=='exit'){
    icn="fas fa-sign-out-alt";
  }else if(val=='list'){
    icn="fas fa-list-ul";
  }else if(val=='box'){
    icn="fas fa-box";
  }
  return <i className={icn}></i>;
}



const MenuTop=({fncOpen=()=>{return;},fncPage=()=>{return;}})=>{
  return <><a onClick={()=>{fncOpen(false);fncPage({P:'inicio'});}} title={'Inicio'}><Icon val="Inicio"/></a>
  <a onClick={()=>{fncOpen(false);fncPage({P:'admin'});}}><Icon/></a>
  <a onClick={()=>{fncOpen(false);fncPage({P:'detailproduct'});}} title={"Ultimo Producto Visitado"}><Icon val="box"/></a></>
}
const Suche=()=>{

  function showSuche(){
    $('.sucheIcon').removeClass('sucheIcon_H');
    $('.sucheInput').removeClass('sucheInput_H');
    $('.sucheInput').prop('disabled',false);
    $('.sucheInput').focus();
    
    $(".sucheInput").blur(function(){
      $('.sucheIcon').addClass('sucheIcon_H');
      $('.sucheInput').addClass('sucheInput_H');
      $('.sucheInput').prop('disabled',true);
      
    });
  }
  return <div style={{display: 'flex',display: 'flex',justifyContent: 'center',alignContent: 'center',maxHeight: '5vh'}}>
    <div onClick={()=>showSuche()} className="sucheIcon sucheIcon_H"><Icon val="Suche"/></div>
    <input type="text" disabled className="sucheInput sucheInput_H" placeholder="Busca un producto..."/>
  </div>
}

const LikeItems=()=>{
  return <div><button className="BttnBarMenu"><Icon val="heart"/></button><div className="toolTipBarMenu"></div></div>;
}
const ShoppingCar=()=>{
  return <div><button className="BttnBarMenu" style={{paddingRight: '2vw'}}><Icon val="Mi pedido"/></button><div className="toolTipBarMenu"></div></div>;
}
const BarMenu=({open=false,login=false,fncOpen=()=>{return;},fncLogin=()=>{return;},fncActionLog=()=>{return;},fncPage=()=>{return}})=>{
  const sty=(open)?{}:{width: '100%',left: '0%'};
    return <div id="barMenu" style={sty}>
      <div className="BarMenuDiv" style={{justifyContent: 'left'}}>
        <button id="MenuBttn" className={(open)?'MenuBttnX':''} onClick={()=>fncOpen(!open)}>
          <div></div>  
          <div></div>  
          <div></div>  
        </button>
      </div>
      <div className="BarMenuDiv" style={{borderRight: 'solid 0.1vw #bfbfbf'}}>
        <MenuTop fncOpen={fncOpen} fncPage={fncPage}/>
      </div> 
      <div className="BarMenuDiv">
        <Suche/>
          <UserCart id={user.id} name={user.name} fncLogin={fncLogin} login={login} fncActionLog={fncActionLog}/>
        <LikeItems/>
        <ShoppingCar/>
      </div>
      </div>;
};

const OptMenu=({val='NoN',fncPage=()=>{return;},fncOpen=()=>{return;}})=>{
  const changePage=()=>{
    let page=val.toLowerCase();
    fncOpen(false);
    fncPage({P: page});
  }
  return <a onClick={changePage}><Icon val={val}/>&nbsp;&nbsp;{val}</a>
};
const OptsMenu=({open=false,login=false,fncPage=()=>{return;},fncOpen=()=>{return;}})=>{
  const sty=(open)?{}:{display: 'none'};
  return (<div className="scrll optsMenu" style={sty}>
    <div>Panel</div>
    <hr />
    <OptMenu val="Inicio" fncPage={fncPage} fncOpen={fncOpen}/>
    <OptMenu val="Nuevo" fncPage={fncPage} fncOpen={fncOpen}/>
    <OptMenu val="Destacado" fncPage={fncPage} fncOpen={fncOpen}/>
    {
      (login)?
      <OptMenu val="Mi pedido" fncPage={fncPage} fncOpen={fncOpen}/>
      :<></>
    }
    <OptMenu val="Catalogo" fncPage={fncPage} fncOpen={fncOpen}/>
    <OptMenu val="Mecanica" fncPage={fncPage} fncOpen={fncOpen}/>
    {
      (login)?
      <><div className="separaMenu">Configuración</div>
      <hr />
      <OptMenu val="Admin" fncPage={fncPage} fncOpen={fncOpen}/>
      <OptMenu val="Perfil" fncPage={fncPage} fncOpen={fncOpen}/>
      <OptMenu val="Opciones" fncPage={fncPage} fncOpen={fncOpen}/>
      </>:<></>
    }
    <div className="separaMenu">ALHUBO</div>
    <hr />
    <OptMenu val="ALHUBOWeb" fncPage={fncPage} fncOpen={fncOpen}/>
  </div>);
};

const Menu=({open=false,login=false,fncPage=()=>{return;},fncOpen=()=>{return;}})=>{
  const sty=(open)?{}:{width:'0%'};
  return (
  <><div className="menuclosediv" style={{display: 'none'}} onClick={()=>fncOpen(false)}></div>
  <div id="Menu" style={sty}>
    <div className="titlePage">
      <img src="IMG/Angie/Logo.png" style={{ width: '100%'}}/>
    </div>
    <OptsMenu open={open} login={login} fncPage={fncPage} fncOpen={fncOpen}/>
  </div></>);
};

const Content=({open=false, page='inicio',fncLogin=()=>{return;}, login=false,fncActionLog=()=>{return;},fncItem=()=>{return;},fncPage=()=>{return;}, item='0'})=>{
  return <div id="ContentPage">
    {
      (page=='inicio')?<Inicio fncLogin={fncLogin} login={login} fncActionLog={fncActionLog} fncItem={fncItem} fncPage={fncPage}/>:(
      (page=='catalogo')?<Catalogo/>:
      (page=='admin')?<Admin />:
      (page=='detailproduct')?<ShowProduct id={item} fncItem={fncItem} fncPage={fncPage}/>:
      <></>
      )
    }
  </div>
}
const ContentApp=()=>{
  const [open,setOpen]=useState(webConfig.Menu.open);
  const [login,setLogin]=useState(false);
  const [page,setPage]=useState(webConfig.Page.start.toLowerCase());
  const [actionLog,setActionLog]=useState(false);//[false | login ] [true | logup]
  const [item,setItem]=useState(webConfig.Item);//id del ultimo producto visitado


  useEffect(() => {
    isLogin(setLogin);
}, [])

const logStatus=({vr_stat=false,vr_logout=false})=>{
  setLogin(vr_stat);
  if(!vr_logout)showLog(!vr_stat,'BackLogin');
}

const openMenu=(vr_vis)=>{
  if(vr_vis){
    $(".menuclosediv").fadeIn("slow");
  }else{
    $(".menuclosediv").fadeOut("slow");
  }
  setOpen(vr_vis);
}
const changePage=({P='inicio',Arg=''})=>{
  P=P.toLowerCase();
  setPage(P);
}
  return (
    <>
      <BackLogin fncLogin={logStatus} login={login} actionLog={actionLog} fncActionLog={setActionLog}/>
      <BarMenu open={open} login={login} fncOpen={openMenu} fncLogin={logStatus} fncActionLog={setActionLog} fncPage={changePage}/>
      <Menu open={open} login={login} fncPage={changePage} fncOpen={openMenu}/>
      <Content open={open} page={page} fncLogin={logStatus} login={login} fncActionLog={setActionLog} fncItem={setItem} fncPage={changePage} item={item}/>
    </>
  );
}
const FullApp=() => {
    return (
      <ContentApp/>
    );
};


const domContainer = document.querySelector('#allContent');
const root = ReactDOM.createRoot(domContainer);
root.render(FullApp());