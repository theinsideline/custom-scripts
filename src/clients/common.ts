export interface LoadOptions {
  defer?: boolean;
  async?: boolean;
}

export interface Client {
  init: () => void;
  onLoadScript: () => void;
}

export class Common {
  createScriptElement(url: string, loadOptions: LoadOptions = { defer: true }) {
    const scriptElement = document.createElement("script");
    scriptElement.defer = !!loadOptions.defer;
    scriptElement.async = !!loadOptions.async;
    scriptElement.src = url;

    return scriptElement;
  }

  createStyleElement(url: string) {
    const styleElement = document.createElement("link");
    styleElement.rel = "stylesheet";
    styleElement.href = url;

    return styleElement;
  }
}
