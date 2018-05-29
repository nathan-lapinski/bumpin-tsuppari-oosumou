import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RikishiPage } from '../rikishi/rikishi';
import { TsuppariApiProvider } from '../../providers/tsuppari-api/tsuppari-api';

@IonicPage()
@Component({
  selector: 'page-basho',
  templateUrl: 'basho.html',
})
export class BashoPage {

  public bashos: any[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tsuppariApi: TsuppariApiProvider,
              private loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting Basho data'
    });

    loader.present().then(() => {
      this.tsuppariApi.getBashos().subscribe(data => {
        this.bashos = data;
        loader.dismiss();
      });
    });
  }

  itemTapped($event, basho): void {
    this.navCtrl.push(RikishiPage, basho);
  }

}
