import {observable} from "mobx";

export default class WelcomeStore {
  @observable greeting = "Hello";

  constructor() {
    let that = this;
    setTimeout(function () {
      that.greeting = "Xin chào";
    }, 3000);
  }
}
