import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {LogginAuthGuard} from './../loggin-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [LogginAuthGuard],
    children : [
      {
        path: 'chats',
        loadChildren: () => import('../chats/chats.module').then( m => m.ChatsPageModule)
      },
      {
        path: 'status',
        loadChildren: () => import('../status/status.module').then( m => m.StatusPageModule)
      },
      {
        path: 'calls',
        loadChildren: () => import('../calls/calls.module').then( m => m.CallsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
