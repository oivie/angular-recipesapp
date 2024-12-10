import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchMealComponent } from './pages/search-meal/search-meal.component';
import { NutritionAnalysisComponent } from './pages/nutrition-analysis/nutrition-analysis.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'search-meal', component: SearchMealComponent },
    { path: 'nutrition-analysis', component: NutritionAnalysisComponent },
    { path: 'form', component: FormComponent },
];



export const AppRoutingModule = RouterModule.forRoot(routes);
