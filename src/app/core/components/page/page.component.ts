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
  public pageConfig: DaiPageConfig;
  public subnavConfig: any;
  public bannerConfig: any;
  public isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private configLoader: ConfigLoaderService
  ) {}

  ngOnInit(): void {
    this.configPath = this.route.snapshot.data.config;

    this.isLoading = true;
    this.configLoader
      .getConfig(this.configPath)
      .then(config => {
        this.pageConfig = config;
        const hasSubnavConfig =
          config.bannerConfig && Array.isArray(config.bannerConfig);
        this.subnavConfig = hasSubnavConfig ? config.bannerConfig : undefined;
        this.bannerConfig = hasSubnavConfig ? undefined : config.bannerConfig;
      })
      .finally(() => (this.isLoading = false));
  }

  ngAfterViewInit() {}
}
