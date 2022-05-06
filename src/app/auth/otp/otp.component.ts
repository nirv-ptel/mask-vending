import { Component, OnInit } from '@angular/core';
import {  FormBuilder,   FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { DataService } from '../../@service/data.service';

@Component({
  selector: 'ngx-otp',
  templateUrl: './otp.component.html',
})
export class NbxOtpComponent implements OnInit{
  intervalId: NodeJS.Timeout;
  time: number = 30;
  timeDisplay: number = 100;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private data: DataService
  ) { }

  optForm: FormGroup;

  ngOnInit() {
    console.warn(this.data.data);
    this.optForm = this._fb.group({
      otp: ['', Validators.required, Validators.pattern, Validators.max]
    });

    this.intervalId = setInterval(() => {
      this.time = this.time - 1;
      this.timeDisplay = this.timeDisplay - 3.3333;
      if(this.time == 0) {
        this._router.navigate(['auth']);
      }
    }, 1000);
    

  }

  NumberOnly(event) {
    if (event.key.length === 1 && ((event.which < 48 || event.which > 57) && (event.which < 96 || event.which > 105))) {
      event.preventDefault();
    }
  }

  onSubmitOpt() {
  
  }
  btn1() {
    this.optForm.get("otp").setValue(this.optForm.get("otp").value + "1");
  }
  btn2() {
    this.optForm.get("otp").setValue(this.optForm.get("otp").value + "2");
  }
  btn3() {
    this.optForm.get("otp").setValue(this.optForm.get("otp").value + "3");
  }
  btn4() {
    this.optForm.get("otp").setValue(this.optForm.get("otp").value + "4");
  }
  btn5() {
    this.optForm.get("otp").setValue(this.optForm.get("otp").value + "5");
  }
  btn6() {
    this.optForm.get("otp").setValue(this.optForm.get("otp").value + "6");
  }
  btn7() {
    this.optForm.get("otp").setValue(this.optForm.get("otp").value + "7");
  }
  btn8() {
    this.optForm.get("otp").setValue(this.optForm.get("otp").value + "8");
  }
  btn9() {
    this.optForm.get("otp").setValue(this.optForm.get("otp").value + "9");
  }
  btn0() {
    this.optForm.get("otp").setValue(this.optForm.get("otp").value + "0");
  }

  btnx() {
    this.optForm.get("otp").setValue(this.optForm.get("otp").value.slice(0, -1));
  }

    
}
