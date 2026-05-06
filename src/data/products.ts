export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'VR Headset',
    slug: 'vr-headset',
    description: 'Immersive virtual reality experience with high-resolution displays and intuitive controls.',
    price: 550.00,
    imageUrl: 'https://xtxsjngmweipiatfbjpr.supabase.co/storage/v1/object/public/products/vr-headset-product.png',
    category: 'Gaming',
    stock: 8,
  },
  {
    id: 'p2',
    name: 'Windows Laptop',
    slug: 'windows-laptop',
    description: 'Powerful performance with a sleek design and all-day battery life.',
    price: 349.00,
    imageUrl: 'https://xtxsjngmweipiatfbjpr.supabase.co/storage/v1/object/public/products/laptop-product.png',
    category: 'Computing',
    stock: 6,
  },
  {
    id: 'p3',
    name: 'Nova Zenith Battlestation',
    slug: 'nova-zenith-battlestation',
    description: 'The ultimate all-in-one gaming ecosystem. This comprehensive bundle features a high-performance liquid-cooled PC (RTX 40-series), spatial audio desktop speakers, a custom mechanical keyboard, and a precision wireless mouse.',
    price: 5499.00,
    imageUrl: 'https://xtxsjngmweipiatfbjpr.supabase.co/storage/v1/object/public/products/gaming-setup-product.png',
    category: 'Gaming Bundle',
    stock: 3,
  },
  {
    id: 'p4',
    name: 'White Desk',
    slug: 'white-desk',
    description: 'Hand-thrown matte black ceramic with a double-wall vacuum seal for thermal retention.',
    price: 68.00,
    imageUrl: 'https://xtxsjngmweipiatfbjpr.supabase.co/storage/v1/object/public/products/desk-product.png',
    category: 'Home',
    stock: 4,
  },
  {
    id: 'p5',
    name: 'Minimalist Desk Shelf',
    slug: 'minimalist-desk-shelf',
    description: 'Hand-crafted walnut desk shelf designed to elevate monitors and organize essential workspace tools.',
    price: 160.00,
    imageUrl: 'https://xtxsjngmweipiatfbjpr.supabase.co/storage/v1/object/public/products/mini-desk-shelf-product.png',
    category: 'Home',
    stock: 8,
  },
  {
    id: 'p6',
    name: 'Ultrawide Monitor',
    slug: 'ultrawide-monitor',
    description: '34-inch curved Nano IPS display with 144Hz refresh rate and ultra-wide QHD resolution for immersive workflows.',
    price: 799.00,
    imageUrl: 'https://xtxsjngmweipiatfbjpr.supabase.co/storage/v1/object/public/products/monitor-product.png',
    category: 'Computing',
    stock: 11,
  },
  {
    id: 'p7',
    name: 'Stealth Backpack',
    slug: 'stealth-backpack',
    description: 'Ballistic nylon construction with hidden pockets and a padded 16" laptop sleeve.',
    price: 295.00,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=450&fit=crop',
    category: 'Bags',
    stock: 7,
  },
  {
    id: 'p8',
    name: 'Lumen Desk Lamp',
    slug: 'lumen-desk-lamp',
    description: 'Tunable white LED with wireless charging base and touch-sensitive dimmer.',
    price: 229.00,
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=450&fit=crop',
    category: 'Home',
    stock: 3,
  },
  {
    id: 'p9',
    name: 'Multitool',
    slug: 'multitool',
    description: 'Compact multi-functional tool with a variety of attachments for different tasks.',
    price: 110.00,
    imageUrl: 'https://xtxsjngmweipiatfbjpr.supabase.co/storage/v1/object/public/products/multitool-product.png',
    category: 'Tools',
    stock: 18,
  },
  {
    id: 'p10',
    name: 'Smart Water Bottle',
    slug: 'smart-water-bottle',
    description: 'Stainless steel smart bottle with LED hydration reminders and integrated health app syncing for daily wellness.',
    price: 85.00,
    imageUrl: 'https://xtxsjngmweipiatfbjpr.supabase.co/storage/v1/object/public/products/waterbottle-product.png',
    category: 'Wellness',
    stock: 16,
  },
];

export const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];