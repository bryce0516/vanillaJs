import Wrapper from "./Wrapper";

export default class extends Wrapper {
  constructor() {
    super();
  }
  async render() {
    return `<div>
        <p>
          this is settings
        </p>
      </div>`;
  }
}
