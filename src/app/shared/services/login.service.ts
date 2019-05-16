import {Injectable} from '@angular/core';
import {HttpClientService} from './http-client.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { NgxDhis2HttpClientService } from 'ngx-dhis2-http-client';
import { Observable, from, forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable()
export class LoginService {

  constructor(private http: HttpClientService,
              private httpClient: HttpClientService) {
      // private httpClient: NgxDhis2HttpClientService
  }

}
