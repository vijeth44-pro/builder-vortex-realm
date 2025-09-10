import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import AuthCard from "@/components/site/AuthCard";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement & {
      email: HTMLInputElement;
      password: HTMLInputElement;
    };
    const email = form.email.value.trim();
    const password = form.password.value;
    if (!email || !password) {
      toast({
        title: "Missing fields",
        description: "Please enter your email and password.",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Signed in", description: "Welcome back to Urban Couture." });
      navigate("/");
    }, 800);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <AuthCard title="Sign in" subtitle="Access your orders and saved items.">
        <form className="grid gap-4" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <div className="flex items-center justify-between text-sm">
            <Link
              to="/about"
              className="text-primary underline-offset-4 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Button type="submit" disabled={loading} className="h-11">
            {loading ? "Signing in…" : "Sign in"}
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          New here?{" "}
          <Link
            to="/signup"
            className="text-primary underline-offset-4 hover:underline"
          >
            Create an account
          </Link>
        </p>
      </AuthCard>
    </div>
  );
}
