import { customElement, inject } from 'aurelia-framework';

@customElement('b-panel-heading')
@inject(Element)
export class BPanelHeading {

    constructor(element) {
      this.element = element;
    }
}
