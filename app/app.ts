import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

import { HomePage } from './pages/home/home';


@Component({
  template: `
  <ion-menu (ionDrag)="doStuff()" [content]="myContent">
  <ion-content>
    <ion-list>
      <ion-item>
        <h1 *ngIf="coolbool"> cool</h1>
      </ion-item>
    </ion-list>
  </ion-content>
</ion-menu>
  <ion-nav #myContent [root]="rootPage"></ion-nav>
  `
})
export class MyApp {

  private rootPage: any;
  coolbool: boolean;

  constructor(private platform: Platform) {
    this.rootPage = HomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  ionViewDidEnter() {
    this.coolbool = true;
  }
  
  doStuff() {
    this.coolbool = true;
    //this.coolbool = false;
  }

}

ionicBootstrap(MyApp);
