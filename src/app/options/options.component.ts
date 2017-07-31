import { Component} from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent {

  value:number = 50;
  passSizeValue:number = 9;

  passStrength = '';
  imgPath = '././assets/img/down.png';
  configButton = 'configButtonOFF';
  config = 'configOFF';
  state = false;
  passCharValue = '';
  upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  lower = "abcdefghijklmnopqrstuvwxyz";
  number = "0123456789";
  special = "()~!@#$%^&*-+=|\\{}[]:;\"'<>,.?/";
  possible = this.lower + this.number;

  passSize(passSizeValue){
    this.passSizeValue = passSizeValue;
  }

passChar(Lower, Number, Upper, Special){

  this.possible = '';
  if(Lower.checked)
    this.possible += this.lower;
  if(Number.checked)
    this.possible += this.number;
  if(Upper.checked)
    this.possible += this.upper;
  if(Special.checked)
    this.possible += this.special;

  console.log(Lower.checked, Number.checked, Upper.checked, Special.checked);
}

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

    for (var i = 0; i < this.passSizeValue; i++)
    text += this.possible.charAt(Math.floor(Math.random() * this.possible.length));

    this.passStrength = text;
  }

}
