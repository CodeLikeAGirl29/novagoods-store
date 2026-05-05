import { AnimatePresence, motion } from 'framer-motion';
import { Menu, ShoppingBag, X, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const cartCount = useCartStore((s) => s.items.reduce((acc, i) => acc + i.quantity, 0));

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[hsl(var(--nova-bg))]/95 backdrop-blur-md border-b border-[hsl(var(--nova-border))]'
          : 'bg-transparent backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] rounded-md"
          aria-label="Nova Goods home"
        >
          <Zap
            size={20}
            className="text-[hsl(var(--nova-blue))] group-hover:text-[hsl(var(--nova-violet))] transition-colors duration-200"
          />
          <span className="font-heading text-xl font-bold tracking-tight text-[hsl(var(--nova-text))]">
            Nova<span className="text-[hsl(var(--nova-blue))]">Goods</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] rounded-sm px-1 py-0.5 group ${active
                    ? 'text-[hsl(var(--nova-blue))]'
                    : 'text-[hsl(var(--nova-muted))] hover:text-[hsl(var(--nova-text))]'
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-[hsl(var(--nova-blue))] transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative p-2 rounded-lg text-[hsl(var(--nova-muted))] hover:text-[hsl(var(--nova-blue))] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))]"
            aria-label={`Shopping cart, ${cartCount} items`}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[hsl(var(--nova-blue))] text-[hsl(var(--nova-bg))] text-[10px] font-bold flex items-center justify-center"
              >
                {cartCount > 9 ? '9+' : cartCount}
              </motion.span>
            )}
          </Link>

          <Link
            to="/shop"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-[hsl(var(--nova-blue))] text-[hsl(var(--nova-bg))] text-sm font-semibold hover:bg-[hsl(var(--nova-violet))] transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--nova-bg))]"
          >
            Shop Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-[hsl(var(--nova-muted))] hover:text-[hsl(var(--nova-text))] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-16 right-0 bottom-0 w-72 bg-[hsl(var(--nova-surface))] border-l border-[hsl(var(--nova-border))] z-50 md:hidden flex flex-col p-8 gap-6"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => {
                const active = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] rounded-sm ${active ? 'text-[hsl(var(--nova-blue))]' : 'text-[hsl(var(--nova-muted))] hover:text-[hsl(var(--nova-text))]'
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-auto">
                <Link
                  to="/shop"
                  className="block w-full text-center px-6 py-3 rounded-lg bg-[hsl(var(--nova-blue))] text-[hsl(var(--nova-bg))] font-semibold hover:bg-[hsl(var(--nova-violet))] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))]"
                >
                  Shop Now
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}