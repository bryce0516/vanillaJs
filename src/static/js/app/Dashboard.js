import Wrapper from "./Wrapper";

export default class extends Wrapper {
  constructor() {
    super();
  }
  async render() {
    return `<div>
        <p>
          this is dashboard
        </p>
        <a class="_link"href="/posts" data-link>View recent posts</a>
      </div>`;
  }
}
