var ex;
const Admin=()=>{
    const [upload,setUpload]=useState(false);
    const [updateCat,setupdateCat]=useState(false);
    const [loadCat,setLoadCat]=useState(0);
    const [opNeoProd,setopNeoProd]=useState(0);

    const submt=()=>{
        
        let formData = new FormData(),
        imgagenes=$("#productImg")[0].files,
        nombre=$("#productName").val(),
        descrip=$("#decriptPU").val(),
        PricComp=$("#PCPU").val(),
        PricVent=$("#PVPU").val(),
        Catergor=$("#CPU").val();
        if(imgagenes.length<=0){
            console.log("Selecciona un archivo");
            return;
        }
        if(nombre==''){
            console.log("Ingresa un nombre");
            return;
        }
        if(descrip==''){
            console.log("Ingresa una descripcion");
            return;
        }
        if(PricComp==''){
            console.log("Ingresa un precio de compra");
            return;
        }
        if(PricVent==''){
            console.log("Ingresa un precio de venta");
            return;
        }
        if(Catergor==''){
            console.log("Ingresa una categoria");
            return;
        }
        setopNeoProd(1);
        setUpload(true);
        for(const img of imgagenes) {
            formData.append("img[]", img);
        }
        
        formData.append('name',nombre);
        formData.append('desc',descrip);
        formData.append('PC',PricComp);
        formData.append('PV',PricVent);
        formData.append('C',Catergor);
        AjaxForm({
            vr_url: 'PHP/uploadProducto.php',
            vr_data: formData,
            fnc_success: ()=>{
                setUpload(false);
                showSMS({vr_title: 'Se subió',vr_type:'success',vr_sms: '¡Ya lo pueden comprar!'});
            },
            fnc_error: (e)=>{
                setUpload(false);
               console.log(e.responseText);
               showSMS({vr_title: 'Falló',vr_type:'success',vr_sms: '¡Algo salio mal! intentalo de nuevo.',vr_time: 1});
            }
        });
    }

    const perviw=()=>{
        let files=$("#productImg")[0].files;
        let txt='';
        $("#productPreviewShow").html('');
        Object.keys(files).forEach(k=>{
            let type=files[k].type.split("/");
            if(type[0].toLowerCase()=='image'){
                txt+='<div><img id="imgPUpl_'+k+'" class="imgToUpload"/><div class="txtToUpload">'+files[k].name+'</div></div>';
                $("#productPreviewShow").append(txt);
                txt='';
                let reader = new FileReader();
                reader.onload = function (e) {
                    $('#imgPUpl_'+k).attr("src", e.target.result);
                };
                reader.readAsDataURL(files[k]);
            }
        });
    }

    const price=(e)=>{
        e=$(e);
        let str=e.val();

        str=str.replace(/[^0-9^.]+/g, "");
        let dig=str.split(".");
        if(dig.length>1&&dig[1].length>0){
            let d=dig[1]+"";
            if(d.length>2){
                d=d.substring(0,2);
            }
            dig[1]=parseInt(d);
            str=dig[0]+"."+dig[1];
        }
        if(str.length<=0){
            e.css('width','20ch');
        }else{
            e.css('width',str.length+'ch');
        }
        e.val(str);
    }

    

    const showSection=(vr_id)=>{
        if($("#"+vr_id).css('display')==='none'){
            
            $("#"+vr_id).fadeIn('slow');
            if(vr_id=='SectionUpdateCategory'){
                getCateroria({fcnCategory: setLoadCat});
            }
        }else{
            $("#"+vr_id).fadeOut('slow');
        }
    }

    
    return <>
    <div>Pagina para administrar Angie Chacharitas</div>
    <datalist id="categorys">
        {(loadCat==0)?<></>:
        <>
        <option value="Mujer"></option>
        <option value="Hombre"></option>
        </>
        }
    </datalist>
    <div>
    <div style={{color: '#c8566d',fontSize: '8vh',padding: '0vh 4vw',cursor: 'pointer'}} onClick={()=>showSection("SectionUploadProduct")}>Agregar un nuevo producto</div>
        {
        (upload)?<>Subiendo...</>:<>
        <div id="SectionUploadProduct" style={(opNeoProd==1)?{}:({display:'none'})}>
        <div><input style={{color: '#c8566d',fontSize: '4vh',padding: '1vh 1vw',border: 'solid 0.2vh #c8566d',borderRadius: '2vh',margin: '2vh 1vw',backgroundColor: '#ffffffa6'}} type="text" id="productName" name="name" placeholder="Nombre del producto"/></div>
        <div><input id="productImg" style={{display: 'none'}} name="img" type="file" onChange={()=>perviw()} multiple={true} accept={'image/gif,image/jpeg,image/jpg,image/png,image/webp'}/></div>
        <div><textarea id="decriptPU" style={{width: '50vw',height: '22vh',padding: '2vh 1vw',margin: '3vh 2vw'}} placeholder="Describe el producto..."></textarea></div>
        <div style={{color: '#c8566d',fontSize: '5vh',padding: '1vh 1vw',margin: '2vh 1vw'}}>$<input id="PCPU" style={{color: '#c8566d',fontSize: '4vh',border: 'none',backgroundColor: 'transparent',outline: 'none'}} type="text" placeholder="Precio de Compra" onChange={(e)=>price(e.target)}/></div>
        <div style={{color: '#c8566d',fontSize: '5vh',padding: '1vh 1vw',margin: '2vh 1vw'}}>$<input id="PVPU" style={{color: '#c8566d',fontSize: '4vh',fontSize: '4vh',border: 'none',backgroundColor: 'transparent',outline: 'none'}} type="text" placeholder="Precio de Venta"  onChange={(e)=>price(e.target)}/></div>
        <div style={{color: '#c8566d',fontSize: '5vh',padding: '1vh 1vw',margin: '2vh 1vw'}}><input style={{color: '#c8566d',fontSize: '4vh',fontSize: '4vh',border: 'none',backgroundColor: 'transparent',outline: 'none'}} type="text" placeholder="Porcentaje de ganancia" onChange={(e)=>price(e.target)}/>%</div>
        <div><button style={{marginLeft: '10vw'}} className="bttnAngie1" onClick={()=>$("#productImg").click()}>Subir Imagenes</button></div>
        <div id="productPreviewShow"></div>
        <div><input id="CPU" style={{color: '#c8566d',fontSize: '4vh',padding: '1vh 1vw',border: 'solid 0.2vh #c8566d',borderRadius: '2vh',margin: '2vh 1vw',backgroundColor: '#ffffffa6'}} list="categorys" placeholder="Categoria"/></div>
        <div><button style={{marginBottom: '25vh',marginLeft: '10vw'}} className="bttnAngie1" onClick={()=>submt()}>Subir producto</button></div>
        </div>
        
        </>
        }
        <div style={{color: '#c8566d',fontSize: '8vh',padding: '0vh 4vw',cursor: 'pointer'}} onClick={()=>showSection("SectionUpdateCategory")}>Editar Categorias</div>
        {
        (updateCat)?<>Actualizando...</>:<>
        <div id="SectionUpdateCategory" style={(opNeoProd==2)?{}:({display:'none'})}>
            <div>{(loadCat==0)?<>Cargando Categorias...</>:
            (loadCat==1)?
            <ul className="tree">
            {
            Object.keys(webConfig.Categoris).map(x=> <ParseCategory key={x} vr_cat={webConfig.Categoris[x]}/>)
            }
            <li><button>Agregar</button></li>
            </ul>:
            <>No se pudo cargar las categorias</>}</div>
        </div>
        
        </>
        }
    </div>
    
    </>;
}