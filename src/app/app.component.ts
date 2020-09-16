import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private permissions: AndroidPermissions
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.permissions.checkPermission(
        this.permissions.PERMISSION.READ_PHONE_STATE
      ).then(
        (result) => {
          if (!result.hasPermission) {
            this.permissions.requestPermission(this.permissions.PERMISSION.READ_PHONE_STATE);
          }
        }, (err) => {
          this.permissions.requestPermission(this.permissions.PERMISSION.READ_PHONE_STATE);
        }
      );
    });
  }
}
