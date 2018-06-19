import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

@IonicPage({
  name:'home-page'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  nickname = '';

  constructor(public navCtrl: NavController, public socket: Socket) {

  }

  joinChat(){
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.navCtrl.push('chat-room', { nickname: this.nickname });
  }

}
