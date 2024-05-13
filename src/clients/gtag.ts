import { Client, Common } from "./common";

export class Gtag extends Common implements Client {
  private _url = "https://www.googletagmanager.com/gtag/js?id=G-8WH159BPHE";

  constructor() {
    super();
  }

  init() {
    const clientElement = super.createScriptElement(this._url);

    document.head.append(clientElement);

    clientElement.addEventListener("load", this.onLoadScript);
  }

  onLoadScript() {
    //@ts-ignore
    window.dataLayer = window.dataLayer || [];
   
    //@ts-ignore
    window.dataLayer.push("js", new Date());
    
    //@ts-ignore
    window.dataLayer.push("config", "G-8WH159BPHE");
  }
}
