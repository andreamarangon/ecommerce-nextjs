const BASE_URL = "https://dummyjson.com";

export async function getAllProducts(limit = 12) {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}`);
  if (!res.ok) throw new Error("Errore nel caricamento dei prodotti");
  const data = await res.json();
  return data.products;
}

export async function getProductById(id: string | number) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Prodotto non trovato");
  return res.json();
}

export async function getAllCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);
  if (!res.ok) throw new Error("Errore nel caricamento delle categorie");
  return res.json();
}

export async function getProductsByCategory(category: string) {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  if (!res.ok) throw new Error("Errore nel filtrare i prodotti");
  const data = await res.json();
  return data.products;
}
