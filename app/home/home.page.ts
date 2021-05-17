import { UserAuthenticationService } from './../user-authentication.service';
import { InteractionServiceService } from './../interaction-service.service';
import { NewchatmodalComponent } from './../newchatmodal/newchatmodal.component';
import { ChatServiceService } from './../chat-service.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import {ModalController} from  '@ionic/angular';
import { ActivatedRoute } from  '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public chat_array = [];
  public current_user_details = {user_name:"",user_password:""};
  public current_tab = '';
  constructor(
    private interactionservice:InteractionServiceService,
    private route:ActivatedRoute,
    private modalController: ModalController,
    private chatservice : ChatServiceService,
    private actionSheetController : ActionSheetController,
    private router : Router,
    private userauth :UserAuthenticationService,
    private menu : MenuController) {
    this.current_tab = "chat";
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'New Chat',
        role: 'destructive',
        icon: 'chatbubbles-outline',
        handler: () => {
          // this.presentModal();
          this.interactionservice.openHomeAction('open_action_page');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  ngOnInit() {
    this.router.navigate(['home/chats']);
    this.menu.enable(true, 'sidemenu');
    this.current_user_details = this.userauth.getUserDetail();
    console.log(this.current_user_details)
  }


  logOutUser(){
    this.userauth.logOutUser();
    this.router.navigate(['login'])
  }

  openSideMenu(){
    this.menu.open('sidemenu');
  }


  goToStatus(){
    this.router.navigate(['home/status']);
  }
  goToCalls(){
    this.router.navigate(['home/calls']);
  }
  goTochats(){
    this.router.navigate(['home/chats']);
  }

  ionViewWillEnter(){
    console.log("reduuyasgfdau");
  }



}
