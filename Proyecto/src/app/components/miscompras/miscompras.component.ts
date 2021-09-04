import { Component, OnInit } from '@angular/core';
import { LicoresService } from '../../servicios/licores.service';
import {Licor} from '../../servicios/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-miscompras',
  templateUrl: './miscompras.component.html',
  styleUrls: ['./miscompras.component.css']
})
export class MiscomprasComponent implements OnInit {

  compras: Licor[]=[];

  constructor(private _licoresService: LicoresService,
    private router:Router) { }

  ngOnInit(): void {
    this.compras = this._licoresService.getUsuario().compras;
  }

}
