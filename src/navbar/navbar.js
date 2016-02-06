import { bindable, customElement, inject } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';

@customElement('b-navbar')
@inject(Element)
export class BNavbar {

    @bindable bLook = 'default';
    @bindable bFixed = null;
    @bindable bStaticTop = false;

    constructor(element) {
      this.element = element;
    }

    attached() {
      this.fixedAttributeManager = new AttributeManager(this.navbarElement);
      this.fixedAttributeManager.addClasses(`navbar-${this.bLook}`);

      if (this.bFixed) {
        this.fixedAttributeManager.addClasses(`navbar-fixed-${this.bFixed}`);
      }
      if (this.bLook) {
        this.fixedAttributeManager.addClasses('navbar-static-top');
      }
    }
}
