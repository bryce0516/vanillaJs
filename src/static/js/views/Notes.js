import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Notes");
  }

  async getHtml() {
    return `
    <body>
      <div class="notes">
        <div class="notes__sidebar">
                <button class="notes__add" type="button">Add Note</button>
                <div class="notes__list">
                    <div class="notes__list-item notes__list-item--selected">
                        <div class="notes__small-title">Lecture Notes</div>
                        <div class="notes__small-body">I learnt nothing today.</div>
                        <div class="notes__small-updated">Thursday 3:30pm</div>
                    </div>
                </div>
            </div>
            <div class="notes__preview">
                <input class="notes__title" type="text" placeholder="Enter a title...">
                <textarea class="notes__body">I am the notes body...</textarea>
            </div>
      </div>
    </body>
    `;
  }
}
