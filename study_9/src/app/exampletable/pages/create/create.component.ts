import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder, private _http: HttpService, private router: Router) { }
  submitForm(): void {
    this._http.addData(this.validateForm.value).subscribe((data: any) => {
      this.router.navigate(['']);
    });
  }



  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, Validators.required],
      age: [null, Validators.required],
      address: [null, Validators.required],
      gender: [null, Validators.required],
      disabled: [false],
    });
  }
}
