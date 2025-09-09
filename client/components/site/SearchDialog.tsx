import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { useSearch } from "@/store/search";
import { products } from "@/data/products";
import { useCart } from "@/store/cart";

export default function SearchDialog() {
  const { open, setOpen } = useSearch();
  const { add } = useCart();

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search products..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Products">
          {products.map((p) => (
            <CommandItem
              key={p.id}
              onSelect={() => {
                add(p, 1);
                setOpen(false);
              }}
              className="flex items-center gap-3"
            >
              <img src={p.image} alt={p.name} className="h-10 w-10 rounded object-cover" />
              <span className="flex-1">{p.name}</span>
              <span className="text-sm text-muted-foreground">${p.price.toFixed(2)}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
