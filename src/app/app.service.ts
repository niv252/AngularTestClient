import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService {
  private _serviceUrl = 'http://localhost:62119/api/users';
  constructor(private _http: Http) { }

  getAllUsers(): Observable<string> {
    return this._http.get(this._serviceUrl)
      .map((response: Response) => {
        return response.text();
      });
  }

  addUser(id : number, name : string, personalNumber : string, nationality : string): Observable<Response>{
    let user = {"Id": id, "Name" : name, "PersonalNumber":personalNumber, "Nationality":nationality};
    return this._http.post(this._serviceUrl, user);
  }

  updateUser(id : number, name : string, personalNumber : string, nationality : string): Observable<Response>{
    let user = {"Id": id, "Name": name, "PersonalNumber": personalNumber, "Nationality": nationality};
    return this._http.put(this._serviceUrl+"/"+id, user);
  }
}
