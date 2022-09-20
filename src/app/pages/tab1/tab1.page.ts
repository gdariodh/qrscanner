import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  async scan(){
    console.log('hola')

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
    }

  }

}
