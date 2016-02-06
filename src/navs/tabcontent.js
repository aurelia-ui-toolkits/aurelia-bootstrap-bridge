import { customElement, inject } from 'aurelia-framework';

@customElement('b-tab-content')
@inject(Element)
export class BTabContent {

    constructor(element) {
      this.element = element;
    }
}
