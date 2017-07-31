import { Component} from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent {

  value:number = 50;
  passSizeValue:number = 9;

  passSize(passSizeValue){
    this.passSizeValue = passSizeValue;
  }

strength(StrengthValue){
    this.value = StrengthValue;
}

  passStrength = '';
  imgPath = '././assets/img/down.png';
  configButton = 'configButtonOFF';
  config = 'configOFF';

  state = false;
  showConfig(){
    if(this.state){
      this.state = false;
      this.imgPath = '././assets/img/down.png';
      this.configButton = 'configButtonOFF';
      this.config = 'configOFF';
    }
    else{
      this.state = true;
      this.imgPath = '././assets/img/up.png';
      this.configButton = 'configButtonON';
      this.config = 'config';

    }
  }
  myEvent(){

    var text = "";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var number = "0123456789";
    var special = "()`~!@#$%^&*-+=|\\{}[]:;\"'<>,.?/";
    var possible = '';

    if(this.value > 0){
      possible += lower;

    }
    if(this.value > 10){
      possible += number;
    }
    if(this.value > 20){
      possible += upper;
    }
    if(this.value > 30){
      possible += special;
    }
    if(this.value > 40){
    }
    if(this.value > 50){
    }
    if(this.value > 60){
    }
    if(this.value > 70){
    }
    if(this.value > 80){
    }
    if(this.value > 90){
    }

    for (var i = 0; i < this.passSizeValue; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    this.passStrength = text;
  }

}
