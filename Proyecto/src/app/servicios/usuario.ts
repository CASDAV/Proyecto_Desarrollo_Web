import {Licor} from './product'

export class Usuario{
    
    nombre: string='';
    apellido: string='';
    email: string='';
    cont: string='';
    tipo:string="invitado";

    compras: Licor[]=[];

}