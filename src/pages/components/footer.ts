import { BasePageComponent } from "../../base.pageComponent";

export default class Footer extends BasePageComponent {
    readonly links = {
      productServices: this.host.getByRole("link", { name: "Product Design" }),
      
    };
  }