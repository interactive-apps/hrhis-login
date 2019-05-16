import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpClientService {
  // public APIURL = 'http://197.149.178.106/api/';
  public APIURL = 'https://nsmis.moh.go.tz/dev/api/';
  constructor(private http: Http) {
    this.http = http;
  }

  createAuthorizationHeader() {
    const username = 'tuzo';
    const password = 'TUZO2015';

    const token = btoa(username + ':' + password);

    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + token);

    return headers;
  }

  get(url) {
    const headers: Headers = this.createAuthorizationHeader();
    return this.http.get(this.APIURL + url, {
      headers: headers
    }).map(this.responseHandler()).catch(this.handleError);
  }

  post(url, data, options?) {
    const headers: Headers = this.createAuthorizationHeader();
    return this.http.post(this.APIURL + url, data, {
      headers: headers
    }).map(this.responseHandler()).catch(this.handleError);
  }

  post1(url, data, options?) {
    return this.http.post(this.APIURL + url, data).map(this.responseHandler()).catch(this.handleError);
  }
  put(url, data, options?) {
    const headers: Headers = this.createAuthorizationHeader();
    return this.http.put(this.APIURL + url, data, {
      headers: headers
    }).map(this.responseHandler()).catch(this.handleError);
  }
  delete(url, options?) {
    const headers: Headers = this.createAuthorizationHeader();
    this.createAuthorizationHeader();
    return this.http.delete(this.APIURL + url, {
      headers: headers
    }).map(this.responseHandler()).catch(this.handleError);
  }
  responseHandler() {
    return (res) => {
      try {
        const returnJSON = res.json();
        return returnJSON;
      } catch (e) {
        location.reload();
        return null;
      }
    };
  }

  handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    // let errMsg: string;
    // if (error instanceof Response) {
    //   const body = error.json() || '';
    //   const err = body.error || JSON.stringify(body);
    //   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    // } else {
    //   errMsg = error.message ? error.message : error.toString();
    // }
    return Observable.throw(error);
  }
}
