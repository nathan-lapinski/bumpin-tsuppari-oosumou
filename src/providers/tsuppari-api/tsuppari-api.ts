import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TsuppariApiProvider {
  private baseUrl: string = 'https://bumpin-tsuppari-oosumou-i3.firebaseio.com/';

  constructor(public http: HttpClient) {
  }

  public getBashos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/basho.json`);
  }

  public getBashoData(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/basho-data/${id}.json`);
  }

}
