import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exampletable-form',
  templateUrl: './exampletable-form.component.html',
  styles: [
    `
      [nz-form] {
        max-width: 600px;
      }
    `
  ]
})
export class ExampletableFormComponent implements OnInit {
  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
