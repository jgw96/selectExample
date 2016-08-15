import { Component, NgZone } from '@angular/core';
import { NavController, LoadingController, App } from 'ionic-angular';

import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  hiddenBool: boolean;
  loader: any;

  constructor(
    private navCtrl: NavController,
    private zone: NgZone,
    private app: App,
    private loadingCtrl: LoadingController
  ) {
    this.zone.onUnstable.subscribe(() => {
      console.log('zone enter');
    });

    this.zone.onStable.subscribe(() => {
      console.log('zone leave');
    });
  };

  ionViewDidEnter() {
    this.hiddenBool = true;
    setTimeout(() => {
      this.loader = this.loadingCtrl.create({
        content: 'loading...'
      });
      this.loader.present();
    }, 500);

    setTimeout(() => {
      this.loader.dismiss().then(() => {
        this.navCtrl.push(ContactPage);
      })
    }, 3000);
    
  }

  coolStuff() {
    console.log('fired');
    this.hiddenBool = false;
  }

  alert() {
  }
}
