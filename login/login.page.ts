import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginService, UserInfo } from '../servico/login.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Numero_Matricula: string = '';
  Senha: string = '';
  Cliente!: UserInfo[];
  LPass: boolean=false;

  constructor(private navCtrl: NavController,private service: LoginService,private alertController:AlertController) { }
  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Senha Incorreta',
      message: 'Verifique se a senha ou matricula estão corretas',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  ngOnInit() {
    this.service.getAll().subscribe(response => {this.Cliente = response;})
  }
  onLogin() {
    for(let i=0;i<this.Cliente.length;i++){
      if(this.Cliente[i]['Matricula'] === this.Numero_Matricula && this.Cliente[i]['Senha'] === this.Senha){
        console.log('func');
        this.navCtrl.navigateForward("/home");
        this.LPass= true;
      }
    }
    if(this.LPass==false){
      console.log("Matricula/Senha errada")
      this.exibirAlerta();
    }
  }
}

