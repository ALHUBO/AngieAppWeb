/*
Variables globales para Angie app
Desarrollado por ALHUBO 
*/

//objetos

function ListProductos(data){
    this.data=data;
    this.len=()=>{
        return Object.keys(this.data).length;
    }
    this.forEach=(fnc)=>{
        return Object.keys(this.data).forEach(fnc);
    };
    this.map=(fnc)=>{
        return Object.keys(this.data).map(fnc);
    };
    this.add=(id,obj)=>{
        this.data[id]=obj;
        this.forEach=(fnc)=>{
            return Object.keys(this.data).forEach(fnc);
        };
    }
}
class SmsSystem{
    constructor({}){
        this.sms= {};
    }
}


//configuracion del sitio
class WebObject{
    constructor(){
        let lru=new URL(window.location),
        vr_MenuOpen=(lru.searchParams.get('menuO'))?true:false,
        vr_page2Load=(lru.searchParams.get('menuO'))?lru.searchParams.get('menuO'):'inicio';
        this.Menu={
            open: vr_MenuOpen//Default open?
        };
        this.Page={
            start: vr_page2Load
        };
        this.root={

        };
        //win o:[true=landscape]|[false=portrait]
        this.win={
            w: $(window).width(),
            h:$(window).height(),
            o: ($(window).width()>$(window).height())
        }
    }

    set setPage(vr_page){
        this.Page.start=vr_page;
    }
    set setMenuOpen(vr_open){
        this.Menu.open=vr_open;
    }
    set setRoot(vr_name){
        let vr_root=$('#'+vr_name);
        if(vr_root===null) return false;
        if(this.root[vr_name]!==undefined) return false;
        this.root[vr_name]={RDOM: ReactDOM.createRoot(vr_root[0]),DOM: vr_root};
        return true;
    }

    renderCSS(){
        this.win={
            w: $(window).width(),
            h:$(window).height(),
            o: ($(window).width()>$(window).height()) 
        };
        console.log(this.win);
    }

    initRender(){
        /*let divs=['userPrefs','FullMenuAccess','QuickMenu']
        let contents={
            'FullMenuAccess': <BttnMenu open={this.Menu.open} fnc_open={this.toggleOpen()}/>,
            'QuickMenu': <QuickMenu/>,
            'userPrefs': <SecUserMenu/>
        }
        divs.forEach((i)=>{
            //crea reices
            this.setRoot=i;
            //quita estilo de cargando
            this.root[i].DOM.removeClass('skeleton');
            //inserta datos
            this.root[i].RDOM.render(contents[i]);
        });*/
        this.setRoot='WebApp';
        this.root['WebApp'].DOM.removeClass('skeleton');
        this.root['WebApp'].RDOM.render(<WebApp menuOpenDeflt={this.Menu.open}/>);
    }
}

//configuracion de Angie AppWeb
class AngieWebApp{
    constructor({vr_itemInit=''}){
        this.Item=vr_itemInit;
        this.Categoris= {

        }
    }
}



//user propiedades
var user={
    load: false,//verifica si hay sesion [false | aun no verifica] [true | ya verifico]
    login: false,//inicio sesion [false | invitado] [true | inicio sesion]
    id: '',//id del usuario
    name: ''//nombre del usuario
};

//base de datos propiedades
var db={
    status: false,//hay conexion?
    load: false,//ya hizo una consulta
    destacados: new ListProductos({})
};


//react globales
const useState=React.useState;
const useEffect=React.useEffect;
