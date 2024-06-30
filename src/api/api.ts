export type Category = {
  slug: string;
  name: string;
  url: string;
}

export type Product = {
  id: number;
  title: string;
}

export const getCategories = async (): Promise<Category[]> => {
  const data = await fetch('https://dummyjson.com/products/categories');
  return await data.json();
}

export const getProductsByCategory = async (category?: string): Promise<Product[]> => {
  const data = await fetch(`https://dummyjson.com/products/category/${category}`);
  const { products } = await data.json();

  return products;
}

export const getProductById = async (id?: string): Promise<Product> => {
  const data = await fetch(`https://dummyjson.com/products/${id}`);

  return await data.json();
}
