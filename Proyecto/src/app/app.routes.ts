import{ RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LicoresComponent } from './components/licores/licores.component';
import { AboutComponent } from './components/about/about.component';
import { TragoComponent } from './components/trago/trago.component';
import { AddComponent } from './components/add/add.component';
import { ChangeComponent } from './components/change/change.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { LogComponent } from './components/log/log.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import {MiscomprasComponent} from './components/miscompras/miscompras.component'
import { DetalleComponent } from './components/detalle/detalle.component';
import { NoencontradaComponent } from './components/noencontrada/noencontrada.component';

const APP_ROUTES:Routes = [
{path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'licores', component: LicoresComponent},
{path: 'licores/trago/:id', component: TragoComponent},
{path: 'add', component: AddComponent},
{path: 'licores/change/:id', component: ChangeComponent},
{path: 'sesion', component: SesionComponent},
{path: 'log', component: LogComponent},
{path: 'perfil', component: PerfilComponent},
{path: 'miscompras', component: MiscomprasComponent},
{path: 'miscompras/detalle/:id', component: DetalleComponent},
{path: '**',pathMatch:'full', component: NoencontradaComponent}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);