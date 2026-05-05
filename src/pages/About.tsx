import { motion } from 'framer-motion';
import { Globe, Target, Zap } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const values = [
  {
    icon: Zap,
    title: 'Precision Over Volume',
    description:
      'We curate fewer products with greater intention. Every item in our catalog has earned its place through rigorous quality evaluation.',
  },
  {
    icon: Target,
    title: 'Purposeful Design',
    description:
      'Form follows function, but never at the expense of beauty. Our products exist at the intersection of utility and aesthetic mastery.',
  },
  {
    icon: Globe,
    title: 'Responsible Sourcing',
    description:
      'We partner exclusively with manufacturers who share our commitment to ethical labor practices and environmental stewardship.',
  },
];

export default function About() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-surface))]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,hsl(var(--nova-blue)/0.08),transparent)]" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-widest text-[hsl(var(--nova-blue))] font-semibold">
              Our Story
            </p>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-[hsl(var(--nova-text))] leading-tight">
              Built on the belief that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--nova-blue))] to-[hsl(var(--nova-violet))]">
                less is more
              </span>
            </h1>
            <p className="text-[hsl(var(--nova-muted))] text-lg max-w-2xl mx-auto leading-relaxed">
              Nova Goods was founded in 2021 by a team of designers and engineers who were tired of compromise. We set out to build a store where every product is worth owning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-[hsl(var(--nova-border))] aspect-[16/7]"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=525&fit=crop"
              alt="Nova Goods studio workspace with precision tools and products"
              width={1200}
              height={525}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[hsl(var(--nova-surface))] border-y border-[hsl(var(--nova-border))]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-[hsl(var(--nova-blue))] font-semibold mb-3">
              What We Stand For
            </p>
            <h2 className="font-heading text-3xl font-bold text-[hsl(var(--nova-text))]">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-xl border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-bg))] hover:border-[hsl(var(--nova-blue))]/30 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-[hsl(var(--nova-blue))]/10 border border-[hsl(var(--nova-blue))]/20 w-fit mb-5">
                  <v.icon size={20} className="text-[hsl(var(--nova-blue))]" />
                </div>
                <h3 className="font-heading font-semibold text-[hsl(var(--nova-text))] text-lg mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-[hsl(var(--nova-muted))] leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2021', label: 'Founded' },
              { value: '10K+', label: 'Customers' },
              { value: '100%', label: 'Satisfaction' },
              { value: '48h', label: 'Avg. Delivery' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <p className="font-heading text-3xl font-bold text-[hsl(var(--nova-blue))]">
                  {stat.value}
                </p>
                <p className="text-xs text-[hsl(var(--nova-muted))] mt-1 uppercase tracking-wider font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}