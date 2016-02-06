import { bindable, customAttribute, inject } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';

@customAttribute('b-navs')
@inject(Element)
export class BNavs {

     @bindable bJustified = false;
     @bindable bStyle = 'tabs';
     @bindable bStacked = false;

    constructor(element) {
      this.element = element;
      this.fixedAttributeManager = new AttributeManager(this.element);
    }

    attached() {
      this.fixedAttributeManager.addClasses('nav');
      this.fixedAttributeManager.addClasses(`nav-${this.bStyle}`);

      if (this.bJustified === true) {
        this.fixedAttributeManager.addClasses('nav-justified');
      }

      if (this.bStyle === 'pills' && this.bStacked === true) {
        this.fixedAttributeManager.addClasses('nav-stacked');
      }
    }
}
