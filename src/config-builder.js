/**
* Plugin configuration builder
*/
export class ConfigBuilder {

  useGlobalResources: boolean = true;
  globalResources = [];

  useAll() : ConfigBuilder {
    return this.useClickCounter()
               .useNavbar()
               .useNavs()
               .useButton()
               .useCollapse()
               .usePanel()
               .useListGroup();
  }
  /**
  * Use my control
  */
  useClickCounter(): ConfigBuilder {
    this.globalResources.push('./click-counter');
    return this;
  }

  useNavbar() : ConfigBuilder {
    this.globalResources.push('./navbar/navbar');
    this.globalResources.push('./navbar/navbarbrand');
    this.globalResources.push('./navbar/navbarcollapse');
    this.globalResources.push('./navbar/navbarheader');
    this.globalResources.push('./navbar/navbarnav');
    this.globalResources.push('./navbar/navbartoggle');

    return this;
  }

  useNavs() : ConfigBuilder {
    this.globalResources.push('./navs/navs');
    this.globalResources.push('./navs/tabcontent');
    this.globalResources.push('./navs/tabpane');

    return this;
  }

  useButton() : ConfigBuilder {
    this.globalResources.push('./button/button');
    return this;
  }

  useCollapse() : ConfigBuilder {
    this.globalResources.push('./collapse/collapse');
    this.globalResources.push('./collapse/collapsible');
    return this;
  }

  usePanel() : ConfigBuilder {
    this.globalResources.push('./panel/panel');
    this.globalResources.push('./panel/panelbody');
    this.globalResources.push('./panel/panelfooter');
    this.globalResources.push('./panel/panelgroup');
    this.globalResources.push('./panel/panelheading');
    this.globalResources.push('./panel/paneltitle');
    return this;
  }

  useListGroup() : ConfigBuilder {
    this.globalResources.push('./listgroup/listgroup');
    this.globalResources.push('./listgroup/listgroupitem');
    return this;
  }
  /**
  * Don't globalize any resources
  * Allows you to import yourself via <require></require>
  */
  withoutGlobalResources(): ConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }
}
