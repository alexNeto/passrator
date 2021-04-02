import {Injectable} from '@angular/core';
import {PassProperties} from './passProperties';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PassGeneratorService {

  private characterDictionary = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    digits: '0123456789',
    special: '()~!@#$%^&*-+=|{}[]:;<>,.?/',
  };

  private static createPassword(dictionary: string): string {
    return dictionary.charAt(Math.floor(Math.random() * dictionary.length));
  }

  generate(passProperties: PassProperties): string[] {
    return _.range(0, passProperties.quantity)
      .map(() => this.generatePassword(passProperties));
  }

  private buildDictionary(passProperties: PassProperties): string {
    return _.join([
      passProperties.hasLowerCase ? this.characterDictionary.lower : '',
      passProperties.hasUpperCase ? this.characterDictionary.upper : '',
      passProperties.hasNumbers ? this.characterDictionary.digits : '',
      passProperties.hasSpecialCharacters ? this.characterDictionary.special : '',
    ], '');
  }

  private generatePassword(passProperties: PassProperties): string {
    const createPassword = () => PassGeneratorService.createPassword(this.buildDictionary(passProperties));
    return _.join(_.range(0, passProperties.length).map(createPassword), '');
  }
}
