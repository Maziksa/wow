import { Match } from "navigo";
import { getProductsByCategory } from "../api/api.ts";
import { createElementWithDocumentCreateElement } from "../helpers/createElementWithDocumentCreateElement.ts";
import router from "../main.ts";

export const categoryPage = async (match: Match) => {
  const main = document.querySelector('main');

  if (main) {
    main.innerHTML = '';
    const products = await getProductsByCategory(match?.data?.category);
    const categoriesGrid = createElementWithDocumentCreateElement('div', undefined, 'grid');
    main.appendChild(categoriesGrid);
    products.forEach(product => {
      const categoryCard = createElementWithDocumentCreateElement('div', undefined, 'card cell');
      const categoryContentCard = createElementWithDocumentCreateElement('div', undefined, 'card-content');
      const cardContent = createElementWithDocumentCreateElement(
        'div',
        product.title,
        "content",
        () =>  router.navigate(`/${match?.data?.category}/${product.id}`)
      );
      categoryContentCard.appendChild(cardContent)
      categoryCard.appendChild(categoryContentCard)
      categoriesGrid.appendChild(categoryCard);
    })
  }
}
