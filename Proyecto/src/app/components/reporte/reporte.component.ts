import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LicoresService } from '../../servicios/licores.service';
import {Orden} from '../../servicios/orden'
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  reporte: Orden[] = [];

  constructor(private _licoresService: LicoresService,
    private router:Router) { }

  ngOnInit(): void {
    this.reporte = this._licoresService.getRegistro();
  }

}
