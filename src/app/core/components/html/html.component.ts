import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ConfigurableComponent } from '../configurable/ConfigurableComponent';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'dai-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent extends ConfigurableComponent implements OnInit {
  public content: SafeHtml;
  public script: string;

  @ViewChild('script') scriptTag: ElementRef;

  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef) {
    super();
  }

  ngOnInit(): void {
    setTimeout(() => {
      // wait for DOM rendering
      this.reinsertScripts();
      if (this.script) {
        this.convertToScript();
      }
    });
  }

  onSetConfig(config) {
    const content = config.content;
    this.script = config.script;
    // ? this.sanitizer.bypassSecurityTrustScript(config.script)
    // : undefined;

    this.content = this.sanitizer.bypassSecurityTrustHtml(content);
  }

  convertToScript() {
    const element = this.scriptTag.nativeElement;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    if (this.script) {
      script.src = this.script;
    }
    if (element.innerHTML) {
      script.innerHTML = element.innerHTML;
    }
    const parent = element.parentElement;
    parent.parentElement.replaceChild(script, parent);
  }

  reinsertScripts(): void {
    const scripts = this.elementRef.nativeElement.getElementsByTagName(
      'script'
    ) as HTMLScriptElement[];
    const scriptsInitialLength = scripts.length;
    for (let i = 0; i < scriptsInitialLength; i++) {
      const script = scripts[i];
      const scriptCopy = document.createElement('script') as HTMLScriptElement;
      scriptCopy.type = script.type ? script.type : 'text/javascript';
      if (script.innerHTML) {
        scriptCopy.innerHTML = script.innerHTML;
      } else if (script.src) {
        scriptCopy.src = script.src;
      }
      scriptCopy.async = false;
      script.parentNode.replaceChild(scriptCopy, script);
    }
  }
}
