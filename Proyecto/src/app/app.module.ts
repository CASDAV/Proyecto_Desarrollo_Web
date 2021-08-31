import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTING } from './app.routes';




//Servicios

import { LicoresService } from './servicios/licores.service';


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LicoresComponent } from './components/licores/licores.component';
import { AboutComponent } from './components/about/about.component';
import { TragoComponent } from './components/trago/trago.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LicoresComponent,
    AboutComponent,
    TragoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    LicoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
