import { bindable, customElement, inject } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';

@customElement('b-panel')
@inject(Element)
export class BPanel {

    @bindable bStyle = 'default';

    constructor(element) {
      this.element = element;
    }

    attached() {
      this.fixedAttributeManager = new AttributeManager(this.panelElement);
      this.fixedAttributeManager.addClasses(`panel-${this.bStyle}`);

      let panelHeadingElement = this.element.querySelector('b-panel-heading');
      if (!panelHeadingElement) {
        return;
      }

      let setter = new AttributeManager(panelHeadingElement);
      setter.addClasses(`panel-${this.bStyle}`);
    }
}
