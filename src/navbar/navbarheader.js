import { customElement, inject } from 'aurelia-framework';

@customElement('b-navbar-header')
@inject(Element)

export class BNavbarHeader {

    constructor(element) {
      this.element = element;
    }
}
