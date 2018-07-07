import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { AuthService } from '../services/auth.service';

const config: SocketIoConfig = { url: 'http://192.168.1.165:3000', options: {} };
@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      tabsHideOnSubPages: true
    }),
    SocketIoModule.forRoot(config),
    NgxErrorsModule,
    AngularFireModule.initializeApp(firebaseConfig.firebase)
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireAuth
  ]
})
export class AppModule {}
