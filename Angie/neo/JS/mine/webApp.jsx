const WebApp=({menuOpenDeflt=false,orientationDeflt={w: $(window).width(),h:$(window).height(),o: ($(window).width()>$(window).height())}})=>{
    const [menuOpen,setMenuOpen]=useState(menuOpenDeflt),
    [orient,setOrient]=useState(orientationDeflt);//landscape

    useEffect(() => {
        console.log('Se creo App');
        $(window).resize(()=>{
            setOrient({w: $(window).width(),h:$(window).height(),o: ($(window).width()>$(window).height())});
        }); 
    }, []);


    return <>
    <MenuTop menuOpen={menuOpen} fnc_menuOpen={setMenuOpen}/>
    <Menu orient={orient} menuOpen={menuOpen} fnc_menuOpen={setMenuOpen}/>
    <PageConent/>
    </>;
}


const SecUserMenu=({orient={w: $(window).width(),h:$(window).height(),o: ($(window).width()>$(window).height())}})=>{
    //seccion para la busqueda, el usuario, favoritos y el carrito
    return (<>
    <Suche/>
    {
        ((orient.o)?
        <><div className="SecUserDiv"><Icon val="user"/></div>
        <div className="SecUserDiv"><Icon val="heart"/></div>
        <div className="SecUserDiv"><Icon val="shopping-cart"/></div></>:<></>
        )
    }
    </>);
}

const BttnMenu=({orient={w: $(window).width(),h:$(window).height(),o: ($(window).width()>$(window).height())},menuOpen=false,fnc_menuOpen=()=>{return;}})=>{          
    let css=(!menuOpen)?"bttnMenu":"bttnMenu bttnMenu_active",
    sty=(!orient.o&&menuOpen)?{transform: 'translate(-11vh)'}:{},
    cssDiv=(!orient.o&&menuOpen)?{background: '#fff'}:{}
    return <div style={sty} className={css} onClick={()=>fnc_menuOpen(!menuOpen)}>
    <div style={cssDiv}></div>
    <div style={cssDiv}></div>
    <div style={cssDiv}></div>
    </div>;
}

const QuickMenu=()=>{
    return <>
    <QuickMenuOption val="home"/>
    <QuickMenuOption val=""/>
    <QuickMenuOption val="box"/>
    </>;
}

const PageConent=({orient={w: $(window).width(),h:$(window).height(),o: ($(window).width()>$(window).height())},page='inicio'})=>{
    page=page.toLowerCase();
    let cssTitle=(!orient.o)?{
        width: '80vw'
    }:{
        height: '10vw'
    };

    return <div id="PageConent">
        <div style={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: '5vh',
        marginBottom: '8vh'
    }}>
        <img className="LogoInicio" src="IMG/Angie/Logo.png" style={cssTitle}/>
        </div>
        <div id="ContentPage">
            {
                (page=='inicio')?<Inicio orient={orient}/>:<Error404 orient={orient}/>
            }
        </div>
        </div>;
};

const Inicio=({orient={w: $(window).width(),h:$(window).height(),o: ($(window).width()>$(window).height())}})=>{
    return ((orient.o)?
    <div id="InicioNews" className="classInicioNews_H">
        <div className="sectCateg">Categorias</div>
        <div>
            <div style={{marginBottom: '2vh'}}>
                <button>Editar</button>
            </div>
            <div style={{display: 'flex',overflow: 'hidden',maxWidth: '45vw'}}>
                <img className="imgNew" src="IMG/News/1.webp"/>
                <img className="imgNew" src="IMG/News/2.webp"/>
                <img className="imgNew" src="IMG/News/3.webp"/>
            </div>
            <div className="ItemsDest">
                <Producto type="destacado"/>
                <Producto type="destacado" item="2"/>
                <Producto type="destacado" item="6"/>
                <Producto type="destacado" item="4"/>
                <Producto type="destacado" item="5"/>
                <Producto type="destacado" item="5"/>
                <Producto type="destacado" item="5"/>
                <Producto type="destacado" item="5"/>
                <Producto type="destacado" item="5"/>
                <Producto type="destacado" item="5"/>
                <Producto type="destacado" item="5"/>
                <Producto type="destacado" item="5"/>
            </div>
        </div>
        <div className="sectUser">Cuenta</div>
    </div>:<div id="InicioNews" className="classInicioNews_V">
        <div>News</div>
        <div>Cuenta</div>
        <div>Categorias</div>
    </div>);
};

const Error404=()=>{
    return <div>Error 404</div>
}