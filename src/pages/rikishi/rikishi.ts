import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RikishiDetailPage } from '../rikishi-detail/rikishi-detail';

@Component({
  selector: 'page-rikishi',
  templateUrl: 'rikishi.html',
})
export class RikishiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RikishiPage');
  }

  itemTapped(): void {
    this.navCtrl.push(RikishiDetailPage);
  }

}
