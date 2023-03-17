

const Inicio=({login=false,fncLogin=()=>{return;},fncActionLog=()=>{return;},fncItem=()=>{return;},fncPage=()=>{return;}})=>{
    let sap=null;
    const [loadDesta,setLoadDesta]=useState(0);
    const [loadCateg,setLoadCateg]=useState(0);

    const scrollDiv=(right)=>{
        if(right){
        sap=setInterval(()=>{
            let scrol=$('.CN_destacados').scroll();
            scrol=scrol[0];
            changeColor(scrol);
            $(".CN_destacados").animate({
                scrollLeft: scrol.scrollLeft+20
            }, 50);
        },50);
        }else{
            sap=setInterval(()=>{
                let scrol=$('.CN_destacados').scroll();
                scrol=scrol[0];
                changeColor(scrol);
                $(".CN_destacados").animate({
                    scrollLeft: scrol.scrollLeft-20
                }, 50);
            },50);
        }
    }


    
    const changeColor=(scrol)=>{
        if(scrol.scrollLeft==0){
            $('.bttn_BDestac').css({backgroundColor: '#fff'});
        }else{
            $('.bttn_BDestac').css({backgroundColor: '',background: 'linear-gradient(90deg, rgba(0, 0, 0, 0), rgb(255, 255, 255))'});
        }
        if(scrol.scrollLeftMax==scrol.scrollLeft){
            $('.bttn_ADestac').css({backgroundColor: '#fff'});
        }else{
            $('.bttn_ADestac').css({backgroundColor: '',background: 'linear-gradient(270deg, rgba(0, 0, 0, 0), rgb(255, 255, 255))'});
        }
    }
    const stopScroll=()=>{
        if(sap!==null) clearInterval(sap);
    }
    

    useEffect(() => {
        if(Object.keys(webConfig.Categoris).length==0){
            getCateroria({fcnCategory: setLoadCateg});
        }else{
            setLoadCateg(1);
        }

        AjaxJson({
            vr_url: 'PHP/getProductos.php',
            vr_data: {type: 'destacado'},
            fnc_success: (dat)=>{
                if(dat.error==0){
                    db.destacados.data=dat.data;
                    setLoadDesta(1);
                }
            },
            fnc_error: ()=>{
                setLoadDesta(2);
            }
        });
    }, [])
    return <>
        <div id="LogoContent"><img id="LogoFull" src="IMG/Angie/Logo.png"/></div>
        <div style={{display: 'flex',justifyContent: 'center',width: '100%',marginTop: '8vh'}}>
            <div className="contentCategorisInicio">
                <div><Icon val="list"/> Categorias</div>
                { (loadCateg==0)?
                <>
                <a className="skeleton" style={{borderRadius: '2vh',height: '3vh',marginTop: '1vh',marginBottom: '1vh'}}></a>
                <a className="skeleton" style={{borderRadius: '2vh',height: '3vh',marginTop: '1vh',marginBottom: '1vh'}}></a>
                <a className="skeleton" style={{borderRadius: '2vh',height: '3vh',marginTop: '1vh',marginBottom: '1vh'}}></a>
                <a className="skeleton" style={{borderRadius: '2vh',height: '3vh',marginTop: '1vh',marginBottom: '1vh'}}></a>
                <a className="skeleton" style={{borderRadius: '2vh',height: '3vh',marginTop: '1vh',marginBottom: '1vh'}}></a>
                <a className="skeleton" style={{borderRadius: '2vh',height: '3vh',marginTop: '1vh',marginBottom: '1vh'}}></a>
                <a className="skeleton" style={{borderRadius: '2vh',height: '3vh',marginTop: '1vh',marginBottom: '1vh'}}></a>
                <a className="skeleton" style={{borderRadius: '2vh',height: '3vh',marginTop: '1vh',marginBottom: '1vh'}}></a>
                <a className="skeleton" style={{borderRadius: '2vh',height: '3vh',marginTop: '1vh',marginBottom: '1vh'}}></a>
                <a className="skeleton" style={{borderRadius: '2vh',height: '3vh',marginTop: '1vh',marginBottom: '1vh'}}></a>
                </>:
                (loadCateg==1)?<>
                {
                    Object.keys(webConfig.Categoris).map(x=> 
                        <a key={x}>{webConfig.Categoris[x].name}</a>
                        )
                }
                </>:
                <div style={{color: '#d00'}}>{"No se pudo cargar las categorias"}</div>
                }
            </div>
            <div className="contentNewsInicio">
                <div className="CNI_bttns">
                    <button>Hola</button>
                </div>
                <div className="CNI_productos">
                <div className="CN_news">
                    <div className="CN_baner">
                        <Baner id="1"/>
                        <Baner id="2"/>
                        <Baner id="3"/>
                    </div>
                    <div id="descacProduct" style={{display: 'flex'}}>
                    <button  className="bttn_BDestac" style={{transition: '0.2s',cursor: 'pointer',background: 'linear-gradient(90deg,#0000,#fff)',border: 'none',height: '25vh',fontSize: '4vh',color: '#d27878'}} onMouseOver={()=>scrollDiv(false)} onMouseLeave={stopScroll}>{"<"}</button>
                        <div className="CN_destacados">
                        <div className="firstCardProduct">
                            <div>Mejores productos</div>
                            <div>Visita lo mas comprado.</div>
                            <a>Ver más</a>
                        </div>
                            {
                        (loadDesta==1)?(<>
                        {
                            db.destacados.map(k=> <Producto key={k} id={''+k} name={db.destacados.data[k].name} ext={db.destacados.data[k].ext} fncItem={fncItem} fncPage={fncPage}/> )
                        }
                        </>):
                        ((loadDesta==2)?<div className="producto" style={{display: 'flex',alignItems: 'center',fontSize: '2.6vh',maxWidth: '10vw',textAlign: 'center',color: '#b00'}}>No se pudieron cargar los productos</div>:<><Producto /><Producto /><Producto /><Producto /> </>)
                        }
                        </div>
                        <button className="bttn_ADestac" style={{borderTopRightRadius: '2vh',borderBottomRightRadius: '2vh',transition: '0.2s',cursor: 'pointer',background: 'linear-gradient(270deg,#0000,#fff)',border: 'none',height: '25vh',fontSize: '4vh',color: '#d27878'}} onMouseOver={()=>scrollDiv(true)}  onMouseLeave={stopScroll}>{">"}</button>
                    </div>
                    
                </div>
                <div className="userInicio">
                    <UserCart id={user.id} name={user.name} fncLogin={fncLogin} login={login} inicio={true} fncActionLog={fncActionLog}/>
                </div>
                </div>
            </div>
        </div>
    </>;
}