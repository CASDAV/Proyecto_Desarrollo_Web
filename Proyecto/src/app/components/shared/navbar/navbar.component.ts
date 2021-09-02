import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../../servicios/usuario';
import { LicoresService } from '../../../servicios/licores.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  us = new Usuario();
  constructor(private _licoresService: LicoresService,private router:Router) { }

  ngOnInit(): void {
    this.us = this._licoresService.getUsuario();
  }
  tip(){
  this.us = this._licoresService.getUsuario();
  return this.us.tipo;
  }

  Cerrar(){
    const us = new Usuario();
    us.nombre='';
    us.apellido='';
    us.email='';
    us.cont='';
    us.tipo="invitado";

    this._licoresService.joinUsuario(us);
    this.router.navigate(['/home']);
  }

}
