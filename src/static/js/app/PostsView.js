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
    // const postDom = this.root.querySelector(".posts");
    // console.log("this is post dom", postDom);
    // document.addEventListener("DOMContentLoaded", () => {
    //   const value = this.postFetching();
    //   console.log("After lisner", value);
    // });
    this.dataFetching(postDom);
  }

  async dataFetching(postDom) {
    const posts = await this.postFetching();
    const postsdom = this.root.querySelector(".posts");
    console.log("this is postdom", postDom);
    console.log("this is root", postsdom);
    // for (const post of posts) {
    //   const userId = post.userId;
    //   const id = post.id;
    //   const title = post.title;
    //   const body = post.body;

    //   postDom.insertAdjacentHTML(
    //     "beforeend",
    //     `
    //       <div class="post-item">
    //         <p>${userId}</p>
    //         <p>${id}</p>
    //         <p>${title}</p>
    //       </div>
    //   `
    //   );
    // }
    // posts.map((element) => {
    //   const userId = element.userId;
    //   const id = element.id;
    //   const title = element.title;
    //   const body = element.body;

    //   return postDom.insertAdjacentHTML(
    //     "beforeend",
    //     `

    //   `
    //   );
    // });
    //
    // this.postFetching().map((element) => {
    //   const userId = element.userId;
    //   const id = element.id;
    //   const title = element.title;
    //   const body = element.body;

    //   return (postDom.innerHTML = `
    //         <div class="post-item">
    //     <p>${userId}</p>
    //             <p>${id}</p>
    //                     <p>${title}</p>
    //   </div>
    //   `);
    // });
  }

  // async dataFetching() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));

  //   const value = this.root.querySelector(".posts");
  //   console.log(value);
  // }
}
