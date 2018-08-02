import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CorreosProvider } from "../../providers/correos/correos";
import { CorreoPage } from '../correo/correo';
import { NuevocorreoPage } from '../nuevocorreo/nuevocorreo';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  listaCorreo: Object;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _cp: CorreosProvider,
              public modalCtrl: ModalController) {
    this.listaCorreo = this._cp.lista;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

  verCorreo(correo:any){
    this.navCtrl.push(CorreoPage, correo);
  }

  nuevoCorreo(){
    let modal = this.modalCtrl
                    .create(NuevocorreoPage,
                      {tipo: 'Nuevo Correo', correo: ''});
    modal.present();
  }

}
