import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex flex-col">
      {/* Editorial Header Section */}
      <header className="pt-32 pb-20 px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <div className="inline-block text-[12px] uppercase tracking-[0.2em] text-primary font-bold mb-4 font-body">Patient Education</div>
          <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-on-background tracking-tighter mb-8 leading-[1.1]">
            Precision Care, <br />
            <span className="text-secondary">Tranquil Insights.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl font-body">
            Explore our curated collection of dental health guides and professional insights, designed to elevate your daily hygiene routine with clinical precision.
          </p>
        </div>
      </header>

      <main className="px-8 pb-20 max-w-7xl mx-auto w-full">
        {/* Featured Post */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8 relative group overflow-hidden rounded-[2rem] bg-white shadow-xl border border-outline-variant/10">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Modern clinical dental equipment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrFMXF8Rzdu8dWAb_7WU2qIgx1kxCckGrnaF1DWNNs6r0EJh_z4AL4YyNmevS33ij_dn0-zZU0b0rLKWz4Tc4OQltu_S_6GCXduCwSNDdGXBaQ0uHvWhZmky2803_U2V-VvuuPQbKhdYHYt494ktkp_O6c8FT9TTckN0BaJgzF9EPFMO4hI3pBHM8-r2yDMQ0PD68VJZsbuDuOOwiw8dyPI4YBOdEd-T-8psxAzPmzo17gWuO6dtwJANxBs258h-V7OpeofhlI"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <span className="bg-primary text-on-primary px-4 py-1 rounded-full text-[10px] font-bold w-fit mb-4 uppercase tracking-widest font-body">In-Depth Guide</span>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4 tracking-tight leading-snug">
                The Science of a Sanctuary: How Modern Technology Minimizes Dental Anxiety
              </h2>
              <div className="flex items-center space-x-4 text-white/80 text-sm font-body">
                <span>Dr. Julian Vance</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                <span>12 Min Read</span>
              </div>
            </div>
          </div>

          {/* Sidebar: Trending Topics */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="bg-surface-container-low p-8 rounded-[2rem] flex-1 border border-outline-variant/5">
              <h3 className="text-xl font-headline font-bold mb-6 text-primary tracking-tight">Trending Hygiene Tips</h3>
              <ul className="space-y-6 font-body">
                <li className="flex items-start space-x-4">
                  <span className="text-2xl font-black text-outline-variant/40 leading-none">01</span>
                  <div>
                    <h4 className="font-bold text-on-surface hover:text-primary transition-colors cursor-pointer">Post-Whitening Care: The first 48 hours</h4>
                    <p className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-wider font-bold">Procedure Guides</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-2xl font-black text-outline-variant/40 leading-none">02</span>
                  <div>
                    <h4 className="font-bold text-on-surface hover:text-primary transition-colors cursor-pointer">Micro-Brushing: Precision over pressure</h4>
                    <p className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-wider font-bold">Hygiene Routine</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-2xl font-black text-outline-variant/40 leading-none">03</span>
                  <div>
                    <h4 className="font-bold text-on-surface hover:text-primary transition-colors cursor-pointer">The Role of Fluoride in Adult Dental Health</h4>
                    <p className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-wider font-bold">Preventative Care</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-primary text-on-primary p-8 rounded-[2rem] relative overflow-hidden shadow-xl">
              <div className="relative z-10">
                <h3 className="text-lg font-headline font-bold mb-2">Need advice?</h3>
                <p className="text-sm opacity-80 mb-6 leading-relaxed font-body">Speak with our clinical experts for a personalized hygiene plan.</p>
                <Link href="/contact" className="bg-white text-primary px-6 py-2 rounded-full text-sm font-bold active:scale-95 transition-all inline-block">Consult Now</Link>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <span className="material-symbols-outlined text-9xl">medical_services</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-3 font-body">
            <button className="px-6 py-2 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider">All Articles</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-bold uppercase tracking-wider hover:bg-surface-variant transition-colors">Daily Hygiene</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-bold uppercase tracking-wider hover:bg-surface-variant transition-colors">Cosmetic Tips</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-bold uppercase tracking-wider hover:bg-surface-variant transition-colors">Surgery Recovery</button>
          </div>
          <div className="relative max-w-sm w-full">
            <input
              className="w-full bg-surface-container-low border-none rounded-full px-6 py-3 text-sm focus:ring-1 focus:ring-primary/40 transition-all outline-none font-body"
              placeholder="Search insights..."
              type="text"
            />
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">search</span>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Beyond Brushing: The Morning Dental Ritual",
              category: "Daily Ritual",
              date: "May 12, 2024",
              desc: "Understanding the sequence of oral care can significantly impact the long-term health of your enamel and gums.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLk3JbZpiRmBz2Q5V1pL6uRIR4Mog6QEBizKhz0fvDPX2ZLHVIFrEXgUYqQUYqbPCP-kHR-nnuoneiwmtoey6C75eTOzxBesbxwvdSLJWPKbsXHFDWGnrIV3zmUcSMXkDcYokgm6qbmCDjCt9VQ79T5qCyUNOaiBnWxpOuKjdC0lYY_Z86Bv1qFXOqPoASfm3nxtQk-jbtDO8I5hUMHu3rmqqkh42FbYBkddTBgpK611665upnPnSWZ883E8_3xDALV6LZDhLJ"
            },
            {
              title: "Veneers vs. Bonding: Choosing Your Perfect Smile",
              category: "Cosmetic",
              date: "May 08, 2024",
              desc: "A clinical comparison of modern restorative techniques to help you make an informed decision for your aesthetic goals.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4KFMSj3AhDzFXDInN36qZE2WGJ4K1SyIKRYLukPDLyiCEN-fBUIYKZ6Dyxuv5GgUgu7eydlLWOwjSKN8AL_dZhqhlK9sY0kn_gSwKEYkokx7o-q2iegSwHxn9s5Fupu_aHN9zN48cVaTlANWs3W5GMXvFH-7OuR9hosA-WIlFml0p2S2_Fa2xQRfp4T2sZSKDxpM0VhYUUpdcBn4N1fuPgbADgDXezMfZ4Iu3YIt-COREkBSpgy_gLLfYqg0a82zZxT4c3Bao"
            },
            {
              title: "The Alimentary Link: Nutrition and Gum Health",
              category: "Nutrition",
              date: "May 03, 2024",
              desc: "How your dietary choices directly influence periodontal strength and the body's natural inflammatory responses.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpR5JSNnNZC_edEHNeM0sYsMg5-Vcbg9gbyp3QQA21oG3iiJrrcRz_z0cipo3DsvW0357xU3NMzgM8g7Vw1GOcnaf3WZM-3CiQCOVaUF6XZsrgYGGsyTlDbhb4fVH0AW5XVPgy3hOmlue6xOJ6LHxRFKZVSim4oD2aXsfKhb45ZBUMVdMQY5q7HSIcPxtg5udkouAE1xRrAZwwchNwyliUljfKNKxifiFZcMjiyQpKj25lgvIeJy725I1H0pC6Zt759TnFWu5U"
            },
            {
              title: "Laser Dentistry: The End of the Drill?",
              category: "Technology",
              date: "April 27, 2024",
              desc: "An exploration of how laser technology is revolutionizing cavity treatment and soft tissue procedures with zero pain.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC38y1rwMIkuEmmPydkNF7AZ21TTj9Q9qOL5SzddZO-SoNFjlXzDWlnpakPvBaiSBMZOMjt32_H1tLO_Zh6kiDF4DZSizq7l4QTWTLI8rbwlNUJ4FfRCJ5ma0RbrTwPjEFc1FsCeNIknhulrXdXKUuS42Y1hWYLRwaHI6arwo-SIgOE3304_yFHrR4Pr2tnai9mKpYQ7k4udbXxgHGcSfyg2Rg_AiAQ7GuGuHMr7oRBtBw7pBrdGOUbSg7k893UkZesmce5CdDw"
            },
            {
              title: "Pediatric Milestones: The First Visit",
              category: "Family Care",
              date: "April 15, 2024",
              desc: "How to prepare your child for their first dental experience to ensure a lifetime of positive oral health associations.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDra6X0shbx607RZeadZ1iru8WWM411qlxwi0LScvTcSDdt9QHmanrgEOvmqRNve-EOqwlFsWp85bb0PLCENBc5zcRy8baF5D6XfJ_4DJSEYh3F-8XJD_ZvD_VI6gtJAWPqLgmDEKNPGpPKPrxvhAWSyZ3sQXbhLATOmE7BkxSwWwmml-AbWUEuGgoa8_uoTKvshUjEn-QQAwb2-hA1C2NewDEveu3fJ-8Mh6D_T1a77mhlTeth3AtKtb7SN8EdKhLznotsjIal"
            }
          ].map((post, i) => (
            <article key={i} className="flex flex-col h-full bg-surface-container-lowest rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-outline-variant/10">
              <div className="h-64 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={post.img} alt={post.title} />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-secondary mb-4 font-body">
                  <span>{post.category}</span>
                  <span className="text-outline-variant">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-on-background mb-4 leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1 font-body">{post.desc}</p>
                <Link href="#" className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-widest font-body group/link">
                  Read Insight
                  <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-1 text-sm">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
          
          {/* Newsletter Card */}
          <article className="flex flex-col h-full bg-primary/5 rounded-[2rem] p-10 justify-center border border-primary/20 shadow-inner">
            <h3 className="text-3xl font-headline font-bold text-primary mb-4 tracking-tighter">Stay Precise.</h3>
            <p className="text-on-surface-variant text-sm mb-8 font-body font-medium">Join 5,000+ patients who receive our bi-weekly editorial on modern dental wellness.</p>
            <div className="space-y-4 font-body">
              <input
                className="w-full bg-white border-none rounded-xl px-4 py-4 text-sm focus:ring-1 focus:ring-primary/40 outline-none shadow-sm"
                placeholder="Email Address"
                type="email"
              />
              <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/20 transition-all">Subscribe</button>
            </div>
          </article>
        </section>

        {/* Pagination */}
        <div className="mt-20 flex justify-center items-center space-x-6 font-body font-bold">
          <button className="w-12 h-12 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all shadow-sm">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Page 1 of 12</span>
          <button className="w-12 h-12 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all shadow-sm">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>
    </div>
  );
}
