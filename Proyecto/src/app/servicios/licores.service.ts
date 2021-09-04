import{Injectable} from '@angular/core';
import {Licor} from './product';
import {Usuario} from './usuario';
import {Orden} from './orden'

@Injectable()
export class LicoresService {
  us = new Usuario();
  registro: Orden[] = [];

  private usuarios:Usuario[] = [
    {
      nombre:"David",
      apellido:"f",
      email:"david@gmail.com",
      cont:"123",
      tipo:"admin",
      compras:[]
    },
    {
      nombre:"Dan",
      apellido:"f",
      email:"dan@gmail.com",
      cont:"1",
      tipo:"usuario",
      compras:[]
    }
  ];

  private licores:Licor[] = [
  {
    nombre: "Cerveza Poker",
    bio: "La cerveza clasica para el parche",
    img: "assets/img/poker.png",
    precio:3000
  },
  {
    nombre: "Cerveza Aguila",
    bio: "La consentida de colombia",
    img: "assets/img/aguila.png",
    precio: 3000
  },
  {
    nombre: "Cerveza Corona",
    bio: "Cerveza mexicana de gran calidad y sabor",
    img: "assets/img/corona.png",
    precio:5000
  },
  {
    nombre: "Nvidia RTX 3080",
    bio: "Tarjeta grafica de alta gama, para obtener el meojor desempeño que el dinero puede pagar",
    img: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3080/images/design/geforce-rtx-3080-4-960.jpg",
    precio:3000000
  },
  {
    nombre: "Caja de colores prisma color",
    bio: "Para ti que te  gusta el dibujo y el arte, te traemos la caja mas completa de colores para que tu pasion no se vea limitada por los colores",
    img: "https://m.media-amazon.com/images/I/811Y0d3mJFL._AC_SY355_.jpg",
    precio:130000
  },
  {
    nombre: "Figura colecionable del Hombre  Araña ",
    bio: "Para que completes la colección o para que decores tu sitio favorito",
    img: "https://http2.mlstatic.com/D_NQ_NP_823650-MCO32379227504_092019-V.jpg",
    precio:55000
  },
  {
    nombre: "Elantris",
    bio: "La primera obra publicada de el maestro de la fantasia moderna, esta aventura te llevara a decubrir los secretos de la caida en desgracia de la mitica ciudad de elentris",
    img: "https://juanjelopezponeletras.files.wordpress.com/2019/08/elantris.jpg",
    precio:67000
  }
];




    constructor(){}

    getLicores(){
        return this.licores;
    }
    getLicor(idx: number){
      return this.licores[idx];
    }
    addP(lic:Licor){
      this.licores.unshift(lic);
    }
    onDelete(lic: Licor){
      this.licores = this.licores.filter(x => x.nombre != lic.nombre);
      return this.licores;
      }

      getUsuarios(){
        return this.usuarios;
      }
      getUsuario(){
        return this.us;
      }
      verificar(email:string,pass:string){
     
        let x = this.usuarios.find(y => y.email == email );
        
        if(x?.cont == pass ){
          this.us = x;
          return this.us;   
        }
        else{
         return null;
        }

      }
      joinUsuario(Usu: Usuario){
        this.us.email = Usu.email;
        this.us.nombre = Usu.nombre;
        this.us.apellido = Usu.apellido;
        this.us.tipo = Usu.tipo;
        
      }
      addU(usua:Usuario){
        this.usuarios.unshift(usua);
        this.joinUsuario(usua);
      }
      
      comprarProducto(lic: Licor, copia: Orden){
        
        this.us.compras.push(lic);
        this.registro.push(copia);
        
      }

      getCompras(){
        return this.us.compras;
      }

      getCompra(idx: number){
        return this.us.compras[idx];
      }
      
      getRegistro(){
        return this.registro;
      }
}


