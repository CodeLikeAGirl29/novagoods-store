const API_BASE = import.meta.env.VITE_API_URL;

export const api = {
  // Products
  getProducts: async () => {
    const res = await fetch(`${API_BASE}/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  },

  // Auth
  login: async (credentials: any) => {
    const res = await fetch(`${API_BASE}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (!res.ok) throw new Error('Login failed');
    return res.json();
  }
};