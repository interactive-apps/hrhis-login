import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, from, forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as _ from 'lodash';
import { appConfig } from 'src/assets/config/config';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  getLoginAccess(userInfo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      'Accept': '*/*' ,
      'Access-Control-Allow-Origin': appConfig.url
      })
    };
    // const url = appConfig.url + 'auth/login';
    const url = '../auth/login';
    return this.httpClient.post(url, userInfo, httpOptions);
  }

}
