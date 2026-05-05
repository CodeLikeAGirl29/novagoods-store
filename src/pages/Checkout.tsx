import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { ChevronRight, CreditCard, Lock } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';
import PageLayout from '../components/PageLayout';
import { useCartStore } from '../store/cartStore';

const schema = z.object({
  email: z.string().email('Valid email required'),
  firstName: z.string().min(1, 'First name required'),
  lastName: z.string().min(1, 'Last name required'),
  address: z.string().min(5, 'Address required'),
  city: z.string().min(1, 'City required'),
  postalCode: z.string().min(3, 'Postal code required'),
  country: z.string().min(1, 'Country required'),
  cardNumber: z.string().min(16, 'Card number required').max(19),
  expiry: z.string().min(5, 'Expiry required'),
  cvv: z.string().min(3, 'CVV required').max(4),
});

type FormData = z.infer<typeof schema>;

export default function Checkout() {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const [submitted, setSubmitted] = useState(false);

  const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 15;
  const total = subtotal + shipping;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    clearCart();
    toast.success('Order placed successfully!');
  };

  if (submitted) {
    return (
      <PageLayout>
        <section className="min-h-[70vh] flex items-center justify-center py-24 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-md"
          >
            <div className="w-16 h-16 rounded-full bg-[hsl(var(--nova-blue))]/10 border border-[hsl(var(--nova-blue))]/30 flex items-center justify-center mx-auto mb-6">
              <CreditCard size={28} className="text-[hsl(var(--nova-blue))]" />
            </div>
            <h1 className="font-heading text-3xl font-bold text-[hsl(var(--nova-text))] mb-3">
              Order Confirmed
            </h1>
            <p className="text-[hsl(var(--nova-muted))] leading-relaxed">
              Thank you for your order. You'll receive a confirmation email shortly. Your items will be dispatched within 48 hours.
            </p>
          </motion.div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-2">
              <Lock size={14} className="text-[hsl(var(--nova-blue))]" />
              <span className="text-xs text-[hsl(var(--nova-blue))] font-semibold uppercase tracking-wider">
                Secure Checkout
              </span>
            </div>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-[hsl(var(--nova-text))]">
              Complete Your Order
            </h1>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form Fields */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact */}
                <div className="bg-[hsl(var(--nova-surface))] border border-[hsl(var(--nova-border))] rounded-xl p-6 space-y-5">
                  <h2 className="font-heading font-semibold text-[hsl(var(--nova-text))] text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[hsl(var(--nova-blue))]/20 text-[hsl(var(--nova-blue))] text-[10px] font-bold flex items-center justify-center">1</span>
                    Contact
                  </h2>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[hsl(var(--nova-muted))] mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-2.5 rounded-lg border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-bg))] text-[hsl(var(--nova-text))] text-sm placeholder:text-[hsl(var(--nova-muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nova-blue))]/50 transition-all duration-200"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Shipping */}
                <div className="bg-[hsl(var(--nova-surface))] border border-[hsl(var(--nova-border))] rounded-xl p-6 space-y-5">
                  <h2 className="font-heading font-semibold text-[hsl(var(--nova-text))] text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[hsl(var(--nova-blue))]/20 text-[hsl(var(--nova-blue))] text-[10px] font-bold flex items-center justify-center">2</span>
                    Shipping Address
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-medium text-[hsl(var(--nova-muted))] mb-1.5">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        {...register('firstName')}
                        className="w-full px-4 py-2.5 rounded-lg border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-bg))] text-[hsl(var(--nova-text))] text-sm placeholder:text-[hsl(var(--nova-muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nova-blue))]/50 transition-all duration-200"
                        placeholder="Jane"
                      />
                      {errors.firstName && (
                        <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-medium text-[hsl(var(--nova-muted))] mb-1.5">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        {...register('lastName')}
                        className="w-full px-4 py-2.5 rounded-lg border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-bg))] text-[hsl(var(--nova-text))] text-sm placeholder:text-[hsl(var(--nova-muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nova-blue))]/50 transition-all duration-200"
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-xs font-medium text-[hsl(var(--nova-muted))] mb-1.5">
                      Street Address
                    </label>
                    <input
                      id="address"
                      {...register('address')}
                      className="w-full px-4 py-2.5 rounded-lg border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-bg))] text-[hsl(var(--nova-text))] text-sm placeholder:text-[hsl(var(--nova-muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nova-blue))]/50 transition-all duration-200"
                      placeholder="123 Nova Street"
                    />
                    {errors.address && (
                      <p className="text-red-400 text-xs mt-1">{errors.address.message}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <label htmlFor="city" className="block text-xs font-medium text-[hsl(var(--nova-muted))] mb-1.5">
                        City
                      </label>
                      <input
                        id="city"
                        {...register('city')}
                        className="w-full px-4 py-2.5 rounded-lg border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-bg))] text-[hsl(var(--nova-text))] text-sm placeholder:text-[hsl(var(--nova-muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nova-blue))]/50 transition-all duration-200"
                        placeholder="New York"
                      />
                      {errors.city && (
                        <p className="text-red-400 text-xs mt-1">{errors.city.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-xs font-medium text-[hsl(var(--nova-muted))] mb-1.5">
                        Postal Code
                      </label>
                      <input
                        id="postalCode"
                        {...register('postalCode')}
                        className="w-full px-4 py-2.5 rounded-lg border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-bg))] text-[hsl(var(--nova-text))] text-sm placeholder:text-[hsl(var(--nova-muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nova-blue))]/50 transition-all duration-200"
                        placeholder="10001"
                      />
                      {errors.postalCode && (
                        <p className="text-red-400 text-xs mt-1">{errors.postalCode.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-xs font-medium text-[hsl(var(--nova-muted))] mb-1.5">
                        Country
                      </label>
                      <input
                        id="country"
                        {...register('country')}
                        className="w-full px-4 py-2.5 rounded-lg border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-bg))] text-[hsl(var(--nova-text))] text-sm placeholder:text-[hsl(var(--nova-muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nova-blue))]/50 transition-all duration-200"
                        placeholder="US"
                      />
                      {errors.country && (
                        <p className="text-red-400 text-xs mt-1">{errors.country.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div className="bg-[hsl(var(--nova-surface))] border border-[hsl(var(--nova-border))] rounded-xl p-6 space-y-5">
                  <h2 className="font-heading font-semibold text-[hsl(var(--nova-text))] text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[hsl(var(--nova-blue))]/20 text-[hsl(var(--nova-blue))] text-[10px] font-bold flex items-center justify-center">3</span>
                    Payment
                  </h2>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-[hsl(var(--nova-blue))]/5 border border-[hsl(var(--nova-blue))]/20">
                    <Lock size={12} className="text-[hsl(var(--nova-blue))]" />
                    <span className="text-[10px] text-[hsl(var(--nova-blue))]">
                      Payment fields are placeholders. Connect Stripe to enable real processing.
                    </span>
                  </div>
                  <div>
                    <label htmlFor="cardNumber" className="block text-xs font-medium text-[hsl(var(--nova-muted))] mb-1.5">
                      Card Number
                    </label>
                    <input
                      id="cardNumber"
                      {...register('cardNumber')}
                      className="w-full px-4 py-2.5 rounded-lg border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-bg))] text-[hsl(var(--nova-text))] text-sm placeholder:text-[hsl(var(--nova-muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nova-blue))]/50 transition-all duration-200 font-mono"
                      placeholder="4242 4242 4242 4242"
                    />
                    {errors.cardNumber && (
                      <p className="text-red-400 text-xs mt-1">{errors.cardNumber.message}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-xs font-medium text-[hsl(var(--nova-muted))] mb-1.5">
                        Expiry Date
                      </label>
                      <input
                        id="expiry"
                        {...register('expiry')}
                        className="w-full px-4 py-2.5 rounded-lg border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-bg))] text-[hsl(var(--nova-text))] text-sm placeholder:text-[hsl(var(--nova-muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nova-blue))]/50 transition-all duration-200 font-mono"
                        placeholder="MM / YY"
                      />
                      {errors.expiry && (
                        <p className="text-red-400 text-xs mt-1">{errors.expiry.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-xs font-medium text-[hsl(var(--nova-muted))] mb-1.5">
                        CVV
                      </label>
                      <input
                        id="cvv"
                        {...register('cvv')}
                        className="w-full px-4 py-2.5 rounded-lg border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-bg))] text-[hsl(var(--nova-text))] text-sm placeholder:text-[hsl(var(--nova-muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nova-blue))]/50 transition-all duration-200 font-mono"
                        placeholder="•••"
                      />
                      {errors.cvv && (
                        <p className="text-red-400 text-xs mt-1">{errors.cvv.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-[hsl(var(--nova-surface))] border border-[hsl(var(--nova-border))] rounded-xl p-6 sticky top-24 space-y-5">
                  <h2 className="font-heading font-semibold text-[hsl(var(--nova-text))] text-sm uppercase tracking-wider">
                    Order Summary
                  </h2>

                  <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md overflow-hidden bg-[hsl(var(--nova-bg))] flex-shrink-0">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-[hsl(var(--nova-text))] line-clamp-1">
                            {item.name}
                          </p>
                          <p className="text-[10px] text-[hsl(var(--nova-muted))]">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-[hsl(var(--nova-text))] flex-shrink-0">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[hsl(var(--nova-border))] pt-4 space-y-2 text-sm">
                    <div className="flex justify-between text-[hsl(var(--nova-muted))]">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[hsl(var(--nova-muted))]">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-[hsl(var(--nova-text))] pt-2 border-t border-[hsl(var(--nova-border))]">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || items.length === 0}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[hsl(var(--nova-blue))] text-[hsl(var(--nova-bg))] font-semibold text-sm hover:bg-[hsl(var(--nova-violet))] transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--nova-surface))]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[hsl(var(--nova-bg))]/30 border-t-[hsl(var(--nova-bg))] rounded-full animate-spin" />
                        Processing…
                      </span>
                    ) : (
                      <>
                        Place Order
                        <ChevronRight size={14} />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-[hsl(var(--nova-muted))]">
                    By placing your order you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}