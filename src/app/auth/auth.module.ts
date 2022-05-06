import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbIconModule, NbInputModule, NbProgressBarModule } from '@nebular/theme';

import { NgxMobileComponent } from './mobile/mobile.component'; 
import { NbxOtpComponent } from './otp/otp.component';
import { NgxHomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbIconModule,
    NbAuthModule,
    ReactiveFormsModule,
    NbProgressBarModule
  ],
  declarations: [
    NgxMobileComponent,
    NbxOtpComponent,
    NgxHomeComponent
  ],
})
export class NgxAuthModule {
}
