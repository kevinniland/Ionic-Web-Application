import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/Storage';

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
  // Variables
  title = "Notes"; // Two-way data binding
  myNote:string;
  savedNote:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

  }

  addNote() {
    this.storage.set("myNote", this.myNote);
    this.storage.get("myNote").then((data) => {
      this.savedNote = data;
    }).catch((err) => {
      console.log(err);
    })
    // Event binding
    alert("Note has been successfully saved");
  }

  ionViewWillEnter() {
    this.storage.get("myNote").then((data) => {
      this.savedNote = data;
    }).catch((err) => {
      console.log(err);
    })
  }
}