import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Licor } from 'src/app/servicios/product';
import { LicoresService } from '../../servicios/licores.service';
import {Usuario} from '../../servicios/usuario';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  us = new Usuario();
  producto = new Licor();

  constructor(private activateRoute: ActivatedRoute,
    private _licoresService: LicoresService) { this.activateRoute.params.subscribe(params => {
      this.producto = this._licoresService.getCompra(params['id']);
    })}

  ngOnInit(): void {
  }

}
