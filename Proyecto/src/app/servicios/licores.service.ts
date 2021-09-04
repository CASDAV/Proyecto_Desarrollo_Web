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
    bio: "La mejor",
    img: "assets/img/poker.png",
    precio:3000
  },
  {
    nombre: "Cerveza Aguila",
    bio: "La mejor",
    img: "assets/img/aguila.png",
    precio: 3000
  },
  {
    nombre: "Cerveza Corona",
    bio: "La mejor",
    img: "assets/img/corona.png",
    precio:5000
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
}


