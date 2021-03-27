import {Component} from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
})
export class OptionsComponent {
  passSizeValue = 9;

  passStrength: string[] = [];
  imgPath = '././assets/img/up.png';
  isConfigOn = true;
  state = true;
  case = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    special: '()~!@#$%^&*-+=|\\{}[]:;"\'<>,.?/',
  };

  possible = this.case.lower + this.case.number;

  passSize(passSizeValue: any): void {
    this.passSizeValue = passSizeValue;
  }

  passChar(Lower: any, hasNumber: any, Upper: any, Special: any): void {
    this.possible = '';
    if (Lower.checked) {
      this.possible += this.case.lower;
    }
    if (hasNumber.checked) {
      this.possible += this.case.number;
    }
    if (Upper.checked) {
      this.possible += this.case.upper;
    }
    if (Special.checked) {
      this.possible += this.case.special;
    }
  }

  generate(): string {
    let text = '';
    for (let i = 0; i < this.passSizeValue; i++) {
      text += this.possible.charAt(
        Math.floor(Math.random() * this.possible.length)
      );
    }
    return text;
  }

  myEvent(): void {
    for (let j = 0; j < 10; j++) {
      this.passStrength[j] = this.generate();
    }
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      console.log(`A senha ${text} foi copiada`)
    }, (err) => {
      console.log(`Houve um erro ao copiad o texto erro: ${err}`)
    })
  }
}
