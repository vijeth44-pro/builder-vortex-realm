import { Button } from "@/components/ui/button";
import ProductCard from "@/components/site/ProductCard";
import Newsletter from "@/components/site/Newsletter";
import { products } from "@/data/products";
import { useCart } from "@/store/cart";

export default function Index() {
  const { add } = useCart();
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=2000&auto=format&fit=crop"
            alt="Menswear hero"
            className="h-[60vh] w-full object-cover sm:h-[70vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto flex h-[60vh] items-end px-4 pb-12 sm:h-[70vh]">
          <div className="max-w-xl text-white">
            <p className="text-xs uppercase tracking-widest text-white/70">
              Forge & Thread
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Elevate the Everyday
            </h1>
            <p className="mt-3 text-white/80">
              Minimal design meets performance fabrics. Build a wardrobe that
              works as hard as you do.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" className="">
                Shop New Arrivals
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white/30 hover:bg-white/10"
              >
                Explore Essentials
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y bg-white dark:bg-background">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full bg-primary/10" />
            <div>
              <p className="text-sm font-semibold">Free shipping</p>
              <p className="text-sm text-muted-foreground">
                On US orders over $75
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full bg-primary/10" />
            <div>
              <p className="text-sm font-semibold">30-day returns</p>
              <p className="text-sm text-muted-foreground">Easy exchanges</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full bg-primary/10" />
            <div>
              <p className="text-sm font-semibold">Sustainable</p>
              <p className="text-sm text-muted-foreground">Responsibly made</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            Shop by category
          </h2>
          <Button variant="ghost" className="hidden text-sm md:inline-flex">
            View all
          </Button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Outerwear",
              img: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1400&auto=format&fit=crop",
            },
            {
              title: "Tops",
              img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1400&auto=format&fit=crop",
            },
            {
              title: "Bottoms",
              img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1400&auto=format&fit=crop",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border"
            >
              <img
                src={c.img}
                alt={c.title}
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                <Button size="sm" variant="secondary" className="mt-2">
                  Shop now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Featured</h2>
          <Button variant="ghost" className="hidden text-sm md:inline-flex">
            View collection
          </Button>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mx-auto px-4 py-12">
        <div className="overflow-hidden rounded-2xl border bg-card p-8 md:p-12">
          <p className="text-sm font-semibold text-primary">
            What customers say
          </p>
          <blockquote className="mt-3 text-2xl font-medium leading-snug tracking-tight">
            “The only brand I wear to the office and the gym. The fit and fabric
            are unmatched.”
          </blockquote>
          <p className="mt-3 text-sm text-muted-foreground">
            — Alex P., New York
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <Newsletter />
      </div>
    </div>
  );
}
