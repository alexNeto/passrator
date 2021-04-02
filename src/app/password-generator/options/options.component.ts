import {Component} from '@angular/core';
import {PassProperties} from "../../services/pass-generator/passProperties";
import {PassGeneratorService} from "../../services/pass-generator/pass-generator.service";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {update} from "../../services/pass-generator/password.actions";


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
})
export class OptionsComponent {

  passGeneratorState$: Observable<string[]>;

  passProperties: PassProperties = {
    quantity: 10,
    length: 8,
    hasLowerCase: true,
    hasUpperCase: false,
    hasNumbers: true,
    hasSpecialCharacters: false
  }

  constructor(private passGeneratorService: PassGeneratorService, private store: Store<{ passGeneratorState: string[] }>) {
    this.passGeneratorState$ = store.pipe(select('passGeneratorState'));
  }

  passSize(passLength: string): void {
    this.passProperties.length = Number(passLength);
  }

  passChar(hasLower: boolean, hasNumber: boolean, hasUpper: boolean, hasSpecial: boolean): void {
    this.passProperties.hasLowerCase = hasLower;
    this.passProperties.hasUpperCase = hasUpper;
    this.passProperties.hasNumbers = hasNumber;
    this.passProperties.hasSpecialCharacters = hasSpecial;
  }

  generate() {
    this.store.dispatch(update({generatedPasswords: this.passGeneratorService.generate(this.passProperties)}));
  }
}
