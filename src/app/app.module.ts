import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//Storage
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InboxPage } from '../pages/inbox/inbox';
import { CorreoPage } from '../pages/correo/correo';
import { NuevocorreoPage } from '../pages/nuevocorreo/nuevocorreo';
import { CorreosProvider } from '../providers/correos/correos';
import { ToastProvider } from '../providers/toast/toast';
import { EnviadosPage } from '../pages/enviados/enviados';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InboxPage,
    CorreoPage,
    NuevocorreoPage,
    EnviadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InboxPage,
    CorreoPage,
    NuevocorreoPage,
    EnviadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CorreosProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastProvider
  ]
})
export class AppModule {}
