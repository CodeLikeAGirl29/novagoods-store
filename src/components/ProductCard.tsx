import { motion } from 'framer-motion';
import { Check, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-[hsl(var(--nova-surface))] border border-[hsl(var(--nova-border))] rounded-xl overflow-hidden hover:border-[hsl(var(--nova-blue))]/40 hover:shadow-lg hover:shadow-[hsl(var(--nova-blue))]/5 transition-all duration-300"
    >
      <Link to={`/product/${product.id}`}>
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[hsl(var(--nova-bg))]">
          <img
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {product.stock <= 5 && product.stock > 0 && (
            <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-[hsl(var(--nova-violet))]/90 text-white text-[10px] font-semibold uppercase tracking-wider">
              Low Stock
            </span>
          )}
          {product.stock === 0 && (
            <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-[hsl(var(--nova-muted))]/80 text-white text-[10px] font-semibold uppercase tracking-wider">
              Sold Out
            </span>
          )}
          <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-[hsl(var(--nova-bg))]/80 backdrop-blur-sm text-[hsl(var(--nova-blue))] text-[10px] font-semibold uppercase tracking-wider border border-[hsl(var(--nova-blue))]/20">
            {product.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-heading font-semibold text-[hsl(var(--nova-text))] text-base leading-snug line-clamp-1">
            <Link to={`/product/${product.id}`} className="hover:text-[hsl(var(--nova-blue))]">
              {product.name}
            </Link>
          </h3>
          <p className="text-xs text-[hsl(var(--nova-muted))] mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="font-heading font-bold text-lg text-[hsl(var(--nova-text))]">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={handleAdd}
            disabled={product.stock === 0}
            aria-label={`Add ${product.name} to cart`}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--nova-surface))] ${product.stock === 0
              ? 'bg-[hsl(var(--nova-border))] text-[hsl(var(--nova-muted))] cursor-not-allowed'
              : added
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-[hsl(var(--nova-blue))]/10 text-[hsl(var(--nova-blue))] border border-[hsl(var(--nova-blue))]/20 hover:bg-[hsl(var(--nova-blue))] hover:text-[hsl(var(--nova-bg))] hover:scale-105'
              }`}
          >
            {added ? (
              <>
                <Check size={14} />
                Added
              </>
            ) : (
              <>
                <ShoppingBag size={14} />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </motion.article >
  );
}