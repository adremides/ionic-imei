import { Component } from '@angular/core';
import { Uid } from '@ionic-native/uid/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imei: string;

  constructor(
    private uid: Uid
  ) {
    this.getImei().then((imei: string) => {
      this.imei = imei;
    });
  }

  async getImei() {
    return this.uid.IMEI;
  }

}
