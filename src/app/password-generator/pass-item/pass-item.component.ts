import {Component, Input} from '@angular/core';
import {faCheckSquare, faClipboard} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-pass-item',
  templateUrl: './pass-item.component.html'
})
export class PassItemComponent {

  @Input() pass = '';

  faClipboard = faClipboard;
  faCheck = faCheckSquare;

  copied = false;

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.pass).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 1000);
    }, (_) => {
      this.copied = false;
    });
  }
}
