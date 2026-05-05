import { motion } from 'framer-motion';
import { ArrowRight, Crown, Ghost, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const collections = [
  {
    id: 'core',
    title: 'The Core',
    subtitle: 'Essential Systems',
    description: 'Foundational objects engineered for daily operational efficiency. Minimalist forms in matte finishes.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    color: 'var(--nova-blue)'
  },
  {
    id: 'apex',
    title: 'The Apex',
    subtitle: 'Peak Performance',
    description: 'Limited-run pieces featuring rare materials and integrated sapphire crystal glass interfaces.',
    icon: Crown,
    image: 'https://images.unsplash.com/photo-1508685096489-7aac291ba59e?auto=format&fit=crop&q=80&w=800',
    color: 'var(--nova-violet)'
  },
  {
    id: 'void',
    title: 'The Void',
    subtitle: 'Absolute Stealth',
    description: 'Stealth-mode aesthetic. Absolute black carbon fiber with deep-blue reactive lighting signatures.',
    icon: Ghost,
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800',
    color: 'var(--nova-blue)'
  }
];

export default function Collections() {
  return (
    <PageLayout>
      <section className="py-20 bg-[hsl(var(--nova-bg))] relative overflow-hidden">
        {/* Subtle Sapphire Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,hsl(var(--nova-blue)/0.1),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <header className="max-w-2xl mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--nova-blue))] font-bold mb-4"
            >
              Curated Series
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-heading font-bold text-[hsl(var(--nova-text))] tracking-tighter"
            >
              The Collections
            </motion.h1>
          </header>

          <div className="space-y-12">
            {collections.map((col, i) => (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-surface))] hover:border-[hsl(var(--nova-blue)/0.4)] transition-all duration-500"
              >
                {/* Content Side */}
                <div className="p-8 lg:p-16 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[hsl(var(--nova-bg))] border border-[hsl(var(--nova-border))] group-hover:border-[hsl(var(--nova-blue)/0.3)] transition-colors">
                      <col.icon size={24} className="text-[hsl(var(--nova-blue))]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--nova-muted))]">{col.subtitle}</p>
                      <h2 className="text-3xl font-bold text-[hsl(var(--nova-text))]">{col.title}</h2>
                    </div>
                  </div>

                  <p className="text-[hsl(var(--nova-muted))] leading-relaxed text-lg max-w-md">
                    {col.description}
                  </p>

                  <Link
                    to={`/shop?category=${col.title}`}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[hsl(var(--nova-blue))] hover:gap-4 transition-all"
                  >
                    Explore Series <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Image Side */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--nova-surface))] via-transparent to-transparent lg:block hidden" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}