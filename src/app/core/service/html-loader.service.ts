import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class CacheService {
//   private cache = new Map<string, Promise<any>>();
//   private storage = window.sessionStorage;

//   get<T>(key: string, promise?: Promise<T>): Promise<T> {

//     return promise;
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class HtmlLoaderService {
  private cache = new Map<string, Promise<any>>();
  private storage = window.sessionStorage;

  constructor(private http: HttpClient) {}

  public loadHtml(path: string = ''): Promise<string> {
    if (!environment.production) {
      // tslint:disable-next-line: no-console
      console.info('cache disabled during developent');
      return this.loadFile(path);
    }

    if (!path) {
      return Promise.reject('no path given');
    }

    const template = this.storage.getItem(path) || this.cache.get(path);

    if (template) {
      return Promise.resolve(template);
    }

    if (!template) {
      if (template === undefined) {
        this.cache.set(
          path,
          this.loadFile(path)
            .then(result => {
              this.storage.setItem(path, result);
              return result;
            })
            .finally(() => {
              this.cache.delete(path);
            })
        );
      }

      return this.cache.get(path);
    }
  }

  private loadFile(path): Promise<string> {
    return this.http.get(path, { responseType: 'text' }).toPromise();
  }
}
