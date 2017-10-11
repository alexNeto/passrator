import { Component} from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent {

  value = 50;
  passSizeValue = 9;

  passStrength = [];
  imgPath = '././assets/img/up.png';
  configButton = 'configButtonON';
  config = 'config';
  state = true;
  case = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    special: '()~!@#$%^&*-+=|\\{}[]:;\"\'<>,.?/'
  };

  possible = this.case.lower + this.case.number;

  passSize(passSizeValue) {
    this.passSizeValue = passSizeValue;
  }


passChar(Lower, Number, Upper, Special){

  this.possible = '';
  if (Lower.checked) {
    this.possible += this.case.lower;
  }
  if (Number.checked) {
    this.possible += this.case.number;
  }
  if (Upper.checked) {
    this.possible += this.case.upper;
  }
  if (Special.checked) {
    this.possible += this.case.special;
  }
}

  showConfig() {
    if (!this.state) {
      this.state = true;
      this.imgPath = '././assets/img/up.png';
      this.configButton = 'configButtonON';
      this.config = 'config';
    } else {
      this.state = false;
      this.imgPath = '././assets/img/down.png';
      this.configButton = 'configButtonOFF';
      this.config = 'configOFF';
    }
  }

  generate() {
    let text = '';
    for (let i = 0; i < this.passSizeValue; i++) {
      text += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    return text;
  }

  myEvent() {

    if (this.state) {
      this.passStrength[0] = this.generate();
    } else {
      for (let j = 0; j < 10; j++) {
        this.passStrength[j] = this.generate();
      }
    }
  }
}
