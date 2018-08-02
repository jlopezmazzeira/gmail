import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastProvider } from '../../providers/toast/toast';
import { CorreosProvider } from '../../providers/correos/correos';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-nuevocorreo',
  templateUrl: 'nuevocorreo.html',
})
export class NuevocorreoPage {
  tipo:string;
  correo:any;
  nombre:string = 'Jesús López';
  de:string = 'jesus.lopez@gmail.com';
  para:string = '';
  asunto:string = '';
  nuevoCorreo:string  = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public _tp: ToastProvider,
              public _cp: CorreosProvider,
              public storage: Storage) {
    this.tipo = navParams.get('tipo');
    this.correo = navParams.get('correo');

    if (this.tipo = 'Replay') {
        this.para = this.correo.direccion;
        this.asunto = 'Re: ' + this.correo.asunto;
    }

    if(this.tipo = 'Forward'){
      this.asunto = this.correo.asunto;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevocorreoPage');
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }

  enviarCorreo(){
    let correo = {
      nombre: this.nombre,
      de: this.de,
      para: this.para,
      asunto: this.asunto,
      mensaje: this.nuevoCorreo,
      fecha: new Date()
    }

    this._cp.enviados.push(correo);

    this.storage.set('correosEnviados', this._cp.enviados)
                .then()
                .catch(error => { console.log(error) });
    console.log('Mensaje enviado', correo);
    this.viewCtrl.dismiss();
    this._tp.crearMensaje('Correo enviado');
  }

}
