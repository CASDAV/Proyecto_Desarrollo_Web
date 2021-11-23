import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { LicoresService } from '../../servicios/licores.service';
import {Licor} from '../../servicios/product';
import { Router } from '@angular/router';
import {Usuario} from '../../servicios/usuario';


@Component({
  selector: 'app-licores',
  templateUrl: './licores.component.html',
  styleUrls: ['./licores.component.css']
})
export class LicoresComponent implements OnInit {
  us = new Usuario();

 licores:Licor[]=[];
 tam:any = 0; 
  constructor(private _licoresService: LicoresService,
    private router:Router) {

   }

  ngOnInit(): void {
    this.licores = this._licoresService.getLicores();
   
   

}
  
  
  onDelete(lic: Licor):void{
    this.licores = this._licoresService.onDelete(lic);
    }
    tip(){
      this.us = this._licoresService.getUsuario();
      return this.us.tipo;
      }


}
