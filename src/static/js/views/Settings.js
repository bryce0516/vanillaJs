import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
      <h1>Settings page</h1>
      <p>
        Manage your privacy
      </p>
    `;
  }
}
