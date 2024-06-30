import { createElementWithDocumentCreateElement } from "../../helpers/createElementWithDocumentCreateElement.ts";
import router from "../../main.ts";

export const Header = () => {
  const headerElem = document.querySelector<HTMLDivElement>('header');
  if (headerElem) {
    headerElem.innerHTML = `
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start" id="nav-items">
          </div>
        </div>
      </nav>
    `;
    const aboutButton = createElementWithDocumentCreateElement(
      'a',
      'About',
      "navbar-item",
      () =>  router.navigate("about")
    );
    const homeButton = createElementWithDocumentCreateElement(
      'a',
      'Home',
      "navbar-item",
      () =>  router.navigate("/")
    );
    headerElem.querySelector('#nav-items')?.appendChild(homeButton);
    headerElem.querySelector('#nav-items')?.appendChild(aboutButton);
  }
}
