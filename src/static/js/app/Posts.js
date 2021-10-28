import Wrapper from "./Wrapper";
import PostsView from "./PostsView";
import PostApi from "./PostApi";
export default class extends Wrapper {
  constructor(root) {
    super();
    this.root = root;
    this.viewPage = new PostsView(this.root, this.handler());
  }

  handler() {
    return {
      postFetching: async () => {
        const result = await PostApi.post();
        return result;
      },
    };
  }
  async render() {
    return `<div>
        <p>
          this is posts
        </p>
      </div>`;
  }
}
