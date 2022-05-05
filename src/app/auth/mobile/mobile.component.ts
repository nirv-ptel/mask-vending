import { Component, OnInit } from '@angular/core';
import {  FormBuilder,   FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-login',
  templateUrl: './mobile.component.html',
})
export class NgxMobileComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private toastrService: NbToastrService
  ) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this._fb.group({
      phoneno: ['', Validators.required, Validators.pattern, Validators.max]
    });
  }

  NumberOnly(event) {
    if (event.key.length === 1 && ((event.which < 48 || event.which > 57) && (event.which < 96 || event.which > 105))) {
      event.preventDefault();
    }
  }

  login() {
  
  }
  btn1() {
    this.loginForm.get("phoneno").setValue(this.loginForm.get("phoneno").value + "1");
  }
  btn2() {
    this.loginForm.get("phoneno").setValue(this.loginForm.get("phoneno").value + "2");
  }
  btn3() {
    this.loginForm.get("phoneno").setValue(this.loginForm.get("phoneno").value + "3");
  }
  btn4() {
    this.loginForm.get("phoneno").setValue(this.loginForm.get("phoneno").value + "4");
  }
  btn5() {
    this.loginForm.get("phoneno").setValue(this.loginForm.get("phoneno").value + "5");
  }
  btn6() {
    this.loginForm.get("phoneno").setValue(this.loginForm.get("phoneno").value + "6");
  }
  btn7() {
    this.loginForm.get("phoneno").setValue(this.loginForm.get("phoneno").value + "7");
  }
  btn8() {
    this.loginForm.get("phoneno").setValue(this.loginForm.get("phoneno").value + "8");
  }
  btn9() {
    this.loginForm.get("phoneno").setValue(this.loginForm.get("phoneno").value + "9");
  }
  btn0() {
    this.loginForm.get("phoneno").setValue(this.loginForm.get("phoneno").value + "0");
  }

  btnx() {
    this.loginForm.get("phoneno").setValue(this.loginForm.get("phoneno").value.slice(0, -1));
  }

}
