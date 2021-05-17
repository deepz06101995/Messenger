import { Router, ActivatedRoute } from '@angular/router';
import { StatusServiceService } from './../status-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.page.html',
  styleUrls: ['./status-page.page.scss'],
})
export class StatusPagePage implements OnInit {
  status_slides = [];
  slideOpts = {
    initialSlide: 0,
    speed: 500,
    autoplay:true,
  };

  catchSlideEnds(){
    this.router.navigate(['/home/status']);
  }
  constructor(
    private statusslidesservice: StatusServiceService,
    private router:Router,
    private route :ActivatedRoute, ) { }

  public from_page_val;
  public index = "";
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.from_page_val = params.from;
        this.index = params.index;
      }
    );
    if(this.from_page_val == "your_story"){
      this.status_slides = this.statusslidesservice.getYourStories(this.index);
      console.log(this.status_slides);
    }else{
      this.status_slides = this.statusslidesservice.getStatusSlides();
    }
  }

}
