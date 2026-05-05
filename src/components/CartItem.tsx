import { Minus, Plus, Trash2 } from 'lucide-react';
import type { CartItem as CartItemType } from '../store/cartStore';
import { useCartStore } from '../store/cartStore';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="flex gap-4 py-5 border-b border-[hsl(var(--nova-border))] last:border-0">
      <div className="w-20 h-20 rounded-lg overflow-hidden bg-[hsl(var(--nova-bg))] flex-shrink-0">
        <img
          src={item.imageUrl}
          alt={item.name}
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-heading font-semibold text-sm text-[hsl(var(--nova-text))] line-clamp-1">
              {item.name}
            </h4>
            <p className="text-xs text-[hsl(var(--nova-muted))] mt-0.5">{item.category}</p>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            aria-label={`Remove ${item.name} from cart`}
            className="p-1.5 rounded-md text-[hsl(var(--nova-muted))] hover:text-red-400 hover:bg-red-400/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 flex-shrink-0"
          >
            <Trash2 size={14} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 border border-[hsl(var(--nova-border))] rounded-lg overflow-hidden">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              aria-label="Decrease quantity"
              className="p-1.5 text-[hsl(var(--nova-muted))] hover:text-[hsl(var(--nova-text))] hover:bg-[hsl(var(--nova-border))] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))]"
            >
              <Minus size={12} />
            </button>
            <span className="px-2 text-sm font-medium text-[hsl(var(--nova-text))] min-w-[1.5rem] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
              className="p-1.5 text-[hsl(var(--nova-muted))] hover:text-[hsl(var(--nova-text))] hover:bg-[hsl(var(--nova-border))] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nova-blue))]"
            >
              <Plus size={12} />
            </button>
          </div>
          <span className="font-heading font-bold text-sm text-[hsl(var(--nova-text))]">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}