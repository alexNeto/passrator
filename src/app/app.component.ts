import {Component} from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  faGithub = faGithub;
  title = 'passrator';
}
