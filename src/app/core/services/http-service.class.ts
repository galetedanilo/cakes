import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export abstract class AHttpServiceClass {
  http = inject(HttpClient);
  api = 'http://localhost:5000';
}
