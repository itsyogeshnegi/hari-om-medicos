import { createContext, useContext, useMemo, useState } from "react";

const CartCtx = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const value = useMemo(() => {
    const subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0);
    const count = items.reduce((s, i) => s + i.qty, 0);
    return {
      items, open, setOpen,
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
      count, subtotal,
    };
  }, [items, open]);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export const useCart = () => {
  const v = useContext(CartCtx);
  if (!v) throw new Error("useCart outside provider");
  return v;
};
