import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RikishiDetailPage } from '../rikishi-detail/rikishi-detail';
import { RankingsPage } from '../rankings/rankings';

@Component({
  selector: 'page-rikishi-home',
  templateUrl: 'rikishi-home.html',
})
export class RikishiHomePage {
  public rikishi: any = {};
  public rikishiDetailTab = RikishiDetailPage;
  public rankingsTab = RankingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rikishi = navParams;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RikishiHomePage');
  }

  goHome(): void {
    //this.navCtrl.push(MyRikishiPage);
    this.navCtrl.popToRoot();
  }
}
