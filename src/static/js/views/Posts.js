import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
    <h1>Posts Page</h1>
    <p>
      you are viewing postpage
    </p>
    `;
  }
}
