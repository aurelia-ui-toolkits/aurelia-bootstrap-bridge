import { bindable, customElement, inject } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';

@customElement('b-collapsible')
@inject(Element)
export class BCollapsible {

    @bindable bExpanded = false;
    @bindable bType = null;
    @bindable bId = null;

    constructor(element) {
      this.element = element;
    }

    attached() {
      this.fixedAttributeManager = new AttributeManager(this.collapsibleElement);

      if (this.bExpanded === true) {
        this.fixedAttributeManager.addClasses('in');
      }

      if (this.bType) {
        this.fixedAttributeManager.addClasses(`${this.bType}-collapse`);
      }

      let panelHeadingElement = this.element.querySelector('ul');
      if (panelHeadingElement) {
        this.fixedAttributeManager.addClasses('panel');
      }
    }
}
