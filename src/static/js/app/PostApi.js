export default class {
  static async post() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (response.status === 200) {
        return response.json();
      }
    } catch (error) {
      console.log("error has occured " + error);
    }
  }
}
