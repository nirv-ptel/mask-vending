import { Component, OnInit, ViewChild } from '@angular/core';
import {  FormBuilder,   FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { DataService } from '../../@service/data.service';
import { NbxOtpComponent } from '../otp/otp.component';

@Component({
  selector: 'ngx-mobile',
  templateUrl: './mobile.component.html',
})
export class NgxMobileComponent implements OnInit {
  intervalId: NodeJS.Timeout;
  time: number = 0;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private data: DataService
  ) { }

  @ViewChild(NbxOtpComponent) child;

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this._fb.group({
      mobile: ['', Validators.required, Validators.pattern, Validators.max]
    });

    this.intervalId = setInterval(() => {
      this.time = this.time + 1;
      if(this.time == 30) {
        this._router.navigate(['auth']);
      }
    }, 1000);

    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover',()=> this.reset());
    document.body.addEventListener('mouseout',() => this.reset());
    document.body.addEventListener('keydown',() => this.reset());
    document.body.addEventListener('keyup',() => this.reset());
    document.body.addEventListener('keypress',() => this.reset());
    
  }
  reset(): any {
    this.time = 0;
  }

  NumberOnly(event) {
    if (event.key.length === 1 && ((event.which < 48 || event.which > 57) && (event.which < 96 || event.which > 105))) {
      event.preventDefault();
    }
  }

  login() {
    this.data.data = this.loginForm.value.mobile;
    this._router.navigate(['auth/otp']);
  }
  btn1() {
    this.loginForm.get("mobile").setValue(this.loginForm.get("mobile").value + "1");
  }
  btn2() {
    this.loginForm.get("mobile").setValue(this.loginForm.get("mobile").value + "2");
  }
  btn3() {
    this.loginForm.get("mobile").setValue(this.loginForm.get("mobile").value + "3");
  }
  btn4() {
    this.loginForm.get("mobile").setValue(this.loginForm.get("mobile").value + "4");
  }
  btn5() {
    this.loginForm.get("mobile").setValue(this.loginForm.get("mobile").value + "5");
  }
  btn6() {
    this.loginForm.get("mobile").setValue(this.loginForm.get("mobile").value + "6");
  }
  btn7() {
    this.loginForm.get("mobile").setValue(this.loginForm.get("mobile").value + "7");
  }
  btn8() {
    this.loginForm.get("mobile").setValue(this.loginForm.get("mobile").value + "8");
  }
  btn9() {
    this.loginForm.get("mobile").setValue(this.loginForm.get("mobile").value + "9");
  }
  btn0() {
    this.loginForm.get("mobile").setValue(this.loginForm.get("mobile").value + "0");
  }

  btnx() {
    this.loginForm.get("mobile").setValue(this.loginForm.get("mobile").value.slice(0, -1));
  }

}
