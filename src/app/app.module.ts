import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyRikishiPage } from '../pages/my-rikishi/my-rikishi';
import { MatchPage } from '../pages/match/match';
import { RikishiDetailPage } from '../pages/rikishi-detail/rikishi-detail';
import { BashoPage } from '../pages/basho/basho';
import { RikishiPage } from '../pages/rikishi/rikishi';
import { RikishiHomePage } from '../pages/rikishi-home/rikishi-home';
import { RankingsPage } from '../pages/rankings/rankings';
import { TsuppariApiProvider } from '../providers/tsuppari-api/tsuppari-api';

@NgModule({
  declarations: [
    MyApp,
    MyRikishiPage,
    MatchPage,
    RikishiDetailPage,
    BashoPage,
    RikishiPage,
    RikishiHomePage,
    RankingsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyRikishiPage,MatchPage,
    RikishiDetailPage,
    BashoPage,
    RikishiPage,
    RikishiHomePage,
    RankingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TsuppariApiProvider
  ]
})
export class AppModule {}
