import { Product } from "@/types/product";

export const products: Product[] = [
  { id: "p1", name: "Premium Crew Tee", price: 28, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&auto=format&fit=crop&w=1400", tag: "Bestseller", category: "Essentials" },
  { id: "p2", name: "Everyday Chinos", price: 68, image: "https://images.unsplash.com/photo-1520975930498-4f68b6dfa3c0?q=80&auto=format&fit=crop&w=1400", category: "Bottoms" },
  { id: "p3", name: "Structured Overshirt", price: 98, image: "https://images.unsplash.com/photo-1551855173-98b7b9f2d3b3?q=80&auto=format&fit=crop&w=1400", tag: "New", category: "Tops" },
  { id: "p4", name: "Merino Wool Sweater", price: 120, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&auto=format&fit=crop&w=1400", category: "Tops" },
  { id: "p5", name: "City Trench Coat", price: 180, image: "https://images.unsplash.com/photo-1548883354-7622d97a7f3f?q=80&auto=format&fit=crop&w=1400", category: "Outerwear" },
  { id: "p6", name: "Performance Joggers", price: 74, image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&auto=format&fit=crop&w=1400", category: "Bottoms" },
  { id: "p7", name: "Lightweight Parka", price: 160, image: "https://images.unsplash.com/photo-1542060748-10c28b62716b?q=80&auto=format&fit=crop&w=1400", category: "Outerwear" },
  { id: "p8", name: "Oxford Button-Down", price: 64, image: "https://images.unsplash.com/photo-1497339100210-9e87df79c218?q=80&auto=format&fit=crop&w=1400", category: "Tops" },
  { id: "p9", name: "Wool Blend Coat", price: 220, image: "https://images.unsplash.com/photo-1483985988355-763728e193da?q=80&auto=format&fit=crop&w=1400", category: "Outerwear" },
  { id: "p10", name: "Casual Denim", price: 82, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&auto=format&fit=crop&w=1400", category: "Bottoms" },
  { id: "p11", name: "Classic Hoodie", price: 58, image: "https://images.unsplash.com/photo-1548883354-7b2b3fd88b72?q=80&auto=format&fit=crop&w=1400", category: "Tops" },
  { id: "p12", name: "Leather Belt", price: 36, image: "https://images.unsplash.com/photo-1616002854214-c84b30e1c403?q=80&auto=format&fit=crop&w=1400", category: "Accessories" },
];

export const categories = ["All", "Essentials", "Tops", "Bottoms", "Outerwear", "Accessories"] as const;
