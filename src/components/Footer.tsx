import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background w-full py-12 px-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200/50 mt-10">
      <div className="space-y-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.jpeg" alt="GloWhite Dental Clinic" style={{ height: 44, width: "auto", borderRadius: 6 }} />
        <p className="text-sm font-body text-slate-600 max-w-xs leading-relaxed">
          Experience the pinnacle of dental care where every procedure is performed with clinical precision and patient comfort in mind.
        </p>
        <div className="flex gap-4 text-slate-500">
          <Link
            href="https://www.instagram.com/glowhite_dental_clinic/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-primary transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2c-2.717 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 0 0-1.772 1.153A4.902 4.902 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.283 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 0 0 1.153 1.772 4.902 4.902 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465C8.944 21.988 9.283 22 12 22s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 0 0 1.772-1.153 4.902 4.902 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.406.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 0 0-1.153-1.772A4.902 4.902 0 0 0 18.55 2.525c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.717 2 12 2Zm0 1.802c2.67 0 2.987.01 4.042.059.976.045 1.505.207 1.858.344.467.181.8.398 1.15.748.35.35.566.683.747 1.15.137.353.3.882.344 1.858.048 1.055.059 1.372.059 4.042s-.01 2.987-.059 4.042c-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15 3.1 3.1 0 0 1-1.15.747c-.352.137-.881.3-1.857.344-1.054.048-1.37.059-4.042.059s-2.987-.01-4.042-.059c-.976-.045-1.505-.207-1.857-.344a3.1 3.1 0 0 1-1.15-.748 3.1 3.1 0 0 1-.748-1.15c-.137-.352-.3-.881-.344-1.857-.048-1.054-.059-1.37-.059-4.042s.01-2.987.059-4.042c.045-.976.207-1.505.344-1.858.181-.466.398-.8.748-1.15a3.1 3.1 0 0 1 1.15-.747c.352-.137.881-.3 1.857-.344 1.055-.048 1.372-.059 4.042-.059Z" />
              <path d="M12 15.333a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666ZM12 7.297a4.703 4.703 0 1 0 0 9.406 4.703 4.703 0 0 0 0-9.406ZM17.965 7.144a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
            </svg>
          </Link>
          <Link
            href="https://web.facebook.com/p/GloWhite-Dental-Clinic-61559875856043/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-primary transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13.5 21v-8.019h2.69l.402-3.132H13.5V7.845c0-.907.251-1.525 1.553-1.525h1.66V3.526A22.31 22.31 0 0 0 14.31 3.4c-2.404 0-4.05 1.468-4.05 4.164v2.285H7.5v3.132h2.76V21h3.24Z" />
            </svg>
          </Link>
          <a
            href="mailto:glowhitedental24@gmail.com"
            aria-label="Email"
            className="material-symbols-outlined hover:text-primary transition-colors cursor-pointer"
          >
            mail
          </a>
        </div>
      </div>
      <div>
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest font-body">Location</h4>
          <p className="text-xs font-body text-slate-600">
            Rowi Junction, Adenta<br />
            Near Papa&apos;s Pizza<br />
            Accra<br />
            Mon - Thu: 8am - 6pm<br />
            Fri - Sat: 8am - 5pm<br />
            Sun: 2pm - 6pm
          </p>
          <div className="text-blue-700 font-bold text-xs font-body">
            053 964 7100 | 027 184 2345
          </div>
        </div>
      </div>
      <div className="md:col-span-2 pt-8 border-t border-slate-100 text-[10px] font-body text-slate-500 flex justify-between items-center">
        <span>© 2026 GloWhite. Precision Care, Tranquil Experience.</span>
        <div className="flex gap-6">
          <Link
            className="hover:text-blue-600 transition-colors"
            href="https://www.ecstasytechnologies.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed by Ecstasy Technologies
          </Link>
        </div>
      </div>
    </footer>
  );
}
