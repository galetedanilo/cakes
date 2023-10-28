import { Observable } from 'rxjs';

export abstract class AProductsServiceClass {
  abstract list(): Observable<void>;
}
