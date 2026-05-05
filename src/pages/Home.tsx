import { motion } from 'framer-motion';
import { ArrowRight, Package, Shield, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const featured = products.slice(0, 5);

const features = [
  {
    icon: Zap,
    title: 'Precision Crafted',
    description: 'Every product is engineered to exacting standards with premium materials.',
  },
  {
    icon: Shield,
    title: 'Lifetime Guarantee',
    description: 'We stand behind every item with a comprehensive lifetime warranty.',
  },
  {
    icon: Package,
    title: 'Discreet Delivery',
    description: 'Signature matte-black packaging delivered within 2 business days.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Home() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[hsl(var(--nova-bg))]" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,hsl(var(--nova-blue)/0.15),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_60%,hsl(var(--nova-violet)/0.12),transparent)]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(hsl(var(--nova-blue)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--nova-blue)) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(var(--nova-blue))]/30 bg-[hsl(var(--nova-blue))]/5 text-[hsl(var(--nova-blue))] text-xs font-semibold uppercase tracking-widest">
              <Zap size={12} />
              New Collection — 2026
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-[hsl(var(--nova-text))] leading-[1.05] tracking-tight">
              <Sparkles /> Where everyday things go{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--nova-blue))] to-[hsl(var(--nova-violet))]">
                  supernova
                </span>
              </span>
            </h1>

            <p className="text-lg text-[hsl(var(--nova-muted))] max-w-xl mx-auto leading-relaxed">
              Handpicked goods you didn’t know you needed. Precision-crafted for those who demand more from the everyday.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[hsl(var(--nova-blue))] text-[hsl(var(--nova-bg))] font-semibold text-sm hover:bg-[hsl(var(--nova-violet))] transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--nova-bg))]"
              >
                Explore Collection
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[hsl(var(--nova-border))] text-[hsl(var(--nova-muted))] font-semibold text-sm hover:border-[hsl(var(--nova-blue))]/40 hover:text-[hsl(var(--nova-text))] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--nova-bg))]"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[10px] uppercase tracking-widest text-[hsl(var(--nova-muted))]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[hsl(var(--nova-blue))]/60 to-transparent" />
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-16 border-y border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-surface))]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-[hsl(var(--nova-blue))]/10 border border-[hsl(var(--nova-blue))]/20 flex-shrink-0">
                  <f.icon size={18} className="text-[hsl(var(--nova-blue))]" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[hsl(var(--nova-text))] text-sm mb-1">
                    {f.title}
                  </h3>
                  <p className="text-xs text-[hsl(var(--nova-muted))] leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-[hsl(var(--nova-blue))] font-semibold mb-2">
                Featured
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[hsl(var(--nova-text))]">
                Curated Selection
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[hsl(var(--nova-muted))] hover:text-[hsl(var(--nova-blue))] transition-colors duration-200 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] rounded-sm"
            >
              View all
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featured.map((product, i) => (
              <motion.div
                key={product.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[hsl(var(--nova-border))] text-[hsl(var(--nova-muted))] text-sm font-semibold hover:border-[hsl(var(--nova-blue))]/40 hover:text-[hsl(var(--nova-text))] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--nova-bg))]"
            >
              Browse All Products
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(var(--nova-surface))] border-y border-[hsl(var(--nova-border))]" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,hsl(var(--nova-violet)/0.1),transparent)]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-[hsl(var(--nova-text))] leading-tight">
              Designed for those who{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--nova-blue))] to-[hsl(var(--nova-violet))]">
                demand more
              </span>
            </h2>
            <p className="text-[hsl(var(--nova-muted))] max-w-lg mx-auto leading-relaxed">
              Join thousands of discerning customers who have elevated their everyday with Nova Goods.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[hsl(var(--nova-blue))] text-[hsl(var(--nova-bg))] font-semibold text-sm hover:bg-[hsl(var(--nova-violet))] transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--nova-bg))]"
            >
              Shop the Collection
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}