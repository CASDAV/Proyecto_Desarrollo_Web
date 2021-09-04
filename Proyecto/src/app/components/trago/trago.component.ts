import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LicoresService } from '../../servicios/licores.service';
import {Usuario} from '../../servicios/usuario';
import { Orden } from '../../servicios/orden';


@Component({
  selector: 'app-trago',
  templateUrl: './trago.component.html',
  styles: [
  ]
})
export class TragoComponent implements OnInit {
  us = new Usuario();
  trago: any={};
  orden = new Orden();

  constructor(private activateRoute: ActivatedRoute,
    private _licoresService: LicoresService) { 
    this.activateRoute.params.subscribe(params => {
      this.trago = this._licoresService.getLicor(params['id']);
    })
  }

  ngOnInit(): void {
  }
  tip(){
    this.us = this._licoresService.getUsuario();
    return this.us.tipo;
    }
  realCompra(){
    this.orden.emUsuario = this.us.email;
    this.orden.nProducto = this.trago.nombre;
    this.orden.dProducto = this.trago.bio;
    this.orden.pProducto = this.trago.precio;
    this._licoresService.comprarProducto(this.trago, this.orden);
    alert("Compra realizada")
  }

}
