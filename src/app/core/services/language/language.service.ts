import { Injectable } from '@angular/core';

export type Language = {
  key: string;
  value: string;
};

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  _languages: Language[] = [
    { key: null, value: '' },
    { key: 'ca', value: 'Catalán' },
    { key: 'de', value: 'Alemán' },
    { key: 'en', value: 'Inglés' },
    { key: 'es', value: 'Español' },
    { key: 'eu', value: 'Euskera' },
    { key: 'fr', value: 'Francés' },
    { key: 'gl', value: 'Gallego' },
    { key: 'pt-br', value: 'Portugués' },
    { key: 'tr', value: 'Turco' },
    { key: 'zh', value: 'Chino' },
  ];

  constructor() { }

  get languages(): Language[] {
    return this._languages;
  }

  set languages(value: Language[]) {
    this._languages = value;
  }
}
