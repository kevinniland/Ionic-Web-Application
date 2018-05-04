// Imports
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/Storage';

@IonicPage()
@Component({
  selector: 'page-waldo-game',
  templateUrl: 'waldo-game.html',
})
export class WaldoGamePage {
  // Varaibles
  title = 'Counter';
  numberOfTimes = 0;
  hidden = true;
  option: string;
  savedOption: string

  constructor(private storage:Storage, public navCtrl: NavController, public navParams: NavParams) {

  }

  // Counts number of times button has been pressed
  count() {
    this.numberOfTimes++;
  }

  // Hides/unhides the activity options
  options() {
    if (this.hidden == true) {
      this.hidden = false;
    }
    else {
      this.hidden = true;
    }
  }

  // Saves the selected option
  saveOptions() {
    this.storage.set("option", this.option);
    this.storage.get("option").then((data) => {
      this.savedOption = data;
    }).catch((err) => {
      console.log(err);
    })
  }

  // Gets the selected option from storage
  ionViewWillEnter() {
    this.storage.get("option").then((data) => {
      this.savedOption = data;
    }).catch((err) => {
      console.log(err);
    })
  }
}