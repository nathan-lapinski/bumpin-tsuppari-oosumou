import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyRikishiPage } from '../pages/my-rikishi/my-rikishi';
import { MatchPage } from '../pages/match/match';
import { RikishiDetailPage } from '../pages/rikishi-detail/rikishi-detail';
import { BashoPage } from '../pages/basho/basho';
import { RikishiPage } from '../pages/rikishi/rikishi';

@NgModule({
  declarations: [
    MyApp,
    MyRikishiPage,
    MatchPage,
    RikishiDetailPage,
    BashoPage,
    RikishiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyRikishiPage,MatchPage,
    RikishiDetailPage,
    BashoPage,
    RikishiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
