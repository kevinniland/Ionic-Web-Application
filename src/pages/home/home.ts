import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/Storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';

  constructor(public navCtrl: NavController, private storage: Storage, private auth: AuthServiceProvider) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
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

  ionViewWillEnter() {
    this.storage.get("myNote").then((data) => {
      this.note = data;
    }).catch((err) => {
      console.log(err);
    })
  }
}