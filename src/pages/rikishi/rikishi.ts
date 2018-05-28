import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RikishiDetailPage } from '../rikishi-detail/rikishi-detail';

@Component({
  selector: 'page-rikishi',
  templateUrl: 'rikishi.html',
})
export class RikishiPage {

  public rikishis = [
    { id: 1, name: 'Hakuhou' },
    { id: 1, name: 'Kakuryuu' },
    { id: 1, name: 'Kisenosato' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RikishiPage');
  }

  itemTapped($event, rikishi): void {
    this.navCtrl.push(RikishiDetailPage, rikishi);
  }

}
