import PostApi from "./PostApi";

export default class {
  constructor(root, handler) {
    const { postFetching } = handler;
    this.root = root;
    this.postFetching = postFetching;
    this.root.innerHTML = `
          <div class="posts"></div>
        `;
    const postDom = this.root.querySelector(".posts");

    // console.log("postDom", postDom);
    // // const postDom = this.root.querySelector(".posts");
    // // console.log("this is post dom", postDom);
    // // document.addEventListener("DOMContentLoaded", () => {
    // //   const value = this.postFetching();
    // //   console.log("After lisner", value);
    // // });
    this.dataFetching(postDom);
  }

  async dataFetching(postDom) {
    const posts = await this.postFetching();

    posts.map((element) => {
      const userId = element.userId;
      const id = element.id;
      const title = element.title;
      const body = element.body;
      this.root.querySelector(".posts").insertAdjacentHTML(
        "beforeend",
        `
        <div class="post-item" style={{}}>
          <p>${userId}</p>
          <p>${id}</p>
          <p>${title}</p>
        </div>
      `
      );
    });
  }

  // async dataFetching() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));

  //   const value = this.root.querySelector(".posts");
  //   console.log(value);
  // }
}
