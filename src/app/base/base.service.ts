import { IResultHttp } from 'src/interfaces/IResultHttp';
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment';

export abstract class BaseService<T> {
  urlBase: string = '';

  constructor(public url: string, public http: HttpService) {
    this.urlBase = `${environment.url_api}/${this.url}`;
  }

  public GetAll(): Promise<IResultHttp> {
    return this.http.get(this.urlBase);
  }

  public GetById(id: number): Promise<IResultHttp> {
    return this.http.get(`${this.urlBase}/${id}`);
  }

  public post(model: T): Promise<IResultHttp> {
    return this.http.post(this.urlBase, model);
  }

  public delete(id: number): Promise<IResultHttp> {
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}
