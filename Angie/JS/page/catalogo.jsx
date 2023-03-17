function  getCateroria({vr_id='',fcnCategory=()=>{return;}}){
    if(Object.keys(webConfig.Categoris).length==0){
        AjaxJson({
            vr_url: 'PHP/getCategorias.php',
            vr_data: {type: 'nochilds'},
            fnc_success: (dat)=>{
                if(dat.error==0){
                    dat=dat.dat;
                    let keys=Object.keys(dat).slice().reverse().map(x=>x);
                    keys.forEach(k=>{
                        if(dat[k].father!='0'&&dat[k].father!='') dat[dat[k].father].childs[Object.keys(dat[dat[k].father].childs).length]=dat[k];
                    });
                    keys=keys.map(k=> (dat[k].father!='0'&&dat[k].father!='')?k:'');
                    keys.forEach(k=>{
                        if(k!='') delete dat[k];
                    })
                    
                    webConfig.Categoris=dat;
                    fcnCategory(1);
                }
            },
            fnc_error: (e)=>{
                console.log(e);
                fcnCategory(2);
            }
        });
    }else{
        fcnCategory(1);
    }
}

const ParseCategory=({vr_cat={name: '',childs:{},father:'0'}})=>{
    return <li><details><summary>{vr_cat.name}</summary><ul>
            {
            Object.keys(vr_cat.childs).map(x=> <ParseCategory key={x} vr_cat={vr_cat.childs[x]}/>)
            }
            <li><button>Agregar</button></li>
    </ul></details></li>;
}


const Producto=({id='0',rend='',name='',ext='jpg',fncItem=()=>{return;},fncPage=()=>{return;}})=>{
    const url="IMG/Producto/"+id+".0."+ext;
    const [load,setLoad]=useState(true);
    const [item,setItem]=useState({});
    const details=()=>{
        fncItem(id);
        fncPage({P:'DetailProduct'});
    }
    useEffect(() => {
        if(rend=='full'){
            AjaxJson({
                vr_url: 'PHP/getProductos.php',
                vr_data: {type: 'detail',id: parseInt(id)},
                fnc_success: (data)=>{
                    data.data[id].ext=data.data[id].ext.split('|');
                    data.data[id].ext.pop();
                    let i=0;
                    data.data[id].ext=data.data[id].ext.map(x=>new Object({i: i++,v: x}));
                    setItem(data.data[id]);
                    setLoad(false);

                }
            });

        }
        }, [])

    const moveMouse=(e)=>{
            let tis=$(e.nativeEvent.srcElement)[0];
            var a, x = 0, y = 0,xi=0,yi=0,ox=tis.offsetWidth/2,oy=tis.offsetHeight/2;
          e = e || window.event;
          
          a = tis.getBoundingClientRect();
          
          x = e.pageX - a.left;
          y = e.pageY - a.top;
          
          x = x - window.pageXOffset;
          y = y - window.pageYOffset;
        
          xi=-(x-ox)*1.5;
          yi=-(y-oy)*1.5;

          $("#imgProducDetail").css('transform','translate('+xi+'px,'+yi+'px) scale(2.5)');
    }
    const chngImg=(vr_url)=>{
       
        $("#ContentPage").animate({
            scrollTop: 0
        }, 500); 
        $("#imgProducDetail").attr('src',vr_url);
    }

    const scrolItems=(vr_dir,event)=>{
        event=$(event.nativeEvent.srcElement);
        event.prop('disabled',true);
        if($("#itemsDetails")[0].childNodes.length>3){
            let scrll=Math.ceil($("#itemsDetails")[0].scrollLeftMax/($("#itemsDetails")[0].childNodes.length-3))*3;
            scrll=(vr_dir)?scrll:-scrll;
            $("#itemsDetails").animate({
                scrollLeft: $("#itemsDetails")[0].scrollLeft+scrll
            }, 600,function(){
                event.prop('disabled',false);
            });
        }else{
            event.css('display','none');
        }
    }
    return (
    (rend=='full')?
    <>
    <div style={{display: 'flex'}}>
    <div id="contentImgProducDetail" onMouseLeave={()=>$("#imgProducDetail").css('transform','scale(1)')} onMouseMove={(e)=>moveMouse(e)}  style={{height: '62vh',width: '40%',background: '#fff',display: 'flex',justifyContent: 'center',alignItems: 'start',overflow: 'hidden',cursor: 'zoom-in'}}>
        {(load)?
        <div id="imgProducDetail" className=" skeleton"></div>:
        <img id="imgProducDetail" className="" src={"IMG/Producto/"+id+".0."+item.ext[0].v}/>
        }
    </div>
    {(load)?
    <div className="skeleton" style={{height: '90vh',width: '60%'}}></div>:
    <div className="detailsProduct">
        <div className="detailsProduct_title">{item.name}</div>
        <div className="detailsProduct_descrip">{item.Descript}</div>
        <div className="detailsProduct_pric"><div>{formatNumber.new(item.Pric_V, "$")}</div></div>
        <div><button onClick={()=>{let str="http://localhost/Angie/?page=DetailProduct&item="+id;
        
        if (navigator && navigator.clipboard && navigator.clipboard.writeText){
            showSMS({vr_title: 'Enlace',vr_type:'success',vr_sms: '¡Enlace copiado!',vr_time: 1});
            return navigator.clipboard.writeText(str);
        }
        showSMS({vr_title: 'Enlace',vr_type:'error',vr_sms: 'Tu navegador no soporta el copiado.'});
        return Promise.reject("The Clipboard API is not available.");}}>Copiar link</button></div>
    </div>
        }
    
    </div>
    {(load)?<></>:
    <div style={{display: 'flex',marginTop: '-12vw'}}>
    <button onClick={(e)=>scrolItems(false,e)}>{"<"}</button>
    <div id="itemsDetails">
        {
            item.ext.map(({i,v})=> <img key={id+"_"+i} className="minNxtD" src={"IMG/Producto/"+id+"."+i+"."+v } onClick={()=>{chngImg("IMG/Producto/"+id+"."+i+"."+v)}}/>)
        }
    </div>
    <button onClick={(e)=>scrolItems(true,e)}>{">"}</button>
    </div>
    }
    </>
    :(id!='0')?<div className="producto" title={name} onClick={()=>details()}>
        <img className="productoIMG1" src={url}  onClick={()=>details()}/>
        <div className="productName1">{name}</div>
    </div>:<div className="producto">
        <div className="skeleton" style={{width: '100%',height: '90%',borderRadius: '2vh'}}></div>
        <div className="skeleton" style={{  width: '90%',height: '3vh',borderRadius: '2vh',margin: '0vh 0.4vw'}}> </div>
    </div>);
}

const ShowProduct=({id='0',fncItem=()=>{return;},fncPage=()=>{return;}})=>{
    return <Producto id={id} rend="full" fncItem={fncItem} fncPage={fncPage}/>
}

const Baner=({id='0'})=>{
    const url="IMG/News/"+id+".webp";
    return <div className="baner">
        <img className="banerImg" src={url}/>
    </div>;
}

const Catalogo=()=>{
    return <div>Catalogo</div>;
}