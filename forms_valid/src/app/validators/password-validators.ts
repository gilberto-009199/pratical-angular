import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class PasswordValidator {
  
  static strong(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;

      const hasLetters = /[a-zA-Z]+/.test(value);
      const hasNumber = /[0-9]+/.test(value);

      const passwordValid = hasLetters &&  hasNumber;

      return !passwordValid ? { 
        passwordStrength: true,
        noLetters: !hasLetters,
        noNumber: !hasNumber
    } : null;
    };
  }

  static match(passwordControlName: string, confirmControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get(passwordControlName);
      const confirm = control.get(confirmControlName);

      if (!password || !confirm) return null;

      if (confirm.value && confirm.value !== password.value) {
        confirm.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      }

      return null;
    };
  }
}