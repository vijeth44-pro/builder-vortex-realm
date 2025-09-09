import { Button } from "@/components/ui/button";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-xl border bg-card text-card-foreground shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-xl bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.tag ? (
          <span className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {product.tag}
          </span>
        ) : null}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sm font-medium leading-tight">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <Button size="sm" className="rounded-full">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
