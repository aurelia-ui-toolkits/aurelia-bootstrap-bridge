import { bindable, customElement, inject } from 'aurelia-framework';

@customElement('b-navbar-brand')
@inject(Element)
export class BNavbarBrand {

    @bindable bHref = null;

    constructor(element) {
      this.element = element;
    }
}
