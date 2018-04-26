import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/Storage';

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
  note:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

  }

  addNote() {
    this.storage.get("myNote").then((data) => {
      this.note = data;
    }).catch((err) => {
      console.log(err);
    })
  }
}
