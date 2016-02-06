import { customElement, inject } from 'aurelia-framework';

@customElement('b-panel-footer')
@inject(Element)
export class BPanelFooter {

    constructor(element) {
      this.element = element;
    }
}
