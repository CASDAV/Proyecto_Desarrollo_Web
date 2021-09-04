import { Component, OnInit } from '@angular/core';
import { LicoresService } from '../../servicios/licores.service';
import {Usuario} from '../../servicios/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _licoresService: LicoresService) { }

  ngOnInit(): void {
  }
  tip(){
    if(this._licoresService.getUsuario().tipo=="admin"){
      return true;
    } 
    else{
      return false;
    }
  }
}
