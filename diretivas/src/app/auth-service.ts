import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public usuario = signal({
    nome: "gil",
    role: ["USER"]
  })
  


}
