import { FormGroup } from "@angular/forms";

export const validatorError = (field: string, form: FormGroup) =>{
    const keys = Object.keys(form.get(field)?.errors || {});

    const key = keys[0];

    if (!key) return '';

    switch (key) {
      case 'required':
        return 'É obrigatório';
      case 'email':
        return `E-mail inválido`;
      case 'minlength':
        return `Não contém a quantidade minima de caracteres`;
      default:
        return 'Houve um erro';
    }
  }