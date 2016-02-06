import { bindable, customElement, inject } from 'aurelia-framework';

@customElement('b-panel-group')
@inject(Element)
export class BPanelGroup {

    @bindable bId = null;

    constructor(element) {
      this.element = element;
    }
}
