const BASE_URL = "https://dummyjson.com";

// Funzione per ottenere tutti i prodotti
export async function getAllProducts(limit = 12) {
  try {
    const res = await fetch(`${BASE_URL}/products?limit=${limit}`);
    if (!res.ok) throw new Error("Errore nel caricamento dei prodotti");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Errore nel recupero dei prodotti:", error);
    throw error; // Rilancia l'errore per gestione esterna
  }
}

// Funzione per ottenere un prodotto specifico per ID
export async function getProductById(id: string | number) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error("Prodotto non trovato");
    return res.json();
  } catch (error) {
    console.error("Errore nel recupero del prodotto:", error);
    throw error; // Rilancia l'errore per gestione esterna
  }
}

// Funzione per ottenere tutte le categorie
export async function getAllCategories() {
  try {
    const res = await fetch(`${BASE_URL}/products/categories`);
    if (!res.ok) throw new Error("Errore nel caricamento delle categorie");
    return res.json();
  } catch (error) {
    console.error("Errore nel recupero delle categorie:", error);
    throw error; // Rilancia l'errore per gestione esterna
  }
}

// Funzione per ottenere i prodotti di una specifica categoria
export async function getProductsByCategory(category: string) {
  try {
    const res = await fetch(`${BASE_URL}/products/category/${category}`);
    if (!res.ok) throw new Error("Errore nel filtrare i prodotti");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Errore nel recupero dei prodotti per categoria:", error);
    throw error; // Rilancia l'errore per gestione esterna
  }
}