import { Component, input, signal } from '@angular/core';
import { FilhoComponent } from "../filho-component/filho-component";

@Component({
  selector: 'app-pai-component',
  imports: [ FilhoComponent ],
  templateUrl: './pai-component.html',
  styleUrl: './pai-component.css',
})
export class PaiComponent {
  
  mensagemEnviada = signal<string>("Essa e a menssagem do pai para o filho")
  mensagemEnviadaPorDecorator = signal<string>("Essa e uma menssagem do pai para o filho")

}
