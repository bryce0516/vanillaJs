import NoteAPI from "./NoteAPI";
import Notes from "./Notes";

export default class NoteApp {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new Notes(root, this._handlers());

    this._refreshNotes();
  }

  _refreshNotes() {
    const notes = NoteAPI.getAllNotes();

    this._setNotes(notes);

    if (notes.length > 0) {
      this._setActiveNotes(notes[0]);
    }
  }

  _setNotes(notes) {
    this.notes = notes;
    this.view.updateNoteList(notes);
    this.view.updateNotePreviewVisiblility(notes.length > 0);
  }

  _setActiveNotes(note) {
    this.activeNote = note;
    this.view.updateActiveNote(note);
  }

  _handlers() {
    return {
      onNoteSelect: (noteId) => {
        console.log("Note Selected : " + noteId);
      },
      onNoteAdd: () => {
        console.log("Note add");
      },
      onNoteEdit: (title, body) => {
        console.log(title, body);
      },
      onNoteDelete: (noteId) => {
        console.log(`Note Deleted : ${noteId}`);
      },
    };
  }
}
