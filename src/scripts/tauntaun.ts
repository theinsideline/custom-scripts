export type BuildType = "comp" | "pro" | "frame";
export type Sizes = "xs" | "s" | "m" | "l" | "xl" | "xxl";

export class TawnTawn {
  constructor() {
    $(() => {
      this.location();
      this.myButtonBlack();
    });
  }

  private _map: Record<BuildType, Record<Sizes, string>> = {
    comp: {
      xs: "98757892",
      s: "98757901",
      m: "98757906",
      l: "98757907",
      xl: "98757910",
      xxl: "98757914",
    },
    pro: {
      xs: "98757917",
      s: "98757921",
      m: "98757926",
      l: "98757939",
      xl: "98757950",
      xxl: "98757951",
    },
    frame: {
      xs: "98758317",
      s: "98758319",
      m: "98758320",
      l: "98758325",
      xl: "98758326",
      xxl: "98758323",
    },
  };

  location() {
    const elements = document.getElementsByClassName("gtr");

    for (const element of Array.from(elements)) {
      element.addEventListener("click", () => {
        const filter1 = (
          document.querySelector("[name=filter1]") as HTMLSelectElement
        ).value;
        const filter2 = (
          document.querySelector("[name=filter2]") as HTMLSelectElement
        ).value;
        const filter3 = (
          document.querySelector("[name=filter3]") as HTMLSelectElement
        ).value;
        const filter4 = (
          document.querySelector("[name=filter4]") as HTMLSelectElement
        ).value;

        const query = new URLSearchParams(<Record<string, any>>{
          mode: "grid",
          limit: "24",
          sort: "popular",
          brand: "0",
          min: "0",
          max: "15000",
          filter: [filter1, filter2, filter3, filter4],
        });

        location.href = `https://www.theinsideline.ca/bikes/complete-bikes/all-bikes/?${query.toString()}`;
      });
    }
  }

  myButtonBlack() {
    const elements = document.getElementsByClassName("myButtonBlack2");

    for (const element of Array.from(elements)) {
      element.addEventListener("click", () => {
        const modelType = (
          document.querySelector("[name=selab]") as HTMLSelectElement
        ).value as BuildType;
        const modelSize = (
          document.querySelector("[name=selaz]") as HTMLSelectElement
        ).value as Sizes;

        let idTan = this._map[modelType][modelSize];

        const query = new URLSearchParams({
          id: this._map[modelType][modelSize],
          quantity: "1",
        });

        location.href = `https://www.theinsideline.ca/tauntaun-v2-carbonite.html?id=${query.toString()}&quantity=1`;
      });
    }
  }
}
