import { ChatInterface } from './chat-interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustumhttpserviceService {

  constructor(private http : HttpClient) { }


  getChatsArray() {
    this.http.get("/assets/data/chats.json").toPromise().
    then(data =>
      {
        return data;
        console.log(data);
      }
    ).catch((err) => {
      console.log(err);
    });
  }
}
