import{Injectable} from '@angular/core';
import { LicoresComponent } from '../components/licores/licores.component';
import {Licor} from './product';

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




    constructor(){}

    getLicores(){
      
        return this.licores;
    }
    getLicor(idx: number){
      return this.licores[idx];
    }
    onCreate(){

    }
    onDelete(lic: Licor){
      this.licores = this.licores.filter(x => x.nombre != lic.nombre);
      return this.licores;
      }
}


