console.log("js. is loaded");

const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("Viewing Dashboard") },
    { path: "/posts", view: () => console.log("Viewing Posts") },
    { path: "/settings", view: () => console.log("Viewing Settings") },
  ];

  const potentialMatches = routes.map((element) => {
    return {
      route,
      isMatch: location.pathname === route.path,
    };
  });
};
