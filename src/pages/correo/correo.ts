import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NuevocorreoPage } from '../nuevocorreo/nuevocorreo';

@IonicPage()
@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html',
})
export class CorreoPage {
  correoActual:any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
    this.correoActual = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorreoPage');
  }

  mostrarModal(tipo:string){
    let modal = this.modalCtrl
                    .create(NuevocorreoPage,
                      {tipo: tipo, correo: this.correoActual});
    modal.present();
  }

}
