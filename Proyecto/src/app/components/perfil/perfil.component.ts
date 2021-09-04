import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LicoresService } from '../../servicios/licores.service';
import {Usuario} from '../../servicios/usuario';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  us = new Usuario();

  constructor(private _licoresService: LicoresService,
    private router:Router) { }

  ngOnInit(): void {
    this.us = this._licoresService.getUsuario();
  }

}
