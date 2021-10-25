export default class {
  constructor() {
    console.log("abstract View wroking");
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml(title) {
    console.log("this isabst ", title);
    return "";
  }
}
