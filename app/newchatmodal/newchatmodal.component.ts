import { Component } from '@angular/core';
import {ModalController} from  '@ionic/angular';
@Component({
  selector: 'app-newchatmodal',
  templateUrl: './newchatmodal.component.html',
  styleUrls: ['./newchatmodal.component.scss'],
})
export class NewchatmodalComponent  {

  constructor(private modalController: ModalController) { }

  public dismissModals(){
    this.modalController.dismiss('','cancelled');
  }

  createNewChat(name,number,msg){
    this.modalController.dismiss({name:name,number:number,msg:msg},'success');
  }

}
