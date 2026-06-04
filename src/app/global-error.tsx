"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "sans-serif", textAlign: "center", padding: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Something went wrong</h2>
        <p style={{ color: "#555", marginBottom: "2rem" }}>An unexpected error occurred. Please try again.</p>
        <button
          onClick={() => reset()}
          style={{ background: "#003f87", color: "#fff", border: "none", padding: "0.75rem 2rem", borderRadius: "9999px", fontWeight: "600", cursor: "pointer" }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}