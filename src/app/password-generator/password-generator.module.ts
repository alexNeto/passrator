import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordGeneratorRoutingModule} from './password-generator-routing.module';
import {PassViewComponent} from './pass-view/pass-view.component';
import {OptionsComponent} from './options/options.component';
import {PassDisplayComponent} from './pass-display/pass-display.component';
import {PassItemComponent} from './pass-item/pass-item.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [OptionsComponent,
    PassDisplayComponent,
    PassViewComponent,
    PassItemComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PasswordGeneratorRoutingModule
  ]
})
export class PasswordGeneratorModule {
}
