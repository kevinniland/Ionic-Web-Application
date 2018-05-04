import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/Storage';

@IonicPage()
@Component({
  selector: 'page-waldo-game',
  templateUrl: 'waldo-game.html',
})
export class WaldoGamePage {
  title = 'Counter';
  numberOfTimes = 0;
  hidden = true;
  option: string;
  savedOption: string

  constructor(private storage:Storage, public navCtrl: NavController, public navParams: NavParams) {

  }

  count() {
    this.numberOfTimes++;
  }

  options() {
    if (this.hidden == true) {
      this.hidden = false;
    }
    else {
      this.hidden = true;
    }
  }

  saveOptions() {
    this.storage.set("option", this.option);
    this.storage.get("option").then((data) => {
      this.savedOption = data;
    }).catch((err) => {
      console.log(err);
    })
  }

  ionViewWillEnter() {
    this.storage.get("option").then((data) => {
      this.savedOption = data;
    }).catch((err) => {
      console.log(err);
    })
  }
}