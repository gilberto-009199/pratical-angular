import { Component, computed } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

interface ContatoForm{
  nome: FormControl<string>;
  telefone: FormControl<number|null>;
}

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  // Typed form
  formulario0 = new FormGroup<ContatoForm>({
    nome: new FormControl('', {nonNullable: true}),
    telefone: new FormControl(null)
  });

  submeter0(){
    alert(`
      Submetido:
        nome: ${this.formulario0.getRawValue().nome}
        telefone: ${this.formulario0.getRawValue().telefone}
    `);
  }

  formulario1: FormGroup;

  constructor(private fb: FormBuilder){
    this.formulario1 = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  submeter1(){
    if(this.formulario1.valid){
      alert(`
        Submetido:
          nome: ${this.formulario1.getRawValue().nome}
          telefone: ${this.formulario1.getRawValue().telefone}
      `);
    }
  }
  
  formulario2 = new FormControl('', { nonNullable: true });

  // Transforma o fluxo de digitação em um Signal
  texto = toSignal(this.formulario2.valueChanges, { initialValue: '' });

  // Cria um Signal computado que reage ao texto
  restante = computed(() => 100 - this.texto().length);


}
