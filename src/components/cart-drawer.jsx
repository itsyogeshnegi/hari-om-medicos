import { useState, useMemo } from "react";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function CartDrawer() {
  const { open, setOpen, items, remove, setQty, clear, subtotal } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [location, setLocation] = useState("");
  const [pincode, setPincode] = useState("");
  const [distance, setDistance] = useState("3"); // "3" or "5"

  // Delivery policy:
  // Under 3km: free if subtotal > 299, else 49
  // Under 5km: free if subtotal > 499, else 49
  const deliveryFee = useMemo(() => {
    if (distance === "pickup") {
      return 0;
    }
    if (distance === "3") {
      return subtotal > 299 ? 0 : 49;
    } else {
      return subtotal > 499 ? 0 : 49;
    }
  }, [distance, subtotal]);

  const total = useMemo(() => {
    return subtotal + deliveryFee;
  }, [subtotal, deliveryFee]);

  const whatsappMessage = useMemo(() => {
    if (items.length === 0 || !customerName.trim() || !location.trim()) return "";
    let msg = `*Hari Om Medicos - New Order*\n\n`;
    msg += `*Customer Name:* ${customerName.trim()}\n`;
    msg += `*Location:* ${location.trim()}\n`;
    if (pincode.trim()) {
      msg += `*Pincode:* ${pincode.trim()}\n`;
    }
    if (distance === "pickup") {
      msg += `*Distance:* Pickup / Take Away\n`;
    } else {
      msg += `*Distance:* Under ${distance} km\n`;
    }
    msg += `*Delivery Fee:* ${deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}\n`;
    msg += `*Total Order Value:* ₹${total.toFixed(0)}\n`;
    msg += `\n*Medicines Ordered:*\n`;
    items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.qty}x ${item.product.name}\n`;
    });
    return msg;
  }, [items, customerName, location, pincode, distance, deliveryFee, total]);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!customerName.trim() || !location.trim()) return;
    const url = `https://wa.me/919211046457?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
    clear();
    setOpen(false);
    setCustomerName("");
    setLocation("");
    setPincode("");
    setDistance("3");
  };

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
                </div>
              </div>
              <button aria-label="Remove" onClick={() => remove(product.id)} className="self-start p-1.5 rounded-lg hover:bg-surface text-muted-foreground"><Trash2 className="h-4 w-4" /></button>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <form onSubmit={handleCheckout} className="border-t border-border p-5 space-y-4 overflow-y-auto max-h-[60%]">
            <div className="space-y-1.5">
              <label htmlFor="customer-name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Your Name *</label>
              <input
                id="customer-name"
                required
                type="text"
                value={customerName}
                onChange={e => setCustomerName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/30 transition font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="location" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Delivery Location *</label>
              <input
                id="location"
                required
                type="text"
                value={location}
                onChange={e => setLocation(e.target.value)}
                placeholder="Enter your delivery address"
                className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/30 transition font-medium"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label htmlFor="distance" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Distance</label>
                <select
                  id="distance"
                  value={distance}
                  onChange={e => setDistance(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/30 transition font-medium"
                >
                  <option value="3">Under 3 km</option>
                  <option value="5">Under 5 km</option>
                                    <option value="pickup">Pickup / Take Away</option>
                  </select>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="pincode" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Pincode (Optional)</label>
                <input
                  id="pincode"
                  type="text"
                  value={pincode}
                  onChange={e => setPincode(e.target.value)}
                  placeholder="e.g. 400001"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-sm outline-none focus:ring-2 focus:ring-primary/30 transition font-medium"
                />
              </div>
            </div>



            <div className="text-[10px] text-muted-foreground bg-surface rounded-xl p-2.5 border border-border leading-relaxed">
              💡 <strong>Delivery Policy:</strong> Free delivery under 3km for orders &gt; ₹299, and under 5km for orders &gt; ₹499. Otherwise a flat ₹49 charge applies.
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-[var(--shadow-glow)]">
              Proceed to WhatsApp Checkout
            </button>
            <button type="button" onClick={clear} className="w-full text-xs text-muted-foreground hover:text-destructive">Clear cart</button>
          </form>
        )}
      </aside>
    </>
  );
}
