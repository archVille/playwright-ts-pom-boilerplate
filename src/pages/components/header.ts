import { BasePageComponent } from "../../base.pageComponent";

export default class Footer extends BasePageComponent {
    readonly linksNavigation = {
      technologies: this.host.getByRole("link", { name: "Technologies" }),
      caseStudies: this.host.getByRole("link", { name: "Case studies" }),
      blog: this.host.getByRole("link", { name: "Blog" }),
      careers: this.host.getByRole("link", { name: "Careers" }),
      
    };

    readonly contactUsButton = this.host.locator('a >> text=Contact Us');

    readonly homeIcon = this.host.locator("a[class*='logos-codilime']");
  }