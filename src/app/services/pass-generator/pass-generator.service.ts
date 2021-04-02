import {Injectable} from '@angular/core';
import {PassProperties} from "./passProperties";

@Injectable({
  providedIn: 'root'
})
export class PassGeneratorService {

  private chacacterDictionary = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    special: '()~!@#$%^&*-+=|{}[]:;<>,.?/',
  };

  private buildDictionary(passProperties: PassProperties): string {
    return [
      passProperties.hasLowerCase ? this.chacacterDictionary.lower : '',
      passProperties.hasUpperCase ? this.chacacterDictionary.upper : '',
      passProperties.hasNumbers ? this.chacacterDictionary.number : '',
      passProperties.hasSpecialCharacters ? this.chacacterDictionary.special : '',
    ].join('');
  }

  private generatePassword(passProperties: PassProperties): string {
    const result: string[] = [];
    const dictionary = this.buildDictionary(passProperties);
    for (let i = 0; i < passProperties.length; i++) {
      result.push(dictionary.charAt(Math.floor(Math.random() * dictionary.length)));
    }
    return result.join('');
  }

  generate(passProperties: PassProperties): string[] {
    const result: string[] = [];
    for (let i = 0; i < (passProperties.quantity || 10); i++) {
      result.push(this.generatePassword(passProperties));
    }
    return result;
  }
}
