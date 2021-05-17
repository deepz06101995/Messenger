import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionServiceService {

  private homeclick = new Subject();
  homeclickobs = this.homeclick.asObservable();
  constructor() { }

  openHomeAction(msg){
    this.homeclick.next(msg);
  }
}
