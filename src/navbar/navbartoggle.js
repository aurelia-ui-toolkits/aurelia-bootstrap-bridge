import {bindable, customElement, inject } from 'aurelia-framework';

@customElement('b-navbar-toggle')
@inject(Element)
export class BNavbarToggle {

    @bindable bDataTarget = null;

    constructor(element) {
      this.element = element;
    }
}

