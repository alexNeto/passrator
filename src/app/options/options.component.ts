import { Component} from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent {

  min_input:number;
  max_input:number;
  min_length:number;
  max_length:number;

  value:number = 50;

transperancy(Transvalue){
    this.value = Transvalue;
}
 inputRange(type) {
   console.log(type);
    let inputType;
    switch (type) {
      case 'text':
        inputType = 'text';
        break;
        case 'numeric':
        inputType = 'number';
        this.min_length=5;
        this.max_length=20;
        break;
      case 'number':
        inputType = 'number';
        this.min_input=0;
        this.max_input=10;
        break;
      case 'range':
        inputType = 'range';
        this.min_input=0;
        this.max_input=10;
        break;
      default:
    }
    return inputType;
  }

  passStrength = '';
  imgPath = '././assets/img/down.png';
  configButton = 'configButtonOFF';
  config = 'configOFF';
  roundshadow = '';
  showStrength = 'color1';

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
    var possible = '';
    var passlength = 1;

    if(this.value > 0){
      possible += lower;
      passlength = 9;
      passlength = 9;

    }
    if(this.value > 10){
      possible += number;
      passlength = 9;
    }
    if(this.value > 20){
      possible += upper;
      passlength = 9;
    }
    if(this.value > 30){
      possible += special;
      passlength = 9;
    }
    if(this.value > 40){
      passlength = 12;
    }
    if(this.value > 50){
      passlength = 16;
    }
    if(this.value > 60){
      passlength = 21;
    }
    if(this.value > 70){
      passlength = 27;
    }
    if(this.value > 80){
      passlength = 33;
    }
    if(this.value > 90){
      passlength = 48;
    }

    for (var i = 0; i < passlength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    this.passStrength = text;
  }

}
