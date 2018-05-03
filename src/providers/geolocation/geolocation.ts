import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GeolocationProvider Provider');
  }
}
