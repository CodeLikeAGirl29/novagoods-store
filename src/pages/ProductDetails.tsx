import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, ShoppingBag, Truck, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { useCartStore } from '../store/cartStore';

// Define the interface to ensure Type Safety
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
}

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const addItem = useCartStore((s) => s.addItem);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Use the full URL if your backend is on 5000 and frontend on 5173
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!res.ok) throw new Error("Product not found");

        const data = await res.json();

        // Normalize data: ensure price is a number and image key matches
        setProduct({
          ...data,
          imageUrl: data.image_url || data.imageUrl,
          price: typeof data.price === 'string' ? parseFloat(data.price) : data.price
        });
      } catch (err) {
        console.error("System sync failed:", err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleAdd = () => {
    if (product) {
      addItem(product);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--nova-bg))]">
        <div className="w-12 h-12 border-2 border-[hsl(var(--nova-blue))]/20 border-t-[hsl(var(--nova-blue))] rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[hsl(var(--nova-bg))] text-white font-mono p-4 text-center">
        <p className="text-[hsl(var(--nova-blue))] mb-4">SYSTEM_ERROR: NULL_REFERENCE</p>
        <h1 className="text-2xl font-bold mb-8 uppercase tracking-tighter">Product Data Not Found</h1>
        <Link to="/shop" className="px-6 py-3 border border-[hsl(var(--nova-border))] rounded-xl hover:bg-[hsl(var(--nova-blue))] hover:text-black transition-all">
          Return to Collection
        </Link>
      </div>
    );
  }

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-[hsl(var(--nova-muted))] hover:text-[hsl(var(--nova-text))] transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium uppercase tracking-widest">Return to Collection</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-surface))]"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--nova-bg))]/40 to-transparent" />
          </motion.div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-[hsl(var(--nova-blue))]/10 text-[hsl(var(--nova-blue))] text-[10px] font-bold uppercase tracking-[0.2em] border border-[hsl(var(--nova-blue))]/20">
                {product.category}
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter leading-tight">
                {product.name}
              </h1>
              <p className="text-3xl font-mono text-[hsl(var(--nova-blue))]">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-[hsl(var(--nova-muted))] text-lg leading-relaxed max-w-xl">
              {product.description}
            </p>

            <div className="pt-4 space-y-6">
              <button
                onClick={handleAdd}
                disabled={product.stock === 0}
                className={`w-full lg:w-max px-12 py-5 rounded-2xl font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3 ${added
                  ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                  : 'bg-[hsl(var(--nova-blue))] text-[hsl(var(--nova-bg))] hover:shadow-[0_0_30px_rgba(185,242,255,0.3)]'
                  } ${product.stock === 0 && 'opacity-50 cursor-not-allowed bg-[hsl(var(--nova-muted))]'}`}
              >
                {added ? 'System Updated' : 'Add to System'}
                {added ? <ShieldCheck size={20} /> : <ShoppingBag size={20} />}
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[hsl(var(--nova-border))]">
                <div className="flex items-center gap-3 text-xs text-[hsl(var(--nova-muted))]">
                  <Zap size={16} className="text-[hsl(var(--nova-blue))]" />
                  <span>Next-Day Sync</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[hsl(var(--nova-muted))]">
                  <ShieldCheck size={16} className="text-[hsl(var(--nova-blue))]" />
                  <span>2 Year Warranty</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[hsl(var(--nova-muted))]">
                  <Truck size={16} className="text-[hsl(var(--nova-blue))]" />
                  <span>Secure Protocol</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}