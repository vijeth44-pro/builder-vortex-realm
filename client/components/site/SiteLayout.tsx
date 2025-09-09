import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import SearchDialog from "./SearchDialog";
import CartSheet from "./CartSheet";
import { CartProvider } from "@/store/cart";
import { SearchProvider } from "@/store/search";

export default function SiteLayout() {
  return (
    <CartProvider>
      <SearchProvider>
        <div className="min-h-dvh flex flex-col bg-background text-foreground">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <SearchDialog />
          <CartSheet />
        </div>
      </SearchProvider>
    </CartProvider>
  );
}
