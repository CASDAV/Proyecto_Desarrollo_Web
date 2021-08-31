import{Injectable} from '@angular/core';
@Injectable()
export class LicoresService {

private licores:Licor[] = [
    {
      nombre: "Cerveza Poker",
      bio: "La mejor",
      img: "assets/img/poker.png",
      precio:3000,
      venta:"$3.000"
    },
    {
      nombre: "Cerveza Aguila",
      bio: "La mejor",
      img: "assets/img/aguila.png",
      precio: 3000,
      venta:"$3.000"
    },
    {
      nombre: "Cerveza Corona",
      bio: "La mejor",
      img: "assets/img/corona.png",
      precio:5000,
      venta:"$5.000"
    }
    
  ];




    constructor(){
    console.log("Hola");
    }

    getLicores(){
        return this.licores;
    }
    getLicor(idx: number){
      return this.licores[idx];
    }
}


export interface Licor{
    nombre: string,
    bio: string,
    img: string,
    precio: number,
    venta:string
    
}