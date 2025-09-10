import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "p1",
    name: "Men's Premium Crew Tee",
    price: 28,
    image:
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tag: "Bestseller",
    category: "Essentials",
  },
  {
    id: "p2",
    name: "Men's Slim Chinos",
    price: 68,
    image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Bottoms",
  },
  {
    id: "p3",
    name: "Men's Oxford Button-Down",
    price: 98,
    image:
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tag: "New",
    category: "Tops",
  },
  {
    id: "p4",
    name: "Merino Wool Sweater",
    price: 120,
    image:
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Tops",
  },
  {
    id: "p5",
    name: "City Trench Coat",
    price: 180,
    image:
      "https://images.pexels.com/photos/804167/pexels-photo-804167.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Outerwear",
  },
  {
    id: "p6",
    name: "Athletic Joggers",
    price: 74,
    image:
      "https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Bottoms",
  },
  {
    id: "p7",
    name: "Lightweight Parka",
    price: 160,
    image:
      "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Outerwear",
  },
  {
    id: "p8",
    name: "Knit Polo Shirt",
    price: 64,
    image:
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Tops",
  },
  {
    id: "p9",
    name: "Wool Blend Coat",
    price: 220,
    image:
      "https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Outerwear",
  },
  {
    id: "p10",
    name: "Slim Denim Jeans",
    price: 82,
    image:
      "https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Bottoms",
  },
  {
    id: "p11",
    name: "Classic Hoodie",
    price: 58,
    image:
      "https://images.pexels.com/photos/7679464/pexels-photo-7679464.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Tops",
  },
  {
    id: "p12",
    name: "Leather Belt",
    price: 36,
    image:
      "https://images.pexels.com/photos/6311126/pexels-photo-6311126.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Accessories",
  },
];

export const categories = [
  "All",
  "Essentials",
  "Tops",
  "Bottoms",
  "Outerwear",
  "Accessories",
] as const;
