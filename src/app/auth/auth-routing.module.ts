import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { NgxMobileComponent } from './login/mobile.component';
import { NbxOtpComponent } from './logout/otp.component';

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
        path: '', 
        redirectTo: 'mobile', 
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
