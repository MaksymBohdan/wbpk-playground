export default class Post {
  constructor(title, logo) {
    this.title = title;
    this.logo = logo;
    this.date = new Date();
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      data: this.date.toJSON(),
      logo: this.logo
    }, null, 2);
  }

  get uppercaseTitle() {
    return this.title.toUppercase();
  }
}
