import { Component, OnInit } from '@angular/core';
import {Licor} from '../../servicios/product';
import { LicoresService } from '../../servicios/licores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  nombre: string='';
  bio: string='';
  precio: number=0;


  constructor(private _licoresService: LicoresService,private router:Router ) { }

  ngOnInit(): void {
  }
  onSubmite(){
    const licor = new Licor();
    licor.nombre = this.nombre;
    licor.bio = this.bio;
    licor.precio = this.precio;

    this._licoresService.addP(licor);
    this.router.navigate(['/licores']);
  }

}
