import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CONFIG} from '../../config/config';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShopsService {

  constructor(private http: HttpClient) { }

  public getAllShops(): Observable<any> {
    const url = CONFIG.urls.getShops + '?_sort=id&_order=desc';
    return this.http.get(url)
      .map((res: any) => {
        return res;
      });
  }
  public getAShop(id): Observable<any> {
    const url = CONFIG.urls.getShops + '/' + id;
    // Update structutre
    return this.http.get(url)
      .map((res: any) => {
        return res;
      });
  }
  public addNewShop(shopInfo): Observable<any> { // Update structutre
    return this.http.post(CONFIG.urls.getShops, shopInfo)
      .map((res: any) => {
        return res;
      });
  }
}
