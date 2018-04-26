import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsServiceProvider } from '../providers/news-service/news-service'; 
import { HomePage } from '../pages/home/home';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})

export class MyApp /*implements OnInit*/ {
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private newsService: NewsServiceProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  articles: any = [];

  ngOnInit() {
    this.newsService.GetNewsData().subscribe(data => {
      this.articles = data.articles;
    })
  }

  rootPage:any = HomePage;
}