import { createElementWithDocumentCreateElement } from "../helpers/createElementWithDocumentCreateElement.ts";
import router from "../main.ts";
import { getCategories } from "../api/api.ts";

export const homePage = async () => {
  const main = document.querySelector('main');
  if (main) {
    main.innerHTML = '';
    const categories = await getCategories();
    const categoriesGrid = createElementWithDocumentCreateElement('div', undefined, 'grid');
    main.appendChild(categoriesGrid);
    categories.forEach(category => {
      const categoryCard = createElementWithDocumentCreateElement('div', undefined, 'card cell');
      const categoryContentCard = createElementWithDocumentCreateElement('div', undefined, 'card-content');
      const cardContent = createElementWithDocumentCreateElement(
        'div',
        category.name,
        "content",
        () =>  router.navigate(`/${category.slug}`)
      );
      categoryContentCard.appendChild(cardContent)
      categoryCard.appendChild(categoryContentCard)
      categoriesGrid.appendChild(categoryCard);
    })

  }
}
