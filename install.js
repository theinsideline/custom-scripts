//LOAD "CUSTOM SCRIPTS" FROM GIT REPOSITORY
const CustomScriptsInstall = {
  createScriptElement: (url) => {
    const scriptElement = document.createElement("script");
    scriptElement.defer = true;
    scriptElement.src = url;

    return scriptElement;
  },
  load: () => {
    const appElement = CustomScriptsInstall.createScriptElement(
      "https://theinsideline.github.io/custom-scripts/bundle.js"
    );

    document.head.append(appElement);
  },
};

document.addEventListener("DOMContentLoaded", CustomScriptsInstall.load);
