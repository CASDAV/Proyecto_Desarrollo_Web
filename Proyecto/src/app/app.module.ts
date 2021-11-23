import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTING } from './app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Interceptors
import { AuthInterceptorService } from "./AuthInterceptorService";



//Servicios

import { LicoresService } from './servicios/licores.service';



//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LicoresComponent } from './components/licores/licores.component';
import { AboutComponent } from './components/about/about.component';
import { TragoComponent } from './components/trago/trago.component';
import { AddComponent } from './components/add/add.component';
import { FormsModule } from '@angular/forms';
import { ChangeComponent } from './components/change/change.component';
import { LogComponent } from './components/log/log.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MiscomprasComponent } from './components/miscompras/miscompras.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { NoencontradaComponent } from './components/noencontrada/noencontrada.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LicoresComponent,
    AboutComponent,
    TragoComponent,
    AddComponent,
    ChangeComponent,
    LogComponent,
    SesionComponent,
    PerfilComponent,
    MiscomprasComponent,
    DetalleComponent,
    NoencontradaComponent,
    ReporteComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LicoresService,
    AuthInterceptorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
