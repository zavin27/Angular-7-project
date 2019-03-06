import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
  @Input() hasUL = false;
  @Input() childIndex: number;

  constructor(private el: ElementRef) {
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.hasUL) {
      const child: HTMLUListElement = this.el.nativeElement.children[this.childIndex];
      if (child.classList.contains('show')) {
        child.classList.remove('show');
      } else {
        child.classList.add('show');
      }
    }
  }
}
