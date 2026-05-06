const BASE_URL = import.meta.env.VITE_API_URL || "/api";

export const api = {
  async getProducts() {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) throw new Error("Backend offline");
    return res.json();
  },

  async getProductById(id: string) {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "Product not found");
    }
    return res.json();
  },

  // Auth
  login: async (credentials: any) => {
    const res = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (!res.ok) throw new Error("Login failed");
    return res.json();
  },
};
