import { Component, OnInit } from '@angular/core';
import {  FormBuilder,   FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
})
export class NgxHomeComponent implements OnInit {
  intervalId: NodeJS.Timeout;
  time: Date;

  constructor(
    private _router: Router,
  ) { }

  
  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
  start() {
    this._router.navigate(['auth/mobile']);
  }

}
