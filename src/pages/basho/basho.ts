import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RikishiPage } from '../rikishi/rikishi';

@IonicPage()
@Component({
  selector: 'page-basho',
  templateUrl: 'basho.html',
})
export class BashoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BashoPage');
  }

  itemTapped(): void {
    this.navCtrl.push(RikishiPage);
  }

}
