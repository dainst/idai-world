import {Injectable, Injector} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {SearchResult} from 'src/app/generated/search';
import {makeSearchResult} from './search-mock';

@Injectable()
export class SearchMockRequestInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Intercepted http call:', request.url);

    if (request.url.endsWith('localsearch') && request.method === 'GET') {
      return new Observable((observer) => {
        observer.next(
          new HttpResponse<SearchResult>({
            body: makeSearchResult(),
            status: 200,
          })
        );
        observer.complete();
      });
    }
    return next.handle(request);
  }
}
