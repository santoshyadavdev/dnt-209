import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export class CustomValidation {

  static nameValidator(name: AbstractControl): ValidationErrors | null {
    const nameValue = name.value as string;

    if (nameValue.includes('test')) {
      return { invalidName: true };
    }
    return null;
  }

  static passwordValidator(form: FormGroup): ValidationErrors | null {
      const password = form.get('password').value as string;
      const confirmPassword = form.get('confirmPassword').value as string;
      if (password !== confirmPassword) {
        return { invalidPassword: true };
      }
      return null;
  }
}
