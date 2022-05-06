import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { NgxHomeComponent } from './home/home.component';
import { NgxMobileComponent } from './mobile/mobile.component';
import { NbxOtpComponent } from './otp/otp.component';

const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: 'mobile',
        component: NgxMobileComponent, 
      },
      {
        path: 'otp',
        component: NbxOtpComponent, 
      },
      {
        path: 'home',
        component: NgxHomeComponent, 
      },
      { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxAuthRoutingModule { }
