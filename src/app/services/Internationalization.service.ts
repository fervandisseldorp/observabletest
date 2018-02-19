import {Injectable} from '@angular/core';

Injectable()
export class InternationalizationService {
  private usedLanguage = 'en-US';

  constructor() { }

  getBrowserLanguage(): string {
    return 'test language: ' + navigator.language;
  }

  getSystemLanguage() {

  }
}
