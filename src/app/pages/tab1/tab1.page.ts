import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private alertCtrl: AlertController) {}

  async scan() {
   const allowed = this.checkPermisos();

   console.log({allowed})

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
    }
  }

  checkPermisos() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });

      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        const alert = await this.alertCtrl.create({
          header: 'Sin permisos',
          message:
            'Por favor permita el acceso a la camara en sus preferencias',
          buttons: [
            {
              text: 'No',
              role: 'Cancel',
            },
            {
              text: 'Abrir preferencias',
              handler: () => {
                BarcodeScanner.openAppSettings(), resolve(false);
              },
            },
          ],
        });

        await alert.present();
      } else {
        resolve(reject);
      }
    });
  }
}
