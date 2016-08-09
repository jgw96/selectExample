import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  constructor(private navCtrl: NavController) {
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.navCtrl.popToRoot();
    }, 1000);
  }
}
