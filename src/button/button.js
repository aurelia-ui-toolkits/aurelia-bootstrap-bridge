import { bindable, customAttribute, inject } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';

@customAttribute('b-button')
@inject(Element)
export class BButton {

    @bindable bStyle = 'default';
    @bindable bSize = null;
    @bindable bBlock = null;
    @bindable bDisabled = false;
    @bindable bActive = false;

    constructor(element) {
      this.element = element;
      this.fixedAttributeManager = new AttributeManager(this.element);
    }

    attached() {
      this.fixedAttributeManager.addClasses('btn');
      this.fixedAttributeManager.addClasses(`btn-${this.bStyle}`);

      if (this.bSize) {
        this.fixedAttributeManager.addClasses(`btn-${this.bSize}`);
      }

      if (this.bBlock) {
        this.fixedAttributeManager.addClasses('btn-block');
      }

      if (this.bDisabled === true) {
        this.fixedAttributeManager.addClasses('disabled');
      }

      if (this.bActive === true) {
        this.fixedAttributeManager.addClasses('active');
      }
    }
}
