import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Licor} from '../../servicios/product';
import { LicoresService } from '../../servicios/licores.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
  nombre: string='';
  bio: string='';
  precio: number=0;
  p:any={};
  licores:Licor[]=[];
  
  constructor(private activateRoute: ActivatedRoute,
    private _licoresService: LicoresService,private router:Router) { 
    this.activateRoute.params.subscribe(params => {
      this.p = this._licoresService.getLicor(params['id']);
  
      
    

    })
  }

  ngOnInit(): void {
  }
  chg():void{
    //this._licoresService.getLicor(this.activateRoute.snapshot.params.id).nombre = this.nombre;
    //this._licoresService.getLicor(this.activateRoute.snapshot.params.id).bio = this.bio;
    //this._licoresService.getLicor(this.activateRoute.snapshot.params.id).precio = this.precio;
    
    const datosP:any={
  "id":null,
  "name":this.nombre,
  "description":this.bio,
  "price":this.precio,
  "image":null
}

this._licoresService.modificarProducto(datosP,this.p).subscribe(()=>{
  console.log("Modificado con exito");
})
    this.router.navigate(['/licores']);
 
   
  }


}
