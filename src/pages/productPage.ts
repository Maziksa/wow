import { Match } from "navigo";
import { getProductById } from "../api/api.ts";

export const productPage = async (match: Match) => {
  const main = document.querySelector('main');

  if (main) {
    main.innerHTML = '';
    const product = await getProductById(match?.data?.productId);
    main.innerHTML = JSON.stringify(product);
   }
}
