import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BashoPage } from '../basho/basho';

@Component({
    selector: 'page-my-rikishi',
    templateUrl: 'my-rikishi.html'
})
export class MyRikishiPage {
    constructor(private nav: NavController) {}

    goToBasho(): void {
        this.nav.push(BashoPage);
    }
}