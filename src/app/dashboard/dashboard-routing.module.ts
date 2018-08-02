import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routes';
// import { AuthGuardService } from '../auth/auth-guard.service';

const routes : Routes =[
  { 
      path: '', 
      component: DashboardComponent,
      children:DashboardRoutes,
      // canActivate:[
      //     AuthGuardService
      // ]
    },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class DashboardRoutingModule { }
