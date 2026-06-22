import { useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

export default function Medicines() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const cat = searchParams.get("cat") || "all";
  const page = parseInt(searchParams.get("page") || "1", 10);

  const setQ = (val) => {
    setSearchParams(prev => {
      if (val) prev.set("q", val);
      else prev.delete("q");
      prev.delete("page"); // Reset to page 1 on search change
      return prev;
    }, { replace: true });
  };

  const setPage = (val) => {
    setSearchParams(prev => {
      if (val > 1) prev.set("page", val.toString());
      else prev.delete("page");
      return prev;
    }, { replace: true });
  };

  // Filter items
  const filtered = useMemo(() => products.filter(p => {
    if (q && !`${p.name} ${p.generic} ${p.manufacturer}`.toLowerCase().includes(q.toLowerCase())) return false;
    if (cat !== "all" && p.category !== cat) return false;
    return true;
  }), [q, cat]);

  const itemsPerPage = 50;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentPage = Math.min(Math.max(1, page), totalPages || 1);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Slice list for layout rendering
  const displayedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage]);

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      if (currentPage <= 4) {
        pageNumbers.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return (
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 border-t border-border pt-8">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{Math.min(filtered.length, (currentPage - 1) * itemsPerPage + 1)}-{Math.min(filtered.length, currentPage * itemsPerPage)}</span> of <span className="font-semibold text-foreground">{filtered.length}</span> medicines
        </div>
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          <button
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
            className="px-3 py-2 rounded-xl border border-border text-sm font-medium hover:bg-surface disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent transition">
            Previous
          </button>
          
          <div className="flex items-center gap-1">
            {pageNumbers.map((num, i) => {
              if (num === "...") {
                return (
                  <span key={`dots-${i}`} className="w-9 h-9 grid place-items-center text-muted-foreground text-sm">
                    ...
                  </span>
                );
              }
              const isActive = num === currentPage;
              return (
                <button
                  key={num}
                  onClick={() => setPage(num)}
                  className={`w-9 h-9 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "border border-border hover:bg-surface text-foreground"
                  }`}>
                  {num}
                </button>
              );
            })}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setPage(currentPage + 1)}
            className="px-3 py-2 rounded-xl border border-border text-sm font-medium hover:bg-surface disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent transition">
            Next
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container-px mx-auto max-w-7xl py-8">
      <div className="mb-6">
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl">All Medicines</h1>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 flex items-center gap-2 bg-card border border-border rounded-2xl px-4 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search by name, generic or brand…" className="bg-transparent outline-none flex-1 text-sm min-w-0" />
        </div>
      </div>

      <div>
        {filtered.length === 0 ? (
          <div className="bg-card border border-border rounded-2xl p-12 text-center text-muted-foreground">No medicines match your search.</div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
              {displayedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
            {renderPagination()}
          </>
        )}
      </div>
    </div>
  );
}
