import {Component} from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  faGithub = faGithub;
  faArrowLeft = faArrowLeft;
  title = 'Passrator';

  constructor(private router: Router) {
  }

  get notHome() {
    return this.router.url !== '/';
  }

  get isProd() {
    return environment.production;
  }
}
