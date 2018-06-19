import { Socket } from 'ng-socket-io';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable} from 'rxjs/Observable';

@IonicPage({
  name: 'chat-room'
})
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {
  messages = [];
  nickname = '';
  message = '';
  
  constructor( public toast: ToastController, public socket: Socket, public navCtrl: NavController, public navParams: NavParams) {
    this.nickname = this.navParams.get('nickname');

    this.getMessages().subscribe(message => {
      this.messages.push(message);
      console.log(this.messages);
    });

    this.getUsers().subscribe(data => {
      let user = data['user'];
      if(data['event'] === 'left'){
        this.showToast('user left: '+ user);
      }else{
        this.showToast('user joined: '+ user);
      }
    });
  }

  getUsers():Observable<any> {
    let observable = new Observable((observer: any) => {
      this.socket.on('user-changed', data => {
        observer.next(data);
      })
    });
    return observable;
  }

  sendMessage() {
    this.socket.emit('add-message', {text: this.message});
    this.message = '';
  }

  getMessages():Observable<any> {
    let observable = new Observable((observer: any) => {
      this.socket.on('message', data => {
        observer.next(data);
      })
    });
    return observable;
  }

  ionViewWillLeave(){
   this.socket.disconnect();
  }

  showToast(msg) {
    let toast = this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
