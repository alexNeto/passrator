import { Component} from '@angular/core';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent {

  passStrength = '';
  imgPath = '././assets/img/down.png';
  configButton = 'configButtonOFF';
  config = 'configOFF';
  roundshadow = '';

  state = false;
  showConfig(){
    if(this.state){
      this.state = false;
      this.imgPath = '././assets/img/down.png';
      this.configButton = 'configButtonOFF';
      this.config = 'configOFF';
      this.roundshadow = '';
    }
    else{
      this.state = true;
      this.imgPath = '././assets/img/up.png';
      this.configButton = 'configButtonON';
      this.config = 'config';
      this.roundshadow = 'roundshadow';

    }
  }
  myEvent(){

    var text = "";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var number = "0123456789";
    var special = "!@#$%*()[{/}]"
    var possible = upper + lower + number + special;

    for (var i = 0; i < 9; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    this.passStrength = text;
  }

}
