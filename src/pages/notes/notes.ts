import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/Storage';

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
  title = "Notes"; // Data binding in progress
  myNote:string;
  savedNote:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

  }

  ionDidViewLoad() {
    console.log('ionDidViewLoad NotePage'); 
  }

  addNote() {
    this.storage.set("myNote", this.myNote);
    this.storage.get("myNote").then((data) => {
      this.savedNote = data;
    }).catch((err) => {
      console.log(err);
    })
  }

  ionViewWillEnter() {
    this.storage.get("myNote").then((data) => {
      this.savedNote = data;
    }).catch((err) => {
      console.log(err);
    })
  }
}