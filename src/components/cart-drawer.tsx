import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function CartDrawer() {
  const { open, setOpen, items, remove, setQty, subtotal, clear } = useCart();
  return (
    <>
      <div className={`fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 transition ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setOpen(false)} />
      <aside className={`fixed top-0 right-0 z-50 h-dvh w-full sm:max-w-md bg-background border-l border-border flex flex-col transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="font-display font-bold">Your Cart</h2>
            <span className="text-xs text-muted-foreground">({items.length})</span>
          </div>
          <button aria-label="Close" onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-surface"><X className="h-5 w-5" /></button>
        </div>

        <div className="flex-1 overflow-auto px-5 py-4 space-y-3">
          {items.length === 0 && (
            <div className="text-center py-20 text-sm text-muted-foreground">
              <ShoppingBag className="h-10 w-10 mx-auto mb-3 opacity-40" />
              Your cart is empty.
            </div>
          )}
          {items.map(({ product, qty }) => (
            <div key={product.id} className="flex gap-3 p-3 border border-border rounded-xl">
              <img src={product.image} alt="" className="h-16 w-16 rounded-lg object-cover bg-surface" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold line-clamp-1">{product.name}</div>
                <div className="text-xs text-muted-foreground">{product.manufacturer}</div>
                <div className="flex items-center justify-between mt-2">
                  <div className="inline-flex items-center border border-border rounded-lg">
                    <button aria-label="Decrease" onClick={() => setQty(product.id, qty - 1)} className="p-1.5 hover:bg-surface"><Minus className="h-3 w-3" /></button>
                    <span className="px-2 text-xs font-semibold w-6 text-center">{qty}</span>
                    <button aria-label="Increase" onClick={() => setQty(product.id, qty + 1)} className="p-1.5 hover:bg-surface"><Plus className="h-3 w-3" /></button>
                  </div>
                  <div className="text-sm font-bold">₹{(product.price * qty).toFixed(0)}</div>
                </div>
              </div>
              <button aria-label="Remove" onClick={() => remove(product.id)} className="self-start p-1.5 rounded-lg hover:bg-surface text-muted-foreground"><Trash2 className="h-4 w-4" /></button>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-5 space-y-3">
            <div className="flex items-center gap-2">
              <input placeholder="Coupon code" className="flex-1 px-3 py-2 rounded-lg border border-border bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/30" />
              <button className="px-3 py-2 rounded-lg border border-border text-sm font-semibold hover:bg-surface">Apply</button>
            </div>
            <div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span className="font-semibold">₹{subtotal.toFixed(0)}</span></div>
            <div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">Delivery</span><span className="font-semibold text-accent">{subtotal > 499 ? "FREE" : "₹49"}</span></div>
            <div className="flex items-center justify-between font-bold border-t border-border pt-3"><span>Total</span><span>₹{(subtotal + (subtotal > 499 ? 0 : 49)).toFixed(0)}</span></div>
            <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90">Proceed to Checkout</button>
            <button onClick={clear} className="w-full text-xs text-muted-foreground hover:text-destructive">Clear cart</button>
          </div>
        )}
      </aside>
    </>
  );
}
