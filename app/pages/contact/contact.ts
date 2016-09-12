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

  }

  open() {
    console.log('whats up');
  }
}
