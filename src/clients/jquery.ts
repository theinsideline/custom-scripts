import { Client, Common } from "./common";

export class JQuery extends Common implements Client {
  private _url = "https://code.jquery.com/jquery-3.7.0.min.js";
  private _integrity = "sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=";

  constructor() {
    super();
  }

  init() {
    const clientElement = super.createScriptElement(this._url);

    clientElement.integrity = this._integrity;
    clientElement.crossOrigin = "anonymous";

    document.head.append(clientElement);
  }

  onLoadScript() {}
}
