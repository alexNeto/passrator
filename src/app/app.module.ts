import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {StoreModule} from '@ngrx/store';
import {OptionsComponent} from './password-generator/options/options.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PassDisplayComponent} from './password-generator/pass-display/pass-display.component';
import {PassViewComponent} from './password-generator/pass-view/pass-view.component';
import {PassItemComponent} from './password-generator/pass-item/pass-item.component';
import {passwordGeneratorReducer} from "./services/pass-generator/password.reducer";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    PassDisplayComponent,
    PassViewComponent,
    PassItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    StoreModule.forRoot({passGeneratorState: passwordGeneratorReducer}),
    FontAwesomeModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
