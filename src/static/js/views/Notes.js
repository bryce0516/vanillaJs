import AbstractView from "./AbstractView";

export default class Notes {
  constructor(
    root,
    { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}
  ) {
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    this.root.innerHTML = `
    <div class="notes" id="noteRoot">
      <div class="notes__sidebar">
        <button class="notes__add" type="button">
          Add Note
        </button>
        <div class="notes__list">
            <div class="notes__list-item notes__list-item--selected">
                <div class="notes__small-title">Lecture Notes</div>
                <div class="notes__small-body">I learnt nothing today.</div>
                <div class="notes__small-updated">Thursday 3:30pm</div>
            </div>
        </div>
      </div>
      <div class="notes__preview">
          <input class="notes__title" type="text" placeholder="New Notes">
          <textarea class="notes__body">Take Notes</textarea>
      </div>
    </div>
    `;

    const btnAddNote = this.root.querySelector(".notes__add");
    const inpTitle = this.root.querySelector(".notes__title");
    const inpBody = this.root.querySelector(".notes__body");

    btnAddNote.addEventListener("click", () => {
      this.onNoteAdd();
    });

    [inpTitle, inpBody].forEach((inputField) => {
      inputField.addEventListener("blur", () => {
        const updatedTitle = inpTitle.value.trim();
        const updatedBody = inpBody.value.trim();

        this.onNoteEdit(updatedTitle, updatedBody);
      });
    });
  }

  _createListItemHTML(id, title, body, updated) {
    const MAX_BODY_LENGTH = 60;

    return `
    <div class="notes__list-item" data-note-id="${id}">
      <div class="notes__small-title">${title}</div>
      <div class="notes__small-body">
      ${body.substring(0, MAX_BODY_LENGTH)}
      ${body.length > MAX_BODY_LENGTH ? "..." : ""}
      </div>
      <div class="notes__small-updated">
        ${updated.toLocaleString(undefined, {
          dateStyle: "full",
          timeStyle: "short",
        })}
      </div>
    </div>
    `;
  }

  updateNiteList(notes) {
    const notesListContainer = this.root.querySelector(".notes__list");

    notesListContainer.innerHTML = "";

    for (const note of notes) {
      const html = this._createListItemHTML(
        notes.id,
        note.title,
        note.body,
        new Date(note.updated)
      );

      notesListContainer.insertAdjacentHTML("beforeend", html);
    }
  }
}
