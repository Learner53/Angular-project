import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DashboardComponent } from '../app/dashboard/dashboard.component'

const routes: Routes = [
    { path: 'products', component: DashboardComponent },
    { path: 'solutions', component: DashboardComponent },
    { path: 'pricing', component: DashboardComponent }
  ];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
