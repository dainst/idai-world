import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  AfterViewInit,
  ComponentFactoryResolver
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DaiPageConfig } from '../../config/DaiPageConfig';
import { ComponentSlotDirective } from '../../directives/component-slot.directive';
import { ConfigLoaderService } from '../../service/config-loader.service';

@Component({
  selector: 'dai-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, AfterViewInit {
  public configPath: string;
  public config: DaiPageConfig;

  @ViewChildren(ComponentSlotDirective)
  viewChildren!: QueryList<ComponentSlotDirective>;

  constructor(
    private route: ActivatedRoute,
    private configLoader: ConfigLoaderService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.configPath = this.route.snapshot.data.config;
  }

  ngAfterViewInit() {
    this.configLoader.getConfig(this.configPath).then(config => {
      this.config = config;

      this.viewChildren.changes.subscribe(() => {
        this.loadComponents(this.config);
      });
    });
  }

  loadComponents(config: DaiPageConfig) {
    config.componentConfigs.map((entry, idx) => {
      const { type } = entry;

      try {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          type
        );
        const refs = this.viewChildren.toArray();
        const viewContainerRef = refs[idx].viewContainerRef;

        viewContainerRef.clear();

        viewContainerRef.createComponent(componentFactory);
      } catch (err) {
        console.warn(
          `Error while trying to load component type ${
            entry.config.type
          }=>${type}`,
          err
        );
      }
    });
  }
}
