import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[dntHover]'
})
export class HoverDirective {

  @Input() color = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el);
  }

  @HostListener('mouseover') onmouseover() {
    this.renderer.setStyle(this.el.nativeElement , 'background-color', this.color);
  }

  @HostListener('mouseout') onmouseout() {
    this.renderer.setStyle(this.el.nativeElement , 'background-color', 'white');
  }


}
