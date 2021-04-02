import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-pass-display',
  templateUrl: './pass-display.component.html'
})
export class PassDisplayComponent {

  passGeneratorState$: Observable<string[]>;

  constructor(private store: Store<{ passGeneratorState: string[] }>) {
    this.passGeneratorState$ = this.store.pipe(select('passGeneratorState'));
  }
}
