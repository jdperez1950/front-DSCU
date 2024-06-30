import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path:'auth',
        loadChildren:() => import ('./auth/auth.routes').then(m=>m.AUHT_ROUTES) ,
    },
    {
        path:'',
        component: HomeComponent
    }

];
