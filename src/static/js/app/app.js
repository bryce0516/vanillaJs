import Dashboard from "./Dashboard";
import Notes from "./Notes";
import Posts from "./Posts";
import Settings from "./Settings";
class App {
  constructor(root) {
    this.root = root;
    this.router = [
      { path: "/", isMatch: false, view: Dashboard },
      { path: "/settings", isMatch: false, view: Settings },
      { path: "/posts", isMatch: false, view: Posts },
      { path: "/notes", isMatch: false, view: Notes },
    ];

    this.routing();
  }

  async routing() {
    this.router.map((element) =>
      element.path === location.pathname
        ? (element.isMatch = true)
        : (element.isMatch = false)
    );
    console.log(this.router);
    const currentRouter = this.router.find(
      (element) => element.isMatch === true
    );

    if (currentRouter) {
      if (currentRouter.path === "/posts") {
        new currentRouter.view(this.root);
      } else {
        const target = new currentRouter.view(this.root);
        this.root.innerHTML = await target.render();
      }
    }
  }
}

export default App;
