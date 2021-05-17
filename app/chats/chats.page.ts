import { LordPipe } from './../lord.pipe';
import { NewchatmodalComponent } from './../newchatmodal/newchatmodal.component';
import { ChatServiceService } from './../chat-service.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import {ModalController} from  '@ionic/angular';
import { ActivatedRoute } from  '@angular/router';
import {InteractionServiceService} from './../interaction-service.service';
@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  public chat_array = [];
  public current_tab = '';
  constructor(
    private interactionservice:InteractionServiceService,
    private route:ActivatedRoute,
    private modalController: ModalController,private chatservice : ChatServiceService,private actionSheetController : ActionSheetController,private router : Router) {
    this.current_tab = "chat";
  }

  goToConversation(data){
    this.chatservice.setCurrentUserDetail(data);
    this.router.navigate(['conversation']);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: NewchatmodalComponent,
      cssClass: 'my-custom-class'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if(data != ''){
      this.chat_array.unshift({user_id:this.chat_array.length+1,msg:data.msg,"name":data.name,"img":"assets/images/avatar.svg"});
      this.chatservice.setMessages({
        user_id : this.chat_array.length,
        messages : [
          {
            type:"to",
            msg: data.msg
          }
        ]
      });
    }
  }

  ngOnInit() {
    this.interactionservice.homeclickobs.subscribe(
      msg => {
        if(msg == 'open_action_page'){
            this.presentModal();
        }else if(msg == 'user_deleted'){
          this.chat_array = this.chatservice.getChatDetails();
        }
      }
    );
  }

  ionViewWillEnter(){
    setTimeout(()=>{
      this.chat_array = this.chatservice.getChatDetails();
    }, 3000);
  }

}
