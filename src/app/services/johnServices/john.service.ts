import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JohnService {
  constructor(private http: HttpClient) {}

  private getChildUrl = 'http://api.shield.kaisens.fr/api/users/john/childs/';
  private JohnUrl = 'http://api.shield.kaisens.fr/api/users/john/';
  private patchChilsUrl = 'http://api.shield.kaisens.fr/api/childs/8/';

  getChilds() {
    return this.http.get(`${this.getChildUrl}`);
  }

  updateJohn(john: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put(`${this.JohnUrl}`, john, httpOptions);
  }

  getJohnProfile() {
    return this.http.get(`${this.JohnUrl}`);
  }

  patchChild(child: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.patch(`${this.patchChilsUrl}`, child, httpOptions);
  }

  getOneChild() {
    return this.http.get(`${this.patchChilsUrl}`);
  }
}
