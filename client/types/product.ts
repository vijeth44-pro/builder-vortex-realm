export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: string;
  category: "Tops" | "Bottoms" | "Outerwear" | "Accessories" | "Essentials";
};
