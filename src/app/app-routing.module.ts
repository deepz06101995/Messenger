import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LogginAuthGuard} from './loggin-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'conversation',
    loadChildren: () => import('./conversation/conversation.module').then( m => m.ConversationPageModule),
    canActivate: [LogginAuthGuard],
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule),
    canActivate: [LogginAuthGuard],
  },
  {
    path: 'calls',
    loadChildren: () => import('./calls/calls.module').then( m => m.CallsPageModule),
    canActivate: [LogginAuthGuard],
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule),
    canActivate: [LogginAuthGuard],
  },
  {
    path: 'status-page',
    loadChildren: () => import('./status-page/status-page.module').then( m => m.StatusPagePageModule),
    canActivate: [LogginAuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
