import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient: HttpClient) { }

  getTableData(): Observable<any> {
    const url1 = `https://dummyjson.com/products`;
    const url2= `http://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json`;
    return this.httpClient.get(url1);
  }
}
