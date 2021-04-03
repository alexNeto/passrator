import {Component, OnInit} from '@angular/core';
import {SeoService} from '../services/seo/seo.service';
import {SeoProperties} from '../services/seo/seoProperties';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private seoService: SeoService) {
  }

  private static getSeoProperties(): SeoProperties {
    return {
      title: 'Passrator',
      description: 'A webapp with tolls and utilities for quick uses.'
    };
  }

  ngOnInit(): void {
    this.seoService.update(HomeComponent.getSeoProperties());
  }

}
