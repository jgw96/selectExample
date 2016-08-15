import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  loader: any;
  constructor(private navCtrl: NavController, private loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.loader = this.loadingCtrl.create({
        content: 'loading...'
      });
      this.loader.present();
    }, 500);

    setTimeout(() => {
      this.loader.dismiss().then(() => {
        this.navCtrl.pop();
      });
    }, 3000);
  }
}
