import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/crud', pathMatch: 'full' },
  {
    path:'',
    loadChildren:'./account/account.module#AccountModule'
  },
  {
    path:'crud',
    loadChildren:'./crud/crud.module#CRUDModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
