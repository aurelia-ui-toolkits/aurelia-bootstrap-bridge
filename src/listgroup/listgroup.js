import { customAttribute, inject } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';

@customAttribute('b-list-group')
@inject(Element)
export class BListGroup {

    constructor(element) {
      this.element = element;
      this.fixedAttributeManager = new AttributeManager(this.element);
    }

    attached() {
      this.fixedAttributeManager.addClasses('list-group');
    }
}
