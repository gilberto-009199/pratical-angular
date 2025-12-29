import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { PasswordValidator } from './validators/password-validators';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  formulariosWithValidation: FormGroup;
  formulariosWithValidationWithErrors: FormGroup;
  formulariosWithValidationWithErrorsCustom: FormGroup;

  constructor(
    private fb: FormBuilder
  ){
    
    this.formulariosWithValidation = this.fb.group({
      nome:["", [Validators.required, Validators.minLength(3)]],
      telefone:["", [
        Validators.minLength(9), 
        Validators.pattern(
          /^(\([0-9]+\)[0-9]+|[0-9]+)/
        )
      ]],
      email: ["", [Validators.required, Validators.email]]
    })

    this.formulariosWithValidationWithErrors = this.fb.group({
      nome:["", [Validators.required, Validators.minLength(3)]],
      telefone:["", [
        Validators.minLength(9), 
        Validators.pattern(
          /^(\([0-9]+\)[0-9]+|[0-9]+)/
        )
      ]],
      email: ["", [Validators.required, Validators.email]]
    })

    this.formulariosWithValidationWithErrorsCustom = this.fb.group({
      nome:["", [Validators.required, Validators.minLength(3)]],
      telefone:["", [
        Validators.minLength(9), 
        Validators.pattern(
          /^(\([0-9]+\)[0-9]+|[0-9]+)/
        )
      ]],
      email: ["", [Validators.required, Validators.email]],

      password: ["", [Validators.required, PasswordValidator.strong()]],
      "confirm-password": ["", Validators.required]
    },{
      validators: PasswordValidator.match('password', 'confirm-password')
    })
    
  }

}
