import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private menuCtrl: MenuController) {}
  
  ionViewDidLeave() {
    // Zorg ervoor dat het menu open blijft wanneer de gebruiker de pagina verlaat
    this.menuCtrl.close();
  }
}