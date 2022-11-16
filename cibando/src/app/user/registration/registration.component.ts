import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './customValidator';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/),Validators.required]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl('',[Validators.requiredTrue])
  },
  [CustomValidators.MatchValidator('password','ripetiPassword')]
  )

  get convalidaPassword(){
    return(this.form.getError('mismatch') && this.form.get('ripetiPassword').touched)
  }
  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(form){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.form);
  }
}
