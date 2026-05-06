import { motion } from "framer-motion";
import {
  ArrowRight,
  Layout,
  Cpu,
  Watch,
  Headphones,
  Monitor,
} from "lucide-react";
import { Link } from "react-router-dom";
import { categories, products } from "../data/products";
import PageLayout from "../components/PageLayout";

// Helper to provide specific icons/descriptions for your dynamic categories
const getCategoryMeta = (category: string) => {
  const meta: Record<string, { subtitle: string; desc: string; icon: any }> = {
    Watches: {
      subtitle: "Precision Timing",
      desc: "High-end chronographs and smart-rings engineered with sapphire glass.",
      icon: Watch,
    },
    Audio: {
      subtitle: "Sonic Purity",
      desc: "Studio-grade acoustics and spatial audio delivery systems.",
      icon: Headphones,
    },
    "Gaming Bundles": {
      subtitle: "Complete Ecosystems",
      desc: "The ultimate zenith battlestations. From liquid-cooled PCs to ergonomic seating.",
      icon: Monitor,
    },
    Home: {
      subtitle: "Architectural Objects",
      desc: "Minimalist forms and thermal-retention ceramics for the modern dwelling.",
      icon: Layout,
    },
  };

  return (
    meta[category] || {
      subtitle: "Nova Systems",
      desc: "Cutting-edge hardware and accessories designed for daily operational efficiency.",
      icon: Cpu,
    }
  );
};

export default function Collections() {
  const displayCategories = categories.filter((c) => c !== "All");

  return (
    <PageLayout>
      <section className="py-20 bg-[hsl(var(--nova-bg))] relative overflow-hidden">
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

            <svg
              className="absolute -bottom-2 left-0 w-full h-1 overflow-visible"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0,0.5 L 100,0.5"
                fill="transparent"
                stroke="hsl(var(--nova-blue))"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </header>

          <div className="space-y-12">
            {displayCategories.map((category, i) => {
              const meta = getCategoryMeta(category);
              const coverProduct = products.find(
                (p) => p.category === category,
              );

              return (
                <motion.div
                  key={category}
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
                        <meta.icon
                          size={24}
                          className="text-[hsl(var(--nova-blue))]"
                        />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--nova-muted))]">
                          {meta.subtitle}
                        </p>
                        <h2 className="text-3xl font-bold text-[hsl(var(--nova-text))]">
                          {category}
                        </h2>
                      </div>
                    </div>

                    <p className="text-[hsl(var(--nova-muted))] leading-relaxed text-lg max-w-md">
                      {meta.desc}
                    </p>

                    <Link
                      to={`/collections/${category.toLowerCase()}`}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[hsl(var(--nova-blue))] hover:gap-4 transition-all"
                    >
                      Explore Collection <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Image Side */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={coverProduct?.imageUrl}
                      alt={category}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--nova-surface))] via-transparent to-transparent lg:block hidden" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
