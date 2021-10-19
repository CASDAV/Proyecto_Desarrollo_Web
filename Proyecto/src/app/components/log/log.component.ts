import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../servicios/usuario';
import { LicoresService } from '../../servicios/licores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  email:string = '';
pass: string='';
  constructor(private _licoresService: LicoresService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmite(){
    const us= new Usuario();
    
    let x = this._licoresService.verificar(this.email,this.pass);
 
    if(x == null){
      alert("Usuario inexistente");
    }
    else{
      us.nombre = x.nombre;
      us.apellido = x.apellido;
      us.email = x.email;
      us.cont = x.cont;
      us.tipo = x.tipo;

      this._licoresService.joinUsuario(us);
      this.router.navigate(['/home']);
    }

}
}
