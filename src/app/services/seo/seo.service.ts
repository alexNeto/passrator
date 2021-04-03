import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {SeoProperties} from './seoProperties';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta) {
  }

  update(seoProperties: SeoProperties): void {
    this.title.setTitle(seoProperties.title);
    this.meta.updateTag({name: 'description', content: seoProperties.description});
  }
}
