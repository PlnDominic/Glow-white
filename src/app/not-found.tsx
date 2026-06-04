import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-8 text-center bg-background">
      <h2 className="text-4xl font-headline font-bold text-on-background mb-4">404 - Page Not Found</h2>
      <p className="text-on-surface-variant font-body mb-8 max-w-md">
        The sanctuary you are looking for does not exist. Please return to the homepage to select a valid care path.
      </p>
      <Link
        href="/"
        className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-primary/20 transition-all font-body"
      >
        Return Home
      </Link>
    </div>
  );
}
