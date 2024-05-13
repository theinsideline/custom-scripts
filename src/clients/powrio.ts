import { Client, Common } from "./common";

export class PowrIo extends Common implements Client {
  private _url = "https://www.powr.io/powr.js?platform=html";
  private _id = "47c19166_1693585268";

  constructor() {
    super();
  }

  init() {
    const clientElement = super.createScriptElement(this._url);

    document.head.append(clientElement);

    const isExists = !!document.getElementsByClassName("powr-chat").length;
    if (isExists) return;

    const chatElement = document.createElement("div");
    chatElement.classList.add("powr-chat");
    chatElement.setAttribute("id", this._id);

    document.body.append(chatElement);
  }

  onLoadScript() {}
}
