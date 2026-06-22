import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./lib/cart-context";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { CartDrawer } from "./components/cart-drawer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Medicines from "./pages/Medicines";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/medicines" element={<Medicines />} />
            </Routes>
          </main>
          <SiteFooter />
        </div>
        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
