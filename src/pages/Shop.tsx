import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import PageLayout from '../components/PageLayout';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';
import { api } from '../lib/api';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');
  const [dbProducts, setDbProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Use the utility instead of hardcoded fetch
        const data = await api.getProducts();

        const mappedData = data.map((p: any) => ({
          ...p,
          // Handle cases where database might return null or unexpected formats
          imageUrl: p.image_url || p.imageUrl,
          price: typeof p.price === 'string' ? parseFloat(p.price) : Number(p.price)
        }));

        setDbProducts(mappedData);
      } catch (error) {
        console.error('API Error:', error);
        // If the API fails, dbProducts remains empty, triggering the fallback automatically
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filtered = useMemo(() => {
    // Merge static products with DB products, prioritizing DB IDs
    let list = dbProducts.length > 0 ? dbProducts : products;

    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }
    if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [dbProducts, activeCategory, search, sortBy]);

  return (
    <PageLayout>
      {/* Page Header */}
      <section className="py-16 border-b border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-surface))] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,hsl(var(--nova-blue)/0.08),transparent)]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-[hsl(var(--nova-blue))] font-semibold mb-3">
              All Products
            </p>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-[hsl(var(--nova-text))]">
              The Collection
            </h1>
            <p className="text-[hsl(var(--nova-muted))] mt-3 max-w-md">
              {filtered.length} precision-crafted objects. Filter by category or search below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-[hsl(var(--nova-bg))]/95 backdrop-blur-md border-b border-[hsl(var(--nova-border))] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Category Pills */}
<div className="flex items-center gap-2 flex-wrap">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveCategory(cat)}
      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] ${
        activeCategory === cat
          ? 'bg-[hsl(var(--nova-blue))] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
          : 'border border-[hsl(var(--nova-border))] text-[hsl(var(--nova-text))] bg-[hsl(var(--nova-surface))] hover:border-[hsl(var(--nova-blue))] hover:text-white'
      }`}
    >
      {cat}
    </button>
  ))}
</div>

          {/* Search + Sort */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[hsl(var(--nova-muted))]" />
              <input
                type="search"
                placeholder="Search products…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-52 pl-8 pr-3 py-2 rounded-lg border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-surface))] text-[hsl(var(--nova-text))] text-xs placeholder:text-[hsl(var(--nova-muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nova-blue))]/50 transition-all duration-200"
              />
            </div>
            <div className="relative">
              <SlidersHorizontal size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[hsl(var(--nova-muted))] pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="pl-8 pr-3 py-2 rounded-lg border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-surface))] text-[hsl(var(--nova-text))] text-xs focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nova-blue))]/50 transition-all duration-200 appearance-none cursor-pointer"
                aria-label="Sort products"
              >
                <option value="default">Featured</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

    {/* Product Grid */}
<section className="py-12">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {loading ? (
      /* Loading State */
      <div className="flex flex-col items-center justify-center py-32">
        <div className="w-8 h-8 border-2 border-[hsl(var(--nova-blue))/0.3] border-t-[hsl(var(--nova-blue))] rounded-full animate-spin mb-4" />
        <p className="text-[hsl(var(--nova-muted))] text-sm animate-pulse">Initializing Collection...</p>
      </div>
    ) : filtered.length === 0 ? (
      /* Empty State */
      <div className="text-center py-24">
        <p className="text-[hsl(var(--nova-muted))] text-lg font-medium">No products found.</p>
        <p className="text-[hsl(var(--nova-muted))] text-sm mt-2">Try adjusting your filters or search term.</p>
      </div>
    ) : (
      /* Success State */
      <>
        <p className="text-xs text-[hsl(var(--nova-muted))] mb-6">
          Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </>
    )}
  </div>
</section>
    </PageLayout>
  );
}