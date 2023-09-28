import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface UserInfo{
  ID: string;
  Matricula: string;
  Nome: string;
  Curso: string;
  Senha: String;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
private url='http://localhost/php/Usuarios.php'
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[UserInfo]>(this.url);
  }
}
