import { ChatServiceService } from './chat-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CallsPipe } from './calls.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, CallsPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ChatServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
