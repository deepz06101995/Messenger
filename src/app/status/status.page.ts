import { StatusServiceService } from './../status-service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  @ViewChild('hiddenfile') hiddenfileelem : ElementRef;
  public randomdate = new Date();
  public status_arr = [];
  public stories : any = [
    {
      name : "deez_aka_deepak" ,
      img : "assets/images/avatar.svg",
      type : 'default'
    }
  ];

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.pushYourStories();
    console.log('Loading dismissed!');
  }

  constructor(
    private statusservice:StatusServiceService,
    private router:Router,
    private loadingController : LoadingController,
    private route : ActivatedRoute
    ) { }

  public order: string;

  ngOnInit() {
    this.status_arr = this.statusservice.getStatusArr();
    this.stories = this.statusservice.getYourStories();
  }

  onToStatus(){
    this.router.navigate(['status-page'])
  }

  addStory(){
    this.hiddenfileelem.nativeElement.click();
  }

  catchYourStories(type,ind){
    if(type == 'default'){
      this.addStory();
    }else{
      this.router.navigate(['status-page'],{ queryParams: { from: 'your_story',index : ind } });
    }
  }



  private imageSrc: string = '';

  handleInputChange(e) {
    this.presentLoading();
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
  }

  pushYourStories(){
    this.statusservice.updateYourStories(this.imageSrc);
    this.stories = this.statusservice.getYourStories();
  }

}
