const Icon=({val='def'})=>{
    val=val.toLowerCase();
    let icons={
        'home':'fas fa-',
        'newspaper':'fas fa-',
        'flag':'fab fa-font-awesome-',
        'shopping-cart':'fas fa-',
        'book-open':'fas fa-',
        'file-contract':'fas fa-',
        'user':'far fa-',
        'tools':'fas fa-',
        'search':'fas fa-',
        'bars':'fas fa-',
        'heart':'far fa-',
        'smile-wink':'far fa-',
        'facebook-square':'fab fa-',
        'google':'fab fa-',
        'times':'fas fa-',
        'times-circle':'fas fa-',
        'sign-out-alt':'fas fa-',
        'list-ul':'fas fa-',
        'box':'fas fa-',
        'skull':'fas fa-',
    };
    if(!Object.keys(icons).includes(val)) return <i className="fas fa-exclamation-triangle"></i>;
    let icn=icons[val]+val;
    return <i className={icn}></i>;
}


const QuickMenuOption=({val='def'})=>{
    return <div className="QuickMenuDiv">
    <Icon val={val}/>
    </div>;
}
const Suche=({orient={w: $(window).width(),h:$(window).height(),o: ($(window).width()>$(window).height())}})=>{
    let icnSty=(!orient.o)?{padding: '0.6vh 1vw'}:{};
    useEffect(() => {
        $(".SucheInput div:nth-child(2)>input").blur(function(){
            $('.SucheInput div:first-child').css({backgroundColor: '',color: '',borderTopRightRadius: '',borderBottomRightRadius: '',fontSize: ''});
            $('.SucheInput div:nth-child(2)>input').css({width: '',padding: ''}).prop('disabled',true);
          });
    }, [])
    const ShowSuche=()=>{
        $('.SucheInput div:first-child').css({backgroundColor: '#ffdae1',color: '#8c1061',borderTopRightRadius: '0px',borderBottomRightRadius: '0px',fontSize: '2.4vh'});
        let fcc=(orient.o)?{width: '10vw',padding: '1vh 1vw'}:{width: '70vw',padding: '1vh 1vw'};
        $('.SucheInput div:nth-child(2)>input').css(fcc).prop('disabled',false).focus();
      }
    return (
    <div className="SucheInput">
        <div style={icnSty} onClick={ShowSuche}><Icon val="search"/></div>
        <div><input type="text" placeholder="Buscar..."/></div>
    </div>);
}

const MenuTop=({orient={w: $(window).width(),h:$(window).height(),o: ($(window).width()>$(window).height())},menuOpen=false,fnc_menuOpen=()=>{return;}})=>{

    let css=(menuOpen)?((orient.o)?{left: '15%',width: '85%'}:{left: '100%',width: '100%'}):((orient.o)?{}:{gridTemplateColumns: '1fr 4fr'});
    return <div id="MenuTop" style={css}>
        <div id="FullMenuAccess" className="divMenuTop" style={{paddingTop: '2vh',paddingLeft: '2vw'}}>
            <BttnMenu orient={orient} menuOpen={menuOpen} fnc_menuOpen={fnc_menuOpen}/>
        </div>
        {
        ((orient.o)?
        <div id="QuickMenu" className="divMenuTop" style={{justifyContent: 'center',alignItems: 'center'}}>
            <QuickMenu/>
        </div>:<></>)
        }
        <div id="userPrefs" className="divMenuTop" style={{justifyContent: 'right',alignItems: 'center',paddingRight: '2vw'}}>
            <SecUserMenu orient={orient}/>
        </div>
    </div>;
}

const Menu=({orient={w: $(window).width(),h:$(window).height(),o: ($(window).width()>$(window).height())},menuOpen=false,fnc_menuOpen=()=>{return;}})=>{
    let css=(menuOpen)?((orient.o)?{width: '15%',overflowY: 'auto'}:{width: '100%',overflowY: 'auto'}):{},
    css2=(menuOpen)?{opacity: '1'}:{opacity: '0',pointerEvents:'none'},
    cssLogo=(orient.o)?{width: '90%',marginTop: '3vh',marginLeft: '5%',marginBottom: '2vh'}:{width: '60%',marginTop: '10vh',marginLeft: '20%',marginBottom: '2vh'},
    cssA=(orient.o)?{}:{fontSize: '7vh',padding: '2vh 1vw',marginLeft: '8vw',width: '80%'},
    cssDiv=(orient.o)?{}:{fontSize: '9vh',marginLeft: '8vw',marginRight: '16vw',marginBottom: '6vh'},
    cssTitlPanl=(orient.o)?{}:{fontSize: '11vh'};
    return <>
    <div id="Menu" style={css}>
        {//<div style={cssLogo}><img src="IMG/Angie/Logo.png" style={{width: '100%'}}/></div>
 //       <div style={{width: '100%',borderBottom: 'solid 0.5vh #fff',paddingBottom: '5vh'}}></div>
}
        <div className="MenuTitle" style={cssTitlPanl}>Menú</div>
        <div className="MenuPanel">
            <div style={cssDiv}>Panel</div>
            <a style={cssA} href=""><Icon val="Home"/> Inicio</a>
            <a style={cssA} href=""><Icon val="newspaper"/> Nuevo</a>
            <a style={cssA} href=""><Icon val="flag"/> Destacado</a>
            <a style={cssA} href=""><Icon val="book-open"/> Catalogo</a>
            <a style={cssA} href=""><Icon val="file-contract"/> Mecanica</a>
        </div>
        <div className="MenuPanel">
            <div style={cssDiv}>ALHUBO</div>
            <a style={cssA} href=""><Icon val="skull"/>ALHUBOWeb</a>
        </div>
    </div>
    <div id="MenuClose" style={css2} onClick={()=>fnc_menuOpen(false)}></div>
    </>;
}

const Producto=({type='',item=''})=>{
    return (
    (type=='destacado'&&(item==''||item=='0'))?<div className="divProduct" style={{width: '6vw'}}>Mejores Productos<div>Visita lo mas comprado</div><a>Ver mas...</a></div>:
    (type=='destacado')?
    <div className="divProduct">
        <img className="imgProduct" src={"IMG/Producto/d/"+item+".0.webp"}/>
    </div>:<div className="divProduct"></div>);
};


const como=()=>{
    return <div id="algo" style={{width: '10px'}}>
        contenido
        
    </div>;
};