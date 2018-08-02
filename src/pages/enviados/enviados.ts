import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CorreosProvider } from '../../providers/correos/correos';
import { CorreoPage } from '../correo/correo';
import { NuevocorreoPage } from '../nuevocorreo/nuevocorreo';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-enviados',
  templateUrl: 'enviados.html',
})
export class EnviadosPage {
  listaDeCorreos;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public _cp: CorreosProvider,
      public modalCtrl: ModalController,
      public storage: Storage) {
      //this.listaDeCorreos = this._cp.enviados;
  }

  //Este método se usa para cargar cosas antes de la página
  ionViewWillEnter(){
    this.storage.get('correosEnviados').then((correosEnviados) => {
                  if (correosEnviados == null) {
                    this.listaDeCorreos = [];
                    this._cp.enviados = [];
                  } else {
                    this.listaDeCorreos = correosEnviados;
                    this._cp.enviados = this.listaDeCorreos;
                  }

                }).catch(error => { console.log(error)});
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
