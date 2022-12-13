import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id: any;
  validateForm!: FormGroup;
  data: Data = {}

  constructor(private _http: HttpService, private router: Router, private activeRouter: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, Validators.required],
      age: [null, Validators.required],
      address: [null, Validators.required],
      gender: [null, Validators.required],
      disabled: [false],
    });

    this.id= this.activeRouter.snapshot.params['id'];
   this.getFindById(this.id);

  }

  submitForm(): void {
    debugger;
    let payload = {
      ...this.validateForm.value,
      id:this.id,
    };
    this._http.updataData(payload).subscribe((data: any) => {
      this.router.navigate(['']);
    });
  }
  getFindById(id: any) {
    this._http.getDataById(id).subscribe((data: any) => {
      this.data = data.data;
      this.validateForm.patchValue(this.data);
    });
  }

  cancel(){
    this.router.navigate(['']);
  }
}
