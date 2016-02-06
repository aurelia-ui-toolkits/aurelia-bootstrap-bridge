import { customAttribute, inject } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';

@customAttribute('b-panel-title')
@inject(Element)
export class BPanelTitle {

    constructor(element) {
      this.element = element;
      this.fixedAttributeManager = new AttributeManager(this.element);
    }

    attached() {
      this.fixedAttributeManager.addClasses('panel-title');
    }
}
