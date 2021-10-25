import Dashboard from "./views/Dashboard.js";

console.log("index.js is loaded");
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    // { path: "/posts", view: () => console.log("Viewing Posts") },
    // { path: "/settings", view: () => console.log("Viewing Settings") },
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

  const view = new match.route.view();
  document.querySelector("#app").innerHTML = await view.getHtml();
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
