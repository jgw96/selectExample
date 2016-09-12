import { Component, NgZone, Input,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { NavController, LoadingController, AlertController, App, PopoverController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'build/pages/home/home.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms 500ms ease-in-out')
      ]),
      transition('* => void', [
        animate('40ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class HomePage {

  state: string;

  constructor(
    private navCtrl: NavController,
    private zone: NgZone,
    private app: App,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private popoverCtrl: PopoverController
  ) {

  };

  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }

  openPopover() {
    let popover = this.popoverCtrl.create(ContactPage);
    popover.present();
  }
}
