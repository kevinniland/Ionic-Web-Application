import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsServiceProvider } from '../providers/news-service/news-service';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/Storage';
import { Geolocation } from '@ionic-native/geolocation';
import { GeolocationProvider } from '../providers/geolocation/geolocation';
import { Camera } from '@ionic-native/camera';
import { Calendar } from '@ionic-native/calendar';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // Include news and geolocation provider
    NewsServiceProvider,
    Geolocation,
    GeolocationProvider
  ]
})

export class AppModule {

}