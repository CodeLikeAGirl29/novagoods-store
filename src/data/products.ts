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
    name: 'Obsidian Chronograph',
    slug: 'obsidian-chronograph',
    description: 'Precision-engineered timepiece with matte black ceramic case and sapphire crystal.',
    price: 1290.00,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=450&fit=crop',
    category: 'Watches',
    stock: 8,
  },
  {
    id: 'p2',
    name: 'Neon Pulse Headphones',
    slug: 'neon-pulse-headphones',
    description: 'Studio-grade audio with active noise cancellation and 40-hour battery life.',
    price: 349.00,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop',
    category: 'Audio',
    stock: 15,
  },
  {
    id: 'p3',
    name: 'Cipher Leather Wallet',
    slug: 'cipher-leather-wallet',
    description: 'Full-grain leather bifold with RFID blocking and slim-profile architecture.',
    price: 189.00,
    imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=450&fit=crop',
    category: 'Accessories',
    stock: 22,
  },
  {
    id: 'p4',
    name: 'Void Ceramic Mug',
    slug: 'void-ceramic-mug',
    description: 'Hand-thrown matte black ceramic with a double-wall vacuum seal for thermal retention.',
    price: 68.00,
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=450&fit=crop',
    category: 'Home',
    stock: 4,
  },
  {
    id: 'p5',
    name: 'Arc Titanium Pen',
    slug: 'arc-titanium-pen',
    description: 'CNC-machined aerospace titanium body with pressurized ink cartridge.',
    price: 145.00,
    imageUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&h=450&fit=crop',
    category: 'Stationery',
    stock: 0,
  },
  {
    id: 'p6',
    name: 'Phantom Sunglasses',
    slug: 'phantom-sunglasses',
    description: 'Polarized lenses with a lightweight titanium frame and UV400 protection.',
    price: 420.00,
    imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=450&fit=crop',
    category: 'Eyewear',
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
    name: 'Kinetic Sneakers',
    slug: 'kinetic-sneakers',
    description: 'Carbon-fiber reinforced sole with adaptive cushioning and reflective detailing.',
    price: 380.00,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=450&fit=crop',
    category: 'Footwear',
    stock: 18,
  },
  {
    id: 'p10',
    name: 'Signal Smart Ring',
    slug: 'signal-smart-ring',
    description: 'Biometric health tracking in a polished tungsten carbide ring form factor.',
    price: 599.00,
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=450&fit=crop',
    category: 'Wearables',
    stock: 6,
  },
];

export const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];