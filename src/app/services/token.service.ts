import {Injectable} from '@angular/core';

@Injectable()
export class TokenService {
  private token = 'empty';
  constructor() {}

  public printSomething(): void {
    console.log('blablabla');
  }
}
