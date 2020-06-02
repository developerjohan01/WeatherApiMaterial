import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'forecast-list',
    loadChildren: () => import('./forecast-list/forecast-list.module').then( m => m.ForecastListModule)
  },
  {
    path: 'forecast-details',
    loadChildren: () => import('./forecast-details/forecast-details.module').then( m => m.ForecastDetailsModule)
  },
  {
    path: '',
    redirectTo: 'forecast-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
