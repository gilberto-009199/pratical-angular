import { Injectable, signal } from '@angular/core';

import en from '../assets/i18n/en.json';
import pt from '../assets/i18n/pt.json';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {

  private languages = {
    'en': en,
    'pt': pt
  }
  private language = signal<'pt'|'en'>('pt');

  setLanguage(lang: 'pt'| 'en'){
    console.log(lang)
    this.language.set(lang);
  }

  
  label(key: string, args: any[] = []): string{
    
    let value = (this.languages[this.language()] as any)[key] as string;

    // meu default en
    if(!value)value = (this.languages['en'] as any)[key] as string;

    args.forEach((arg, index) => {
      value = value.replace(`{{${index}}}`, String(arg));
    });

    return value ? String(value) : key;
  }
}
