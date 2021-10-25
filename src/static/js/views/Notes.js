import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Notes");
  }

  async getHtml() {
    return `
      <h1>
        this is note Page
      </h1>
      <div class="notes" id="noteApp">
        <div class="notes__sidebar">
          <button class="notes__add" type="button">Add Notes</button>
          <div class="notes__list">
            <div class="notes__list-item">
            </div>
          </div>
        </div>
        <div class="notes__preview">
          
        </div>
      </div>
    `;
  }
}
