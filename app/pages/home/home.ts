import {Component, NgZone} from '@angular/core';
import {NavController, ToastController, App, AlertController} from 'ionic-angular';

import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  items: any[];
  coolbool: boolean;

  constructor(private navCtrl: NavController, private app: App, private alertCtrl: AlertController, private zone: NgZone) {
    this.items = [];
  }

  ionViewLoaded() {
    console.log(Date.now());
  }

  ionViewDidEnter() {
    this.coolbool = true;
  }

  pushPage() {
    this.navCtrl.push(ContactPage);
  }

  toggleStep() {
    console.log('fired');
    this.zone.run(() => {
      this.coolbool = false;
    });
  }
}
