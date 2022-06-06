import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  myFormList: FormGroup;
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myFormList = this.fb.group({
      fruits: this.fb.array([this.createFruit()]),
    });
  }

  get getFruits(): FormArray {
    return this.myFormList.get("fruits") as FormArray
  }

  addFruit() {
    const fruits = this.myFormList.get('fruits') as FormArray;
    fruits.push(this.createFruit());
  }

  removeFruit(index) {
    const fruits = this.myFormList.get('fruits') as FormArray;
    fruits.removeAt(index);
  }
  disableFruit(index) {
    const fruits = this.myFormList.get('fruits') as FormArray;
    fruits.at(index).disable();
  }

  createFruit() {
    return this.fb.group({
      name: [null, [Validators.required, Validators.minLength(4)]],
      price: [null],
    });
  }
}
