import { Directive, effect, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from './auth-service';

@Directive({
  selector: '[appHasRole]',
})
export class HasRole {


  private role: string = "USER";

  @Input() set appHasRole(role: string) {
    this.role = role;
  }

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    effect(() => {
      this.authService.usuario();
      this.verificarPermissao()
    });
  }


  private verificarPermissao() {
    const user = this.authService.usuario();
    
    const temPermissao = user && ~user.role.indexOf(this.role);

    // Limpa o que estiver lá primeiro
    this.viewContainer.clear(); 

    if (temPermissao) {
      // Se tiver a role, renderiza o HTML
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}

