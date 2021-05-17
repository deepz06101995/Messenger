import { ChatInterface } from './chat-interface';
import { CustumhttpserviceService } from './custumhttpservice.service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChatServiceService  {
  public chats_arr;
  constructor(
    private custhttpserv : CustumhttpserviceService,
    private http : HttpClient
  ) {
    this.http.get("/assets/data/chats.json").toPromise().
    then(data =>
      {
        this.chats_final_arr = this.chats_arr = data;
      }
    );
   }

  public currentUserDetails = {name:'',img:'',msg:'',user_id:0};


  public chat_messages = [
    {
      user_id : 1,
      messages : [
        {
          type:"from",
          msg:"Good Morning"
        },
        {
          type:"to",
          msg:"Beaunos dias"
        }
      ]
    },
    {
      user_id : 2,
      messages : [
        {
          type:"from",
          msg:"Good Morning"
        },
        {
          type:"to",
          msg:"Beaunos dias"
        }
      ]
    },
    {
      user_id : 3,
      messages : [
        {
          type:"from",
          msg:"Good Morning"
        },
        {
          type:"to",
          msg:"Beaunos dias"
        }
      ]
    },
    {
      user_id : 4,
      messages : [
        {
          type:"from",
          msg:"Good Morning"
        },
        {
          type:"to",
          msg:"Beaunos dias"
        }
      ]
    },
    {
      user_id : 5,
      messages : [
        {
          type:"from",
          msg:"Good Morning"
        },
        {
          type:"to",
          msg:"Beaunos dias"
        }
      ]
    },
    {
      user_id : 8,
      messages : [
        {
          type:"from",
          msg:"Good Morning"
        },
        {
          type:"to",
          msg:"Beaunos dias"
        }
      ]
    },
    {
      user_id : 6,
      messages : [
        {
          type:"from",
          msg:"Good Morning"
        },
        {
          type:"to",
          msg:"Beaunos dias"
        }
      ]
    },
    {
      user_id : 7,
      messages : [
        {
          type:"from",
          msg:"Good Morning"
        },
        {
          type:"to",
          msg:"Beaunos dias"
        }
      ]
    }
  ];

  getMessages = function(user_id){
    let chat_ar = this.chat_messages.filter( data => data.user_id === user_id);
    return chat_ar[0];
  }

  setMessages = function(data){
    this.chat_messages.push(data);
  }

  getCurrentUserDetail(){
    return this.currentUserDetails;
  }

  setCurrentUserDetail(data){
    this.currentUserDetails = data;
  }

  deleteUser(user_id){
    this.chats_arr = this.chats_arr.filter(val => val.user_id != user_id);
    console.log(this.chats_arr);
  }

  public chats_final_arr : any = [] ;
  getChatDetails (){
    this.chats_final_arr = this.chats_arr;
    return this.chats_final_arr;
  }
}
