import { Component, NgZone } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  hiddenBool: boolean;

  constructor(
    private navCtrl: NavController,
    private zone: NgZone,
    private app: App
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
    //this.app.getRootNav().push(ContactPage);
    
  }

  coolStuff() {
    console.log('fired');
    this.hiddenBool = false;
  }

  alert() {
    console.log('fired');
  }
}
