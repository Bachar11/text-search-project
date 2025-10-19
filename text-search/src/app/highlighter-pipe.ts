import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlighter',
  standalone: true
})
export class HighlighterPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(text: string, searchText: string): SafeHtml {
    if (!text || !searchText?.trim()) return text;

    const escaped = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    const html = text.replace(regex, '<mark>$1</mark>');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
