import { useState } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";

export default function Shop() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const { add } = useCart();
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Shop</h1>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Button key={c} variant={active === c ? "default" : "outline"} onClick={() => setActive(c)}>
              {c}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={() => add(p)} />
        ))}
      </div>
    </div>
  );
}
