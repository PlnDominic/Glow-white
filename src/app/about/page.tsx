import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section: Editorial Style */}
      <section className="relative overflow-hidden py-24 px-8 lg:px-24 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="text-[12px] uppercase font-bold tracking-widest text-primary mb-4 block font-body">Our Heritage</span>
            <h1 className="font-headline font-extrabold text-on-background tracking-tighter leading-[1.1] mb-8 text-5xl lg:text-7xl">
              A Legacy of <br /><span className="text-primary">Clinical Precision.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-8 font-body">
              Glowhite Dental Clinic is a modern, patient-focused dental practice dedicated to delivering high-quality oral healthcare in a comfortable and welcoming environment. We offer a full range of services including preventive care, restorative treatments, cosmetic dentistry, and orthodontics—tailored to meet the unique needs of each patient.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-surface-container-low aspect-[4/5]">
              <img
                alt="Interior design of a luxury dental clinic lobby"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgBxyKnXvuVrn4MHOPWkshIfVnmRFoAH6Ia397IF8It0zW6c-Xd1GmAMB79vNrKhW2E1m2sWydmKjMiTpPwzF4EV2QjA69dMc4P3knwoRrv9-dQ5wEGKBa0_0BaqAZFQ6pYDdX2nmtPNB1TzMuxll67WShD3Jm8oHBHVwwA5uxK8Qoi8o1J-CSyVu01QcQ0KmiL2ht8mduCbKxvBZSdgBB9tqRlyC69jrxTW2yjjU5DZ3GKsmjAhxpl1TWhJabpXWadTWoRfC-"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision: Bento Grid Pattern */}
      <section className="py-24 px-8 lg:px-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="md:col-span-2 p-12 rounded-3xl bg-primary text-on-primary flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12">
                <span className="material-symbols-outlined text-6xl opacity-20 group-hover:opacity-40 transition-opacity">lightbulb</span>
              </div>
              <h2 className="text-3xl font-headline font-bold mb-4 tracking-tight">Our Mission</h2>
              <p className="text-xl text-on-primary-container leading-relaxed max-w-2xl font-body">
                To redefine the dental experience by integrating state-of-the-art technological precision with a gentle, personalized approach. We combine advanced dental technology with expert care, education, and attention to detail to ensure optimal results and patient satisfaction.
              </p>
            </div>
            {/* Vision */}
            <div className="p-12 rounded-3xl bg-surface-container-lowest text-on-background flex flex-col justify-between shadow-sm border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-4xl">visibility</span>
              <div>
                <h2 className="text-2xl font-headline font-bold mb-4 tracking-tight">Our Vision</h2>
                <p className="text-on-surface-variant leading-relaxed font-body">
                  To lead the global shift towards holistic dentistry, promoting healthy, confident smiles through expert care, education, and attention to detail where health and wellness are inseparable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History: Timeline Section */}
      <section className="py-24 px-8 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-headline font-extrabold text-on-background mb-12 tracking-tight">Two Decades of Care</h2>
            <div className="space-y-12 font-body">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-lg">04</div>
                <div>
                  <h3 className="text-xl font-bold text-on-background mb-2">The Foundation</h3>
                  <p className="text-on-surface-variant">Dr. Elias Vance established the first Sanctuary clinic in a quiet suburb, prioritizing one-on-one patient focus.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-lg">12</div>
                <div>
                  <h3 className="text-xl font-bold text-on-background mb-2">Digital Revolution</h3>
                  <p className="text-on-surface-variant">We fully transitioned to 3D imaging and AI-assisted diagnostics, setting a new standard for accuracy.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-lg">24</div>
                <div>
                  <h3 className="text-xl font-bold text-on-background mb-2">Modern Sanctuary</h3>
                  <p className="text-on-surface-variant">Opening our flagship multi-disciplinary center with an integrated wellness spa and laboratory.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl relative z-10">
              <img
                alt="A collage of dental tools and modern clinic architecture"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD97nO1GHzyQU-F3EmFmjNGliU69MP2_oD84dG6muh_flRGRv3MJJP5L1BJXvJ4OzKunoshTRv4Zw95QhKyZ17oSEQpfeiadCObFyZ60kpmVITW8iV-ta1POfjclQCsAtOv-vISdkkMMzf2a5jfOa5A4p9f3LamtsGsCnxifCZGCrI3WP8RrdAdGlT94BrUN_7otTyrR5-PxRcjykvPk05VObkKiGeGCHKFZhDYWJlLe0JCUX7XYXjEBA5qmgdsb9tyg-SN5vLX"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-tertiary-container rounded-full blur-[100px] opacity-20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Core Values: Icons and Typography */}
      <section className="py-24 px-8 lg:px-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-[12px] uppercase font-bold tracking-widest text-primary mb-4 block font-body">Principles</span>
          <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-on-background tracking-tight">The Sanctuary Ethos</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-body">
          <div className="p-8 rounded-2xl bg-background hover:shadow-xl transition-shadow duration-300">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">verified_user</span>
            <h3 className="font-bold text-lg mb-3">Absolute Integrity</h3>
            <p className="text-sm text-on-surface-variant">We believe in transparent diagnostics and ethical treatment planning above all.</p>
          </div>
          <div className="p-8 rounded-2xl bg-background hover:shadow-xl transition-shadow duration-300">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">psychology</span>
            <h3 className="font-bold text-lg mb-3">Precision Mindset</h3>
            <p className="text-sm text-on-surface-variant">Continuous learning ensures we utilize the most advanced dental science available.</p>
          </div>
          <div className="p-8 rounded-2xl bg-background hover:shadow-xl transition-shadow duration-300">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">favorite</span>
            <h3 className="font-bold text-lg mb-3">Radical Empathy</h3>
            <p className="text-sm text-on-surface-variant">We listen to the person, not just the patient. Your comfort is our priority.</p>
          </div>
          <div className="p-8 rounded-2xl bg-background hover:shadow-xl transition-shadow duration-300">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">spa</span>
            <h3 className="font-bold text-lg mb-3">Total Harmony</h3>
            <p className="text-sm text-on-surface-variant">Creating environments that soothe the senses and promote rapid healing.</p>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20 px-8 lg:px-24 bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-[12px] uppercase font-bold tracking-widest text-on-surface-variant mb-12 font-body">Accredited by Global Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all font-body font-bold text-xl tracking-tighter">
            <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">award_star</span>ADA Certified</div>
            <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">health_and_safety</span>Global Health Org</div>
            <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">precision_manufacturing</span>ISO 9001 Dental</div>
            <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">workspace_premium</span>Excellence Guild</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary to-primary-container p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-on-primary mb-6 tracking-tight">Ready for a different kind of care?</h2>
            <p className="text-on-primary-container text-lg mb-10 max-w-2xl mx-auto font-body">Experience the intersection of precision medicine and absolute tranquility. Your sanctuary awaits.</p>
            <Link href="/booking" className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
              Schedule Your Visit
            </Link>
          </div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}
