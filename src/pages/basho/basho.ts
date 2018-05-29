import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RikishiPage } from '../rikishi/rikishi';
import { TsuppariApiProvider } from '../../providers/tsuppari-api/tsuppari-api';

@IonicPage()
@Component({
  selector: 'page-basho',
  templateUrl: 'basho.html',
})
export class BashoPage {

  public bashos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private tsuppariApi: TsuppariApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BashoPage');
    this.tsuppariApi.getBashos().subscribe(data => {
      this.bashos = data;
    });
  }

  itemTapped($event, basho): void {
    this.navCtrl.push(RikishiPage, basho);
  }

}
