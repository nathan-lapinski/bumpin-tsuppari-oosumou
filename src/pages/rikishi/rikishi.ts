import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RikishiHomePage } from '../rikishi-home/rikishi-home';
import { TsuppariApiProvider } from '../../providers/tsuppari-api/tsuppari-api';

@Component({
  selector: 'page-rikishi',
  templateUrl: 'rikishi.html',
})
export class RikishiPage {

  public rikishis = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tsuppariApi: TsuppariApiProvider) {
  }

  ionViewDidLoad() {
    const currentBasho: string = this.navParams.data.id;
    console.log(currentBasho);
    this.tsuppariApi.getBashoData(currentBasho).subscribe(data => {
      console.log(data);
      this.rikishis = data.rikishi;
    });
  }

  itemTapped($event, rikishi): void {
    this.navCtrl.push(RikishiHomePage, rikishi);
  }

}
