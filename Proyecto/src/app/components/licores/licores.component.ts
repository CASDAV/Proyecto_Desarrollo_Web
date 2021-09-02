import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { LicoresService } from '../../servicios/licores.service';
import {Licor} from '../../servicios/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-licores',
  templateUrl: './licores.component.html',
  styleUrls: ['./licores.component.css']
})
export class LicoresComponent implements OnInit {
  

 licores:Licor[]=[];
 
  constructor(private _licoresService: LicoresService,
    private router:Router) {

   }

  ngOnInit(): void {
    this.licores = this._licoresService.getLicores();
  }
  mod(lic:Licor):void{

  }
  onDelete(lic: Licor):void{
    this.licores = this._licoresService.onDelete(lic);
    }


}
