import { bindable, customElement, inject } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';

@customElement('b-tab-pane')
@inject(Element)
export class BTabPane {

     @bindable bId = null;
     @bindable bActive = null;

    constructor(element) {
      this.element = element;
    }

    attached() {
      this.fixedAttributeManager = new AttributeManager(this.tabPaneElement);

      if (this.bActive) {
        this.fixedAttributeManager.addClasses('active');
      }
    }
}
