import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  navigate(): void {
    this.navCtrl.pop();
  }

}
