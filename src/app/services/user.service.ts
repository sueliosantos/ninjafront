import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpService } from './http.service';
import { environment } from './../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { IResultHttp } from 'src/interfaces/IResultHttp';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<any> {
  private loginSubject = new Subject<boolean>();

  constructor(public override http: HttpService) {
    super('users', http);
  }

  login(email: string, senha: string): Promise<IResultHttp> {
    console.log('login', email, senha);
    return this.http.post(`${environment.url_api}/users/auth`, {
      email,
      senha,
    });
  }

  configureLogin(o: any): void {
    const { token, user } = o.data;
    localStorage.setItem('getmestres:token', token);
    localStorage.setItem('getmestres:user', JSON.stringify(user));
    this.loginSubject.next(this.isStaticLogged);
  }

  get isLogged(): Observable<boolean> {
    return this.loginSubject.asObservable();
  }
  get isStaticLogged(): boolean {
    return !!localStorage.getItem('getmestres:token');
  }
}
