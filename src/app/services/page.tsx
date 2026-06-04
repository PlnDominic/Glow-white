import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-8 pt-32 mb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-12">
          <div className="flex-1 space-y-6">
            <span className="text-[12px] uppercase font-bold tracking-widest text-primary font-body">Elite Oral Care</span>
            <h1 className="font-headline font-extrabold text-5xl md:text-7xl tracking-tighter text-on-background leading-[1.1]">
              Curated Smiles <br /> Precision Artistry.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed font-body">
              Where clinical expertise meets a sanctuary of calm. Our specialized dental procedures are designed to enhance your natural beauty through advanced medical technology and meticulous patient care.
            </p>
          </div>
          <div className="w-full md:w-1/3 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
            <img
              className="w-full h-full object-cover"
              alt="Modern dental clinic interior"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVfCUaiscA3C_ydk1OSMbn11BpJfN_rwA4ZCZuhgZkow8xwah4GJLXnFynWUYSivmJ-DsuUEAxefdFf-9REXl_bH21X0LbsQXw7cRpMhapB3uj4VqlrNLQtDaWegvyqa65iCiCjrL4V00r43k-YZx-2JvS7jJkggervnNJiq1D5qCX9xg1FN1dK2TQLKmLCSI7Pf6POg0MQqmwVFueVSmQ7yGYwghp2hGaXSHUmLuqYlrEog5kS0d2NtLTpo0g3aKYaYspeaGB"
            />
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="px-8 py-24 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Teeth Whitening */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-lowest rounded-[2rem] p-12 transition-all hover:shadow-xl">
              <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">auto_awesome</span>
                  <h3 className="font-headline text-4xl font-bold tracking-tight mb-4">Teeth Whitening</h3>
                  <p className="text-on-surface-variant text-lg max-w-md font-body">Our signature professional bleaching system offers medical-grade results in a single session. Utilizing pH-balanced formulas to ensure maximum brightness with zero sensitivity.</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[12px] font-bold uppercase tracking-widest text-primary font-body">Brilliant Results</span>
                  <div className="h-[1px] w-12 bg-outline-variant/30"></div>
                </div>
              </div>
              <img
                className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity"
                alt="Teeth whitening result"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJM7OQfFEN7-cr8AelMI60GbGfadDa3gO9vhZKiWx0suNcN2atFjXTlsBn0Nf6_f6J4h5OK5YMUEyqYuZCIa1TL2oJF8QLIzC8OdJfBs5P9i-iXw_pm4ilf-qiUur4DIxR3gz-n1JFZI3i7eUfKJ05pe8_S4pWDPnl_S0hOAFd7fllMyC3fNilSnYF29MAO2rD5r5zO18vYz4ZIND4fLqAJ7zIosBrFpKK1ikjfL2GM-DAhqP2ktnXx_KvleXuGX1iPAMsm1RN"
              />
            </div>

            {/* Dental Implants */}
            <div className="md:col-span-4 bg-primary text-on-primary rounded-[2rem] p-10 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-primary-fixed text-4xl mb-6">workspace_premium</span>
                <h3 className="font-headline text-3xl font-bold tracking-tight mb-4">Dental Implants</h3>
                <p className="text-on-primary-container text-sm leading-relaxed font-body">Permanent, titanium-based restorative solutions that mimic natural roots, providing unparalleled stability and bone health preservation.</p>
              </div>
              <button className="mt-8 bg-surface-container-lowest/10 backdrop-blur-md border border-white/20 py-4 rounded-full font-semibold hover:bg-white/20 transition-all">
                View Technology
              </button>
            </div>

            {/* Invisalign */}
            <div className="md:col-span-4 bg-white rounded-[2rem] p-10 border border-outline-variant/10 shadow-sm">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">visibility_off</span>
              <h3 className="font-headline text-2xl font-bold tracking-tight mb-3">Invisalign®</h3>
              <p className="text-on-surface-variant text-sm mb-6 font-body">Clear aligner therapy for a discreet path to alignment. SmartTrack material ensures comfort and precision.</p>
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img
                  className="w-full h-full object-cover"
                  alt="Invisalign aligners"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjDjXH1fWFblOlXLJTbuAtHEyBjZeQuExfjMTsGhXd8byPgij1wZe0t2cd_8gjYj7EzftJ93EGOvZ6ssZ-RTEubYbjEv8ogwoAwRaZt_Unc871fQw2aMgLphBw3cfU3CR0_cbMTl5r7Go_9yYr-LPPm6ocMNlnAOtGkhQN_X9TtnqYaGQxF6an7RYFYobbCUxn2Ck0-m2mxLf3YaRza6WUNI8-CpanPeOxAv-ysfMV9s-D2QDMyCnRFwTHYDMioWKA2-31bkqh"
                />
              </div>
            </div>

            {/* Veneers */}
            <div className="md:col-span-4 bg-surface-container-lowest rounded-[2rem] p-10 border border-outline-variant/10 shadow-sm">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">interests</span>
              <h3 className="font-headline text-2xl font-bold tracking-tight mb-3">Veneers</h3>
              <p className="text-on-surface-variant text-sm mb-6 font-body">Ultra-thin porcelain shells crafted to refine shape, shade, and symmetry while preserving a natural, luminous smile.</p>
              <div className="rounded-2xl overflow-hidden aspect-video mb-6">
                <img
                  className="w-full h-full object-cover"
                  alt="Porcelain veneers smile design"
                  src="/dental-veneers-on-lower-tooth.png"
                />
              </div>
            </div>

            {/* Replacement Units */}
            <div className="md:col-span-8 bg-surface-container-high rounded-[2rem] p-10 flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <span className="material-symbols-outlined text-tertiary text-4xl mb-6">join_inner</span>
                <h3 className="font-headline text-3xl font-bold tracking-tight mb-4">Replacement Units</h3>
                <p className="text-on-surface-variant text-lg font-body">Custom-crafted Bridges and Dentures designed with 3D scanning technology to restore your bite and facial structure with natural aesthetics.</p>
              </div>
              <div className="w-full md:w-64 aspect-square bg-white rounded-3xl p-8 flex items-center justify-center shadow-inner">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">99%</div>
                  <div className="text-[10px] uppercase tracking-widest text-outline font-body">Fit Accuracy</div>
                </div>
              </div>
            </div>

            {/* Modern Braces */}
            <div className="md:col-span-12 bg-white rounded-[2rem] p-12 overflow-hidden flex flex-col md:flex-row items-center gap-16 border border-outline-variant/10 shadow-sm">
              <div className="flex-1">
                <span className="text-[12px] uppercase font-bold mb-4 block text-secondary font-body">Orthodontic Mastery</span>
                <h3 className="font-headline text-4xl font-bold tracking-tight mb-6">Modern Braces</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl font-body">From traditional ceramic options to self-ligating brackets, our orthodontic treatments are tailored to complex structural corrections for all ages, ensuring lasting functional health.</p>
                <div className="flex gap-12 mt-10 font-body">
                  <div>
                    <div className="text-xl font-bold text-on-background">Ceramic</div>
                    <div className="text-sm text-outline">Subtle & Effective</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-on-background">Self-Ligating</div>
                    <div className="text-sm text-outline">Faster Results</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-96 rounded-3xl overflow-hidden relative group aspect-square shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Modern braces treatment"
                  src="/braces.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduler CTA */}
      <section className="py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-headline text-5xl font-extrabold tracking-tight leading-none">Your journey to perfection begins here.</h2>
            <p className="text-on-surface-variant text-xl font-body">Book a consultation with our lead specialists to receive a bespoke treatment plan designed exclusively for your anatomy.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking" className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-3">
                Start Consultation <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <a
                href="/Glowwhite_Dental_Price_List_Flyer.pdf"
                download
                className="bg-surface-container-high text-on-surface px-10 py-5 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-all flex items-center justify-center gap-3"
              >
                Download Price List <span className="material-symbols-outlined">download</span>
              </a>
            </div>
          </div>
          <div className="relative">
            {/* The Scheduler Component Mockup */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl relative z-10 border border-outline-variant/10">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-headline text-xl font-bold">Select Preferred Window</h4>
                <span className="text-primary text-[10px] font-bold uppercase tracking-tighter font-body">Availability: High</span>
              </div>
              <div className="grid grid-cols-3 gap-4 font-body">
                <div className="bg-tertiary-container/10 p-6 rounded-2xl text-center border border-tertiary-container/20 cursor-pointer hover:bg-tertiary-container hover:text-white transition-all">
                  <div className="text-[10px] font-bold uppercase mb-1">Morning</div>
                  <div className="text-xl font-headline font-bold">09:00</div>
                </div>
                <div className="bg-primary text-on-primary p-6 rounded-2xl text-center shadow-lg ring-4 ring-primary-container/20 scale-105 cursor-pointer">
                  <div className="text-[10px] font-bold uppercase mb-1 text-on-primary-container">Noon</div>
                  <div className="text-xl font-headline font-bold">12:30</div>
                </div>
                <div className="bg-tertiary-container/10 p-6 rounded-2xl text-center border border-tertiary-container/20 cursor-pointer hover:bg-tertiary-container hover:text-white transition-all">
                  <div className="text-[10px] font-bold uppercase mb-1">Evening</div>
                  <div className="text-xl font-headline font-bold">16:00</div>
                </div>
              </div>

            </div>
            {/* Blurs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full blur-[100px] -z-10 opacity-60"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
