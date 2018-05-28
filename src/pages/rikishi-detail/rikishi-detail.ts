import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-rikishi-detail',
  templateUrl: 'rikishi-detail.html',
})
export class RikishiDetailPage {

  public rikishi: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rikishi = this.navParams.data;
    console.log('nav params', this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RikishiDetailPage');
  }

}
