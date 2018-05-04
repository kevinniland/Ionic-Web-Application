import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaldoGamePage } from './waldo-game';

@NgModule({
  declarations: [
    WaldoGamePage,
  ],
  imports: [
    IonicPageModule.forChild(WaldoGamePage),
  ],
})
export class WaldoGamePageModule {}
