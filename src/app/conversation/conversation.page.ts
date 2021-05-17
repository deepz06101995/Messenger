import { ActionSheetController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from './../chat-service.service';
import { Router } from '@angular/router';
import { InteractionServiceService } from '../interaction-service.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {
  public CurrentUserDetail = {name:'',img:'',msg:'',user_id:0};
  constructor(private interactionservice:InteractionServiceService,private actionSheetController : ActionSheetController,private chatservice : ChatServiceService, private router : Router) { }
  public chatMessages = [];
  public typed_msg = '';
  ngOnInit() {
    this.CurrentUserDetail = this.chatservice.getCurrentUserDetail();
    this.chatMessages = this.chatservice.getMessages(this.CurrentUserDetail.user_id).messages;
    console.log(this.chatMessages);
  }

  goBackChat(){
    this.router.navigate(['/home']);
  }

  sendMessage(){
    if(this.typed_msg == ''){
      return false;
    }
    this.chatMessages.push({
      type:"to",
      msg:this.typed_msg
    });
    this.typed_msg = '';
  }

  deleteUserChat(){
    this.chatservice.deleteUser(this.CurrentUserDetail.user_id);
    this.router.navigate(['/home']);
    this.interactionservice.openHomeAction('user_deleted');
  }

  async converationAction() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete Conversation',
        role: 'destructive',
        icon: 'trash-sharp',
        handler: () => {
          this.deleteUserChat();
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

}
