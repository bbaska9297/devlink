import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSeniorHighlight]',
})
export class SeniorHighlightDirective {
  @Input('appSeniorHighlight') experience!: number;
  constructor(private el: ElementRef) {}
  ngOnInit() {
    if (this.experience >= 5) {
      this.el.nativeElement.style.border = '2px solid #4acf50';
      this.el.nativeElement.style.backgroundColor = 'f1ff2';
    }
  }
}
