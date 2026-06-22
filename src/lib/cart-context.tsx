import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./data";

type CartItem = { product: Product; qty: number };

type Ctx = {
  items: CartItem[];
  wishlist: string[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  toggleWish: (id: string) => void;
  count: number;
  subtotal: number;
};

const CartCtx = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const value = useMemo<Ctx>(() => {
    const subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0);
    const count = items.reduce((s, i) => s + i.qty, 0);
    return {
      items, wishlist, open, setOpen,
      add: (p, qty = 1) => {
        setItems(prev => {
          const ex = prev.find(i => i.product.id === p.id);
          if (ex) return prev.map(i => i.product.id === p.id ? { ...i, qty: i.qty + qty } : i);
          return [...prev, { product: p, qty }];
        });
        setOpen(true);
      },
      remove: (id) => setItems(prev => prev.filter(i => i.product.id !== id)),
      setQty: (id, qty) => setItems(prev => prev.map(i => i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i)),
      clear: () => setItems([]),
      toggleWish: (id) => setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]),
      count, subtotal,
    };
  }, [items, wishlist, open]);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export const useCart = () => {
  const v = useContext(CartCtx);
  if (!v) throw new Error("useCart outside provider");
  return v;
};
