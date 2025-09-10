import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";

export default function CartSheet() {
  const { items, total, remove, clear, open, setOpen } = useCart();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-[380px] sm:w-[420px]">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
          ) : (
            items.map((i) => (
              <div key={i.product.id} className="flex gap-3">
                <img
                  src={i.product.image}
                  alt={i.product.name}
                  className="h-16 w-16 rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{i.product.name}</p>
                  <p className="text-xs text-muted-foreground">Qty {i.qty}</p>
                </div>
                <div className="text-sm">
                  ${(i.product.price * i.qty).toFixed(2)}
                </div>
                <button
                  className="text-xs text-muted-foreground underline"
                  onClick={() => remove(i.product.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        <div className="mt-6 border-t pt-4">
          <div className="flex items-center justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-medium">${total.toFixed(2)}</span>
          </div>
          <div className="mt-4 flex gap-2">
            <Button className="flex-1">Checkout</Button>
            <Button variant="outline" onClick={clear}>
              Clear
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
