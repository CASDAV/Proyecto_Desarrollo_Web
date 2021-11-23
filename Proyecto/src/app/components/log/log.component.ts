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
  verR: string ='';
  constructor(private _licoresService: LicoresService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmite(){
 this.verificar(this.email,this.pass,this.verR);
 
    /*  const us= new Usuario();
    
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
*/
}

verificar(corr:string, contraseña: string, rol:string){
this.email= "";
this.pass="";

  const datosLogin:any ={
"email":corr,
"password": contraseña  
}
const us= new Usuario()

this._licoresService.login(datosLogin).subscribe((resp: any)=>{
  console.log("hola");
  console.log(resp);
  sessionStorage.setItem('token',resp.headers.get('Authorization'));
  sessionStorage.setItem('correo',corr);

this._licoresService.ver(corr).subscribe((r:any)=>{
  console.log(r);
  us.nombre = r.firstName;
  us.apellido = r.lastName;
  us.email = r.email;
  us.cont = r.password;
  rol= r.rol.name; 
  console.log(rol);
   if(rol =="ADMIN"){
     us.tipo = "admin";
   }
   
  //us.tipo = r.RoleDTO.name;

  this._licoresService.joinUsuario(us);
  this.router.navigate(['/home']);
});

  this.router.navigate(['/home']);
})
}

}
