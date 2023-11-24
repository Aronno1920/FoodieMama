import { Routes } from '@angular/router';
import { HomePageComponent } from './page/homepage/homepage.component';
import { FoodPageComponent } from './page/foodpage/foodpage.component';
import { CartPageComponent } from './page/cartpage/cartpage.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'search/:searchItem', component: HomePageComponent },
    { path: 'tag/:tag', component: HomePageComponent },
    { path: 'foodpage/:id', component: FoodPageComponent },
    { path: 'cartpage', component: CartPageComponent }
];
