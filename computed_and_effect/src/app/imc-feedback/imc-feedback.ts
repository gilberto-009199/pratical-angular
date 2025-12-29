import { Component, computed, effect, input, signal } from '@angular/core';

@Component({
  selector: 'app-imc-feedback',
  imports: [],
  templateUrl: './imc-feedback.html',
  styleUrl: './imc-feedback.css',
})
export class ImcFeedback {
  imc = input<number>(0)
  tmb = input<number>(0)

  classificacao = signal("Sem Dados")

  riscoSaude = computed(() => {
    
    if(this.imc() && this.imc() == 0)return "Insira seus dados para calcular o risco.";
    if(this.tmb() && this.tmb() == 0)return "Insira seus dados para calcular o risco.";

    switch(this.classificacao()) {
      case "Abaixo do peso": 
        return "Risco de fadiga, estresse físico e funções imunológicas comprometidas.";
      
      case "Peso normal": 
        return "Risco mínimo para doenças metabólicas.";
      
      case "Sobrepeso": 
        return "Risco aumentado de diabetes tipo 2, hipertensão e doenças cardiovasculares.";
      
      case "Obesidade Grau I": 
        return "Risco moderado: probabilidade elevada de hipertensão e doenças arteriais.";
      
      case "Obesidade Grau II (Severa)": 
        return "Risco grave: alta predisposição a apneia do sono, problemas articulares e diabetes.";
      
      case "Obesidade Grau III (Mórbida)": 
        return "Risco iminente/muito grave: alto risco de insuficiência cardíaca e limitações severas de mobilidade.";
      
      default: 
        return "Riscos Não Conhecidos";
    }
  });

  constructor(){
    effect(()=>{

      if (this.imc && this.imc() < 18.5)    this.classificacao.set('Abaixo do peso');
      else if (this.imc && this.imc() < 25) this.classificacao.set('Peso normal');
      else if (this.imc && this.imc() < 30) this.classificacao.set('Sobrepeso');
      else if (this.imc && this.imc() < 35) this.classificacao.set('Obesidade Grau I');
      else if (this.imc && this.imc() < 40) this.classificacao.set('Obesidade Grau II (Severa)');
      else  this.classificacao.set('Obesidade Grau III (Mórbida)');

    })
  }
}
