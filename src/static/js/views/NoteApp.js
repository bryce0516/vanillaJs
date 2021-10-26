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
        const selectedNote = this.notes.find(
          (element) => element.id === Number(noteId)
        );
        this._setActiveNotes(selectedNote);
      },
      onNoteAdd: () => {
        const newNote = {
          title: "New Note",
          body: "Take note...",
        };

        NoteAPI.saveNote(newNote);
        this._refreshNotes();
        console.log("Note add");
      },
      onNoteEdit: (title, body) => {
        NoteAPI.saveNote({
          id: this.activeNote.id,
          title,
          body,
        });
        this._refreshNotes();
      },
      onNoteDelete: (noteId) => {
        NoteAPI.deleteNote(noteId);
        this._refreshNotes();
      },
    };
  }
}
