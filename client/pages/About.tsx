export default function About() {
  return (
    <div>
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&auto=format&fit=crop&w=2000"
          alt="Studio"
          className="h-[40vh] w-full object-cover"
          referrerPolicy="no-referrer"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative -mt-[30vh] mx-auto px-4 pb-10 pt-[30vh] text-white">
          <h1 className="text-4xl font-extrabold tracking-tight">Our Story</h1>
          <p className="mt-2 max-w-2xl text-white/80">Built in 2025 with one goal: make menswear that moves. We blend performance fabrics with clean silhouettes for pieces that work anywhere.</p>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-2">
        <div className="prose prose-slate max-w-none dark:prose-invert">
          <h2>Crafted with purpose</h2>
          <p>We partner with responsible mills and factories around the world. Our garments are made to last, using recycled and low-impact materials wherever possible.</p>
          <h3>Design philosophy</h3>
          <p>Every piece starts with movement. Hidden stretch, breathable weaves, and smart construction details deliver comfort without compromising style.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1556306535-abccb1f69f3e?q=80&auto=format&fit=crop&w=1200" alt="Swatches" className="h-48 w-full rounded-lg object-cover md:h-full" referrerPolicy="no-referrer" decoding="async" />
          <img src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&auto=format&fit=crop&w=1200" alt="Workshop" className="h-48 w-full rounded-lg object-cover md:h-full" referrerPolicy="no-referrer" decoding="async" />
          <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&auto=format&fit=crop&w=1200" alt="Knit" className="h-48 w-full rounded-lg object-cover md:h-full" referrerPolicy="no-referrer" decoding="async" />
          <img src="https://images.unsplash.com/photo-1542060748-10c28b62716b?q=80&auto=format&fit=crop&w=1200" alt="Outerwear" className="h-48 w-full rounded-lg object-cover md:h-full" referrerPolicy="no-referrer" decoding="async" />
        </div>
      </section>
    </div>
  );
}
