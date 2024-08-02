import { Routes } from '@angular/router';
import { HOMEComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CONTACTComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [
    {path:"",component:HOMEComponent},
    {path:'Products',component:ProductComponent},
    {path:'ContactUs',component:CONTACTComponent},
    {path:'AboutUs',component:AboutComponent},
   {path:'Products/:id',component:SingleComponent}
];
