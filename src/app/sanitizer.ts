
import {Injectable} from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Injectable()
export class Sanitazer{
constructor(private readonly sanitizer: DomSanitizer) {}

sanitizeImgUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}