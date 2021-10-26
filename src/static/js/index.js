import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";
import Notes from "./views/Notes";
import NoteAPI from "./views/NoteAPI";
import NoteApp from "./views/NoteApp";
// import NotesView from "./views/NoteViews";

const app = document.querySelector("#app");
// console.log("this is app", app);
const NoteView = new NoteApp(app);

// const notes = NoteAPI.getAllNotes();

// NoteView.updateNoteList(notes);

// NoteView.updateActiveNote(notes[0]);

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

// localStorage.setItem("notesapp-notes", );
const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Posts },
    { path: "/settings", view: Settings },
    {
      path: "/notes",
      view: NoteView,
    },
  ];

  const potentialMatches = routes.map((element) => {
    return {
      route: element,
      isMatch: location.pathname === element.path,
    };
  });

  let match = potentialMatches.find((element) => element.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  if (match.route.path === "/notes") {
    match.route.view;
    // const NoteView = match.route.view();
    // NoteView.root.innerHTML = `
    // <div class="notes" id="noteRoot">
    //   <div class="notes__sidebar">
    //     <button class="notes__add" type="bton">
    //       Add Note
    //     </button>
    //     <div class="notes__list">
    //         <div class="notes__list-item notes__list-item--selected">
    //             <div class="notes__small-title">Lecture Notes</div>
    //             <div class="notes__small-body">I learnt nothing today.</div>
    //             <div class="notes__small-updated">Thursday 3:30pm</div>
    //         </div>
    //     </div>
    //   </div>
    //   <div class="notes__preview">
    //       <input class="notes__title" type="text" placeholder="New Notes">
    //       <textarea class="notes__body">Take Notes</textarea>
    //   </div>
    // </div>
    // `;
  } else {
    const view = new match.route.view();
    app.innerHTML = await view.getHtml();
  }
};

window.addEventListener("popState", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
