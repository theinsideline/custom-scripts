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
    $(".gtr").click(() => {
      const filter1 = $("[name=filter1]").val();
      const filter2 = $("[name=filter2]").val();
      const filter3 = $("[name=filter3]").val();
      const filter4 = $("[name=filter4]").val();

      const query = new URLSearchParams(<Record<string, any>>{
        mode: "grid",
        limit: "24",
        sort: "popular",
        brand: "0",
        min: "0",
        max: "15000",
        filter: [
          $("[name=filter1]").val(),
          $("[name=filter2]").val(),
          $("[name=filter3]").val(),
          $("[name=filter4]").val(),
        ],
      });

      location.href = `https://www.theinsideline.ca/bikes/complete-bikes/all-bikes/?${query.toString()}`;
    });
  }

  myButtonBlack() {
    $(".myButtonBlack2").click(() => {
      const modelType = $("[name=selab]").val() as BuildType;
      const modelSize = $("[name=selaz]").val() as Sizes;

      let idTan = this._map[modelType][modelSize];

      const query = new URLSearchParams({
        id: this._map[modelType][modelSize],
        quantity: "1",
      });

      location.href = `https://www.theinsideline.ca/tauntaun-v2-carbonite.html?id=${query.toString()}&quantity=1`;
    });
  }
}
