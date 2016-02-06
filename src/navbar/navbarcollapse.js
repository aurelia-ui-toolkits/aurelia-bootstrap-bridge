import { bindable, customElement, inject } from 'aurelia-framework';

@customElement('b-navbar-collapse')
@inject(Element)

export class BNavbarCollapse {

    @bindable bId = null;

    constructor(element) {
      this.element = element;
    }
}
