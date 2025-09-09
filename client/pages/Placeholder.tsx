import { Link } from "react-router-dom";

export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-muted-foreground">
          This page is a placeholder. Tell me what you want here and I’ll design it to match the brand.
        </p>
        <div className="mt-8">
          <Link to="/" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
