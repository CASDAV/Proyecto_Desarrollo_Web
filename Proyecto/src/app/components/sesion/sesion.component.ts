import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../servicios/usuario';
import { LicoresService } from '../../servicios/licores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  nombre: string='';
  apellido: string='';
  email: string='';
  cont: string='';
  tipo:string='';
  constructor(private _licoresService: LicoresService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmite(){
    const usua = new Usuario();
    usua.nombre = this.nombre;
    usua.apellido = this.apellido;
    usua.email = this.email;
    usua.cont = this.cont;
    usua.tipo = "usuario"

    this._licoresService.addU(usua);
    
    this.router.navigate(['/home']);
  }
}
