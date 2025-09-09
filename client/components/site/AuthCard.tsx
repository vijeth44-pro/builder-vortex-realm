import { cn } from "@/lib/utils";

export default function AuthCard({
  children,
  title,
  subtitle,
  className,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm sm:p-8",
        className,
      )}
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {subtitle ? (
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}
