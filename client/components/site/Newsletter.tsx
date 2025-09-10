import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-slate-50 to-white p-8 md:p-12">
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          Join the Urban Couture list
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Style tips, early access, and members-only drops. No spam.
        </p>
        <form
          className="mt-6 flex flex-col items-center gap-2 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            required
            className="h-11 w-full sm:w-auto sm:min-w-[280px]"
          />
          <Button type="submit" className="h-11 px-6">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
