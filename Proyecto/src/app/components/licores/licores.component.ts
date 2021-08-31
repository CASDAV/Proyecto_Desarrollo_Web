import { Component, OnInit } from '@angular/core';
import { LicoresService, Licor } from '../../servicios/licores.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-licores',
  templateUrl: './licores.component.html',
  styleUrls: ['./licores.component.css']
})
export class LicoresComponent implements OnInit {
 licores:Licor[]=[];
  constructor(private _licoresService: LicoresService,
    private router:Router) {

   }

  ngOnInit(): void {
this.licores = this._licoresService.getLicores();
  }

  vert(idx:number){
    this.router.navigate(['/trago',idx]);
  }

}
