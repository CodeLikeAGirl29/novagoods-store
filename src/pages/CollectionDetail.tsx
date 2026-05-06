import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import PageLayout from '../components/PageLayout';

const CollectionDetail = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  const collectionProducts = products.filter(
    (p) => p.category.toLowerCase() === categoryName?.toLowerCase()
  );

  if (collectionProducts.length === 0) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-2xl font-bold text-[hsl(var(--nova-text))] mb-4">Collection not found</h2>
          <Link to="/collections" className="flex items-center gap-2 text-[hsl(var(--nova-blue))] hover:underline font-bold uppercase tracking-widest text-xs">
            <ArrowLeft size={16} /> Return to Collections
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="relative pt-12 pb-24 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,hsl(var(--nova-blue)/0.05),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between mb-12">
            <Link 
              to="/collections" 
              className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--nova-muted))] hover:text-[hsl(var(--nova-blue))] transition-colors"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              Back to Collections
            </Link>

            <nav className="hidden sm:flex items-center text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--nova-muted))]">
              <Link to="/collections" className="hover:text-[hsl(var(--nova-blue))] transition-colors">Collections</Link>
              <ChevronRight className="w-3 h-3 mx-2 opacity-50" />
              <span className="text-[hsl(var(--nova-text))] font-bold">{categoryName}</span>
            </nav>
          </div>

          <header className="mb-16">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl lg:text-7xl font-heading font-bold text-[hsl(var(--nova-text))] tracking-tighter capitalize"
            >
              {categoryName}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 80 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-[hsl(var(--nova-blue))] mt-6 mb-4" 
            />
            <p className="text-[hsl(var(--nova-muted))] text-lg max-w-2xl leading-relaxed">
              Explore our curated selection of {categoryName} hardware, engineered for peak operational performance.
            </p>
          </header>

          {/* Grid of products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collectionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bottom Back Link */}
          <div className="mt-20 pt-12 border-t border-[hsl(var(--nova-border))] flex justify-center">
            <Link 
              to="/collections" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[hsl(var(--nova-border))] text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--nova-text))] hover:border-[hsl(var(--nova-blue))/0.5] hover:text-[hsl(var(--nova-blue))] transition-all duration-300"
            >
              <ArrowLeft size={16} /> View All Series
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CollectionDetail;