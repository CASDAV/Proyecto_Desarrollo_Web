import{ RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LicoresComponent } from './components/licores/licores.component';
import { AboutComponent } from './components/about/about.component';
import { TragoComponent } from './components/trago/trago.component';


const APP_ROUTES:Routes = [
{path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'licores', component: LicoresComponent},
{path: 'licores/trago/:id', component: TragoComponent},
{path: '**',pathMatch:'full', redirectTo:'home'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);