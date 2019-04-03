import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DaiPageConfig } from '../../config/DaiPageConfig';
import { ConfigLoaderService } from '../../service/config-loader.service';

@Component({
  selector: 'dai-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, AfterViewInit {
  public configPath: string;
  public config: DaiPageConfig;

  constructor(
    private route: ActivatedRoute,
    private configLoader: ConfigLoaderService
  ) {}

  ngOnInit(): void {
    this.configPath = this.route.snapshot.data.config;
    this.configLoader.getConfig(this.configPath).then(config => {
      this.config = config;
    });
  }

  ngAfterViewInit() {}
}
