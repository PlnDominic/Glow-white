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
          <span className="material-symbols-outlined hover:text-primary transition-colors cursor-pointer">public</span>
          <span className="material-symbols-outlined hover:text-primary transition-colors cursor-pointer">share</span>
          <span className="material-symbols-outlined hover:text-primary transition-colors cursor-pointer">mail</span>
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
