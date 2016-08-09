import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  constructor(private navCtrl: NavController) {
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.navCtrl.push(AboutPage);
    }, 1000);
  }
}
