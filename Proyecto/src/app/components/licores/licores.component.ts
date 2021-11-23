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

 licores:any[]=[];
 tam:any = 0; 
  constructor(private _licoresService: LicoresService,
    private router:Router) {

   }

  ngOnInit(): void {
     this._licoresService.consultarProductos(0,8).subscribe((respo:any)=>{
    this.licores = respo.content;
    console.log(respo);
    })
   
   

}
  
  
  onDelete(lic: any):void{
    this._licoresService.eliminarp(lic).subscribe(()=>{
      console.log("eliminado con exito");
    });
    this._licoresService.consultarProductos(0,8).subscribe((respo:any)=>{
      this.licores = respo.content;
      })
    }
    tip(){
      this.us = this._licoresService.getUsuario();
      return this.us.tipo;
      }


}
