import { Client, Common } from "./common";

export class LuckyOrange extends Common implements Client {
  private _url = "https://tools.luckyorange.com/core/lo.js?site-id=eb0ad181";

  constructor() {
    super();
  }

  init() {
    const clientElement = super.createScriptElement(this._url);

    document.head.append(clientElement);
  }

  onLoadScript() {}
}
