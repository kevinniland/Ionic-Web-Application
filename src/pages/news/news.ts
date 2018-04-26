import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
 
export class NewsPage {
  constructor (public navCtrl: NavController, public navParams: NavParams, private news: NewsServiceProvider) {

  }

  newsStories: any = [];


  ionViewDidLoad() {
    this.news.GetNewsData().subscribe(data => {
      this.newsStories = data.articles;
    })
  }
}