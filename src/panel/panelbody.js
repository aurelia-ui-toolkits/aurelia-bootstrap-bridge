import { customElement, inject } from 'aurelia-framework';

@customElement('b-panel-body')
@inject(Element)
export class BPanelBody {

    constructor(element) {
      this.element = element;
    }
}
