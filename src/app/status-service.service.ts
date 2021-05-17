import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusServiceService {

  public statusslides = [
    {urls:"assets/status/status1.jpeg"},
    {urls:"assets/status/status2.jpeg"},
    {urls:"assets/status/status3.jpeg"},
    {urls:"assets/status/status4.jpeg"},
    {urls:"assets/status/status5.jpeg"},
    {urls:"assets/status/status6.jpeg"},
  ];

  public status_arr : any = [
    {
      name:"Yoda",
      dates:"2021-01-01 11:02:00",
      status_url:"assets/status/status1.jpg",
      type: "picture",
      img:"assets/images/avatar-yoda.png",
    },
    {
      name:"Anikken Skywalker",
      dates:"2021-01-01 12:42:00",
      status_url:"assets/status/vidstatus1.jpg",
      type: "video",
      img:"assets/images/avatar-ben.png",
    },
    {
      name:"Rey",
      dates:"2021-01-01 14:24:00",
      status_url:"assets/status/status2.jpg",
      type: "picture",
      img:"assets/images/avatar-rey.png",
    },
    {
      name:"Leia",
      dates:"2021-01-01 16:32:00",
      status_url:"assets/status/status3.jpg",
      type: "picture",
      img:"assets/images/avatar-leia.png",
    },
    {
      name:"Han Solo",
      dates:"2021-01-01 03:45:00",
      status_url:"assets/status/status4.jpg",
      type: "picture",
      img:"assets/images/avatar-han.png",
    },
  ];


  public your_stories = [
    {
      img : "assets/images/avatar.svg",
      type : 'default'
    }
  ];

  getYourStories(ind = ''){
    if(ind != ''){
      return [{urls:this.your_stories[ind].img}];
    }else{
      return this.your_stories;
    }
  }

  constructor() { }

  getStatusArr(){
    return this.status_arr;
  }
  getStatusSlides(){
    return this.statusslides;
  }
  updateYourStories(img){
    this.your_stories.push(
      {
        img : img,
        type : 'story'
      }
    );
  }
}
