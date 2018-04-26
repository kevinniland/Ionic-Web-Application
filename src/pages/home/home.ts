import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  openClock() {
    this.navCtrl.push("ClockPage");
  }

  openNews() {
    this.navCtrl.push("NewsPage");
  }

  openNotes() {
    this.navCtrl.push("NotesPage");
  }
}
