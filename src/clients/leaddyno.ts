import { Client, Common } from "./common";

export class LeadDyno extends Common implements Client {
  private _url = "https://static.leaddyno.com/newScriptElement";
  private _key = "f8d861b8dece1789be7515d4decdb93bfb224ceb";

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
    window.LeadDyno.key = this._key;

    //@ts-ignore
    window.LeadDyno.recordVisit();

    //@ts-ignore
    window.LeadDyno.autoWatch();

    console.log(LeadDyno.name);
  }
}
