import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  note: string;

  openClock() {
    this.navCtrl.push("ClockPage");
  }

  openNews() {
    this.navCtrl.push("NewsPage");
  }

  openNotes() {
    this.navCtrl.push("NotesPage");
  }

  openGeolocation() {
    this.navCtrl.push("GeolocationPage");
  }

  openCounter() {
    this.navCtrl.push("WaldoGamePage");
  }

  ionViewWillEnter() {
    this.storage.get("myNote").then((data) => {
      this.note = data;
    }).catch((err) => {
      console.log(err);
    })
  }
}