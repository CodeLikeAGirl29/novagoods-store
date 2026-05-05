import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

export default function NotFound() {
  return (
    <PageLayout>
      <section className="min-h-[80vh] flex items-center justify-center py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <div className="flex items-center justify-center mb-6">
            <Zap size={32} className="text-[hsl(var(--nova-blue))]" />
          </div>
          <p className="text-xs uppercase tracking-widest text-[hsl(var(--nova-blue))] font-semibold mb-3">
            404
          </p>
          <h1 className="font-heading text-4xl font-bold text-[hsl(var(--nova-text))] mb-4">
            Signal Lost
          </h1>
          <p className="text-[hsl(var(--nova-muted))] leading-relaxed mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[hsl(var(--nova-blue))] text-[hsl(var(--nova-bg))] font-semibold text-sm hover:bg-[hsl(var(--nova-violet))] transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))]"
          >
            Return Home
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>
    </PageLayout>
  );
}