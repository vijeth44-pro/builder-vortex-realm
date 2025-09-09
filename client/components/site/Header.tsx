import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <button
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <Link
            to="/"
            className="font-extrabold tracking-tight text-xl sm:text-2xl"
          >
            Forge<span className="text-primary">&</span>Thread
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Link to="/login" className="hidden md:block">
            <Button variant="outline" className="ml-2">Sign in</Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="ml-0 mt-0 h-full w-80 max-w-[85%] bg-background p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="font-extrabold tracking-tight text-xl"
                onClick={() => setOpen(false)}
              >
                Forge<span className="text-primary">&</span>Thread
              </Link>
              <button aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-8 grid gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-2 py-2 text-base transition-colors hover:bg-accent ${isActive ? "text-foreground" : "text-muted-foreground"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-2 py-2 text-base transition-colors hover:bg-accent ${isActive ? "text-foreground" : "text-muted-foreground"}`
                }
              >
                Sign in
              </NavLink>
            </nav>
            <div className="mt-8 border-t pt-6">
              <Link to="/signup" onClick={() => setOpen(false)}>
                <Button className="w-full" size="lg">Create account</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
