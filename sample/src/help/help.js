export class Help {
  tabSelected(e) {
    if (jQuery(e.item).text() === 'Gitter Channel') {
      this.gitter.toggleChat(true);
    }
  }
}
