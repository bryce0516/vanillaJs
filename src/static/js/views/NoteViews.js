export default class NotesView {
  constructor(
    root,
    { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}
  ) {
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    this.root.innerHtml = `
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
      `;
    console.log("this is root", root);
  }

  // }
}
