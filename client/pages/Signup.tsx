import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import AuthCard from "@/components/site/AuthCard";
import { useToast } from "@/hooks/use-toast";

export default function Signup() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      password: HTMLInputElement;
      confirm: HTMLInputElement;
    };
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirm = form.confirm.value;
    if (!name || !email || !password || !confirm) {
      toast({ title: "Missing fields", description: "Please fill out all fields." });
      return;
    }
    if (password.length < 6) {
      toast({ title: "Weak password", description: "Use at least 6 characters." });
      return;
    }
    if (password !== confirm) {
      toast({ title: "Passwords do not match", description: "Please re-enter your password." });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Account created", description: "Welcome to Forge & Thread." });
      navigate("/login");
    }, 900);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <AuthCard title="Create account" subtitle="Build your wardrobe with us.">
        <form className="grid gap-4" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" type="text" placeholder="Alex Parker" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm">Confirm password</Label>
            <Input id="confirm" name="confirm" type="password" required />
          </div>
          <Button type="submit" disabled={loading} className="h-11">
            {loading ? "Creating…" : "Create account"}
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account? <Link to="/login" className="text-primary underline-offset-4 hover:underline">Sign in</Link>
        </p>
      </AuthCard>
    </div>
  );
}
