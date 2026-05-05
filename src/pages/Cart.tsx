import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import PageLayout from '../components/PageLayout';
import { useCartStore } from '../store/cartStore';

export default function Cart() {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <PageLayout>
      <section className="py-16 min-h-[70vh]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-[hsl(var(--nova-text))] mb-2">
              Your Cart
            </h1>
            <p className="text-[hsl(var(--nova-muted))] text-sm mb-10">
              {items.length === 0
                ? 'Your cart is empty.'
                : `${items.reduce((a, i) => a + i.quantity, 0)} item${items.reduce((a, i) => a + i.quantity, 0) !== 1 ? 's' : ''} in your cart`}
            </p>
          </motion.div>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-center py-24 border border-dashed border-[hsl(var(--nova-border))] rounded-2xl"
            >
              <ShoppingBag size={40} className="text-[hsl(var(--nova-muted))] mx-auto mb-4" />
              <p className="text-[hsl(var(--nova-muted))] mb-6">
                Nothing here yet. Start exploring the collection.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--nova-blue))] text-[hsl(var(--nova-bg))] font-semibold text-sm hover:bg-[hsl(var(--nova-violet))] transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))]"
              >
                Shop Now
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Items */}
              <div className="lg:col-span-2">
                <div className="bg-[hsl(var(--nova-surface))] border border-[hsl(var(--nova-border))] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-heading font-semibold text-[hsl(var(--nova-text))] text-sm uppercase tracking-wider">
                      Items
                    </h2>
                    <button
                      onClick={clearCart}
                      className="flex items-center gap-1.5 text-xs text-[hsl(var(--nova-muted))] hover:text-red-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-sm"
                    >
                      <Trash2 size={12} />
                      Clear all
                    </button>
                  </div>
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-[hsl(var(--nova-surface))] border border-[hsl(var(--nova-border))] rounded-xl p-6 sticky top-24 space-y-5">
                  <h2 className="font-heading font-semibold text-[hsl(var(--nova-text))] text-sm uppercase tracking-wider">
                    Order Summary
                  </h2>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-[hsl(var(--nova-muted))]">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[hsl(var(--nova-muted))]">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    {subtotal < 500 && (
                      <p className="text-[10px] text-[hsl(var(--nova-blue))] bg-[hsl(var(--nova-blue))]/5 border border-[hsl(var(--nova-blue))]/20 rounded-md px-3 py-2">
                        Add ${(500 - subtotal).toFixed(2)} more for free shipping
                      </p>
                    )}
                    <div className="border-t border-[hsl(var(--nova-border))] pt-3 flex justify-between font-semibold text-[hsl(var(--nova-text))]">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Link
                    to="/checkout"
                    className="block w-full text-center px-6 py-3.5 rounded-lg bg-[hsl(var(--nova-blue))] text-[hsl(var(--nova-bg))] font-semibold text-sm hover:bg-[hsl(var(--nova-violet))] transition-all duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--nova-surface))]"
                  >
                    Proceed to Checkout
                  </Link>

                  <Link
                    to="/shop"
                    className="block w-full text-center text-xs text-[hsl(var(--nova-muted))] hover:text-[hsl(var(--nova-text))] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] rounded-sm"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}