import {Component, OnInit} from '@angular/core';
import {SeoService} from '../../services/seo/seo.service';
import {SeoProperties} from '../../services/seo/seoProperties';

@Component({
  selector: 'app-pass-view',
  templateUrl: './pass-view.component.html'
})
export class PassViewComponent implements OnInit {

  constructor(private seoService: SeoService) {
  }

  private static getSeoProperties(): SeoProperties {
    return {
      title: 'Passrator - Generate strong passwords',
      description: 'A tool to generate strong passwords'
    };
  }

  ngOnInit(): void {
    this.seoService.update(PassViewComponent.getSeoProperties());
  }
}
