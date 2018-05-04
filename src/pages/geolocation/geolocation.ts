import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})

export class GeolocationPage {
  // Variables
  latitudePos: number;
  longitudePos: number;
  hidden = true;
  title = 'Geolocation';

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private geolocation: Geolocation) {
    platform.ready().then(() => {
      geolocation.getCurrentPosition().then(pos => {
        // Saves latitude/longitude to variables
        this.latitudePos = pos.coords.latitude;
        this.longitudePos = pos.coords.longitude;
      });

      const watch = geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      watch.unsubscribe();
    })
  }

  // Hides/unhihdes geolocation
  printGeolocation() {
    if (this.hidden == true) {
      this.hidden = false;
    }
    else {
      this.hidden = true;
    }
  }
}