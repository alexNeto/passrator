import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '/password-generator',
    pathMatch: 'full'
  },
  {
    path: 'password-generator',
    loadChildren: () => import('./password-generator/password-generator.module').then(mod => mod.PasswordGeneratorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
