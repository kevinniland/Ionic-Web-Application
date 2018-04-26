import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsServiceProvider {
  constructor(private http: HttpClient) { 

  }

  GetNewsData():Observable<any> {
    return this.http.get("https://newsapi.org/v2/top-headlines?country=ie&apiKey=c6e5d617004147068317c9e20b89e52c");
  }
}
