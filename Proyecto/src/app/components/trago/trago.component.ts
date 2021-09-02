import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LicoresService } from '../../servicios/licores.service';


@Component({
  selector: 'app-trago',
  templateUrl: './trago.component.html',
  styles: [
  ]
})
export class TragoComponent implements OnInit {

trago:any={};

  constructor(private activateRoute: ActivatedRoute,
    private _licoresService: LicoresService) { 
    this.activateRoute.params.subscribe(params => {
      this.trago = this._licoresService.getLicor(params['id']);
    })
  }

  ngOnInit(): void {
  }


}
