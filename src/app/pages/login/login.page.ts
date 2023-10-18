import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  redireccionarAUniversidad() {
    window.open('https://www.uab.edu.bo/', '_blank');
  }

  redireccionarAFacebook() {
    window.open('fb://page/SoyUAB', '_system', 'location=yes');
    window.open('https://www.facebook.com/SoyUAB', '_blank');
  }

  redireccionarAInstagram() {
    window.open('instagram://user?username=soy.uab', '_system', 'location=yes');
    window.open('https://www.instagram.com/soy.uab/', '_blank');
  }

}
