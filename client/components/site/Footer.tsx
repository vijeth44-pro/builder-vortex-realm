import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="font-extrabold tracking-tight text-xl">
              Urban Couture
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Contemporary menswear crafted for movement. Premium fabrics, clean
              lines, and timeless design.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Shop</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/shop" className="hover:text-foreground">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-foreground">
                  Tops
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-foreground">
                  Bottoms
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-foreground">
                  Outerwear
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Stay in the loop</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Sign up for 10% off your first order and product drops.
            </p>
            <form
              className="mt-4 flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Your email"
                required
                className="h-10"
              />
              <Button type="submit" className="h-10">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} Urban Couture. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-foreground">
              Privacy
            </Link>
            <Link to="/about" className="hover:text-foreground">
              Terms
            </Link>
            <Link to="/about" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
