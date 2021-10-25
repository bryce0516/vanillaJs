export default class {
  constructor() {
    console.log("abstract View wroking");
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}
