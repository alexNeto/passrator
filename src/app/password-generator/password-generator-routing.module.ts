import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PassViewComponent} from "./pass-view/pass-view.component";

const routes: Routes = [
  {
    path: '',
    component: PassViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordGeneratorRoutingModule {
}
