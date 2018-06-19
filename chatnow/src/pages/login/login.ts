import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentModal() {
    const modal = this.modalCtrl.create('login-modal');
    modal.present();
  }

  OnLogin(){
    this.navCtrl.push('tabs');
  }

}
