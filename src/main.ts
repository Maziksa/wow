import "./style.css";

import { Header } from "./components/header/header.ts";
import Navigo from "navigo";
import { categoryPage } from "./pages/categoryPage.ts";
import { homePage } from "./pages/homepagePage.ts";
import { aboutPage } from "./pages/aboutPage.ts";
import { productPage } from "./pages/productPage.ts";

const router = new Navigo('/');

document.querySelector<HTMLDivElement>('body')!.innerHTML = `
  <header></header>
  <main class="main"></main>
  <footer class="footer"></footer>
`;

Header();
//Footer();

router.on({
  '/about': aboutPage,
  '/': homePage,
  '/:category': categoryPage,
  '/:category/:productId': productPage
});
//router.resolve('/');


export default router;
