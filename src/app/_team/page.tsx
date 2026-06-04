import Link from "next/link";

const TEAM = [
  {
    name: "Dr. Marcus Vance",
    role: "Clinical Director & Lead Implantologist",
    bio: "With over 18 years of experience in restorative dentistry, Dr. Vance leads the clinical team with a philosophy rooted in precision and patient dignity. He holds fellowships from the International Congress of Oral Implantologists and trained at the Royal College of Surgeons.",
    specialties: ["Dental Implants", "Full-Mouth Rehabilitation", "Oral Surgery"],
    education: "BDS, MDS – Royal College of Surgeons",
    years: "18+",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA8VocsEFzrlNyHW85P3XhO6VsJf4ILstVk2qt_ewUfeEmp0qkPA1WxzrjsxTNvaaMRXxDhT26q50O2y676D04D-Wrhjr99qq_l4Ob2G8YmDMtzFlDmzU9JkfyjH_wUtxh5szqexofjV4Mhn1LB1QWeiJJaqfES8zBEdqyAw45yS6frRiCOsf-8aA_b32nYILbz4iXbPSePYZWWsAjx9TAggJ_XNW1I2uOFeGZxM-XmAlP7rWiCRSR3tRK037R0g-pj509FPLh",
    featured: true,
  },
  {
    name: "Dr. Sarah Chen",
    role: "Aesthetic & Cosmetic Dentist",
    bio: "Dr. Chen is renowned for her artistry in cosmetic dentistry. Combining digital smile design with porcelain veneers and whitening protocols, she crafts smiles that are indistinguishable from natural teeth. She trained in Tokyo and London before joining GloWhite.",
    specialties: ["Veneers", "Teeth Whitening", "Smile Design"],
    education: "BDS – University of Tokyo, MSc Aesthetic Dentistry – King's College London",
    years: "12+",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOy-vBRL9BH-qltJtdoaQ4Nncb-FUx-oqQe3S-qaNrGg521ZB2pM0flRINEnj_owfROu3JrEZhUMv0lCSdLAbbG4fNNal3LgNCHySr81skGYnfFINo12elB0K6nQbQeXtNITfGMWlL3WeYUJbS7ji4vNX2g3VW21OKFBBmayyvmRSK5dF99eatATTjjWir0BMphFhGPCsI2tMdomFUZ6XHZVNIvZ7KQx7pgvn321hmLuNmmzoIrVYMnRrTOnRc0S8o1ECbVaJS",
    featured: false,
  },
  {
    name: "Dr. Kofi Asante",
    role: "Orthodontist & Invisalign Specialist",
    bio: "Dr. Asante specialises in correcting complex bite patterns and misalignment using both traditional and clear aligner systems. A Ghanaian graduate who pursued advanced training in orthodontics at the University of Michigan, he is passionate about transforming confidence through alignment.",
    specialties: ["Invisalign", "Ceramic Braces", "Interceptive Orthodontics"],
    education: "BChD – KNUST, MOrth – University of Michigan",
    years: "9+",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgRKjWBqnsG6WFYyaLwplXyReXU7lNHxqzLeILnzadt3LOTzp1wEad5y_bggHQHEPiTVOkcKMYXNwFLb28lLCKnvUQeRfS5ZyqYeYQh-VeYQ8ABXtKqOT7UiyuA_P4GK9DvXQD1WGZNFYUmxoco37wRTFYcfhWYEAUu-uFIUJwZ7z2NZKxTLo9vO-K9Wj3sN-Er6gWhqFtZLElhSD_TeR9eTqv2KapjtvqqsiVL7SxUzGJZEjF-0IGexOFA8pQTF6OATM-rWVW",
    featured: false,
  },
  {
    name: "Dr. Ama Boateng",
    role: "Paediatric & Preventive Dentist",
    bio: "Dr. Boateng creates a calm, reassuring environment for young patients and anxiety-sensitive adults. Her expertise in preventive care and early intervention ensures children develop a positive relationship with oral health from the very first visit.",
    specialties: ["Paediatric Dentistry", "Fissure Sealants", "Preventive Care"],
    education: "BDS – University of Ghana, DClinDent Paediatrics – UCL",
    years: "7+",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVfCUaiscA3C_ydk1OSMbn11BpJfN_rwA4ZCZuhgZkow8xwah4GJLXnFynWUYSivmJ-DsuUEAxefdFf-9REXl_bH21X0LbsQXw7cRpMhapB3uj4VqlrNLQtDaWegvyqa65iCiCjrL4V00r43k-YZx-2JvS7jJkggervnNJiq1D5qCX9xg1FN1dK2TQLKmLCSI7Pf6POg0MQqmwVFueVSmQ7yGYwghp2hGaXSHUmLuqYlrEog5kS0d2NtLTpo0g3aKYaYspeaGB",
    featured: false,
  },
  {
    name: "Dr. James Osei",
    role: "Periodontist & Gum Health Specialist",
    bio: "Dr. Osei is the clinic's expert in the supporting structures of teeth — gums, bone, and connective tissue. He provides laser-assisted periodontal therapy and bone grafting procedures, ensuring every implant and restoration is built on a healthy foundation.",
    specialties: ["Periodontal Therapy", "Bone Grafting", "Laser Dentistry"],
    education: "BDS – UDS, MSc Periodontology – Barts & The London",
    years: "11+",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWdM_-46e_uvSCZTq-UGFT816Gdx3pdNWhWMLAYe-y1pbCmicTscSH0m0eMAe2kGP_9gCBzO5ewE0HJqbe7lLj-QHkuaJTCOc7_gxsNcnNH1BcTGkbGFiMHH4TcKBhFCYd5Cjbcsh7OzVaQ6zFaqx6vSONfGU1NNhaFfn4Ha5SNL_JDTrL5FBOE633vTEyvneBYpAxPekfwZkiKlNXU1QqSEkSOT792cqHESb5Z8GAkpubOpTpf0kSkakitTL799_ZCzXyCPUo",
    featured: false,
  },
];

const STATS = [
  { value: "15+", label: "Years in Practice" },
  { value: "12,000+", label: "Patients Treated" },
  { value: "5", label: "Clinical Specialists" },
  { value: "99%", label: "Patient Satisfaction" },
];

const VALUES = [
  { icon: "verified", title: "Clinical Excellence", desc: "Every procedure follows evidence-based protocols. We invest continuously in training and technology." },
  { icon: "favorite", title: "Patient-First Care", desc: "Your comfort, dignity, and outcomes drive every clinical decision we make, without exception." },
  { icon: "school", title: "Continuous Learning", desc: "Our team attends international conferences and completes CPD requirements far beyond the minimum standard." },
  { icon: "handshake", title: "Honest Advice", desc: "We recommend only what is clinically necessary. No upselling, no unnecessary procedures." },
];

export default function Team() {
  const featured = TEAM[0];
  const rest = TEAM.slice(1);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <header className="pt-32 pb-20 px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[12px] uppercase tracking-[0.2em] text-primary mb-4 block font-bold font-body">Our Clinicians</span>
            <h1 className="text-6xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-background leading-[0.95]">
              The hands <br />
              <span className="text-secondary italic font-light">behind your smile.</span>
            </h1>
          </div>
          <p className="text-on-surface-variant max-w-sm leading-relaxed font-body pb-2">
            Every specialist at GloWhite is selected for both clinical mastery and their ability to make patients feel genuinely cared for.
          </p>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="px-8 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10 shadow-sm text-center">
              <div className="text-3xl font-headline font-extrabold text-primary mb-1">{s.value}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant font-body">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Clinician */}
      <section className="px-8 mb-16 max-w-7xl mx-auto w-full">
        <div className="bg-primary text-on-primary rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[500px] relative">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-primary-container mb-6 font-body">Clinical Director</span>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter leading-tight mb-4">{featured.name}</h2>
            <p className="text-on-primary-container text-sm font-bold uppercase tracking-wider font-body mb-8">{featured.role}</p>
            <p className="text-on-primary-container/90 leading-relaxed font-body mb-10 max-w-lg">{featured.bio}</p>

            <div className="flex flex-wrap gap-3 mb-10">
              {featured.specialties.map((sp) => (
                <span key={sp} className="bg-white/10 border border-white/20 text-on-primary text-[10px] uppercase tracking-wider font-bold px-4 py-2 rounded-full font-body">
                  {sp}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 font-body">
              <div>
                <div className="text-3xl font-headline font-extrabold">{featured.years}</div>
                <div className="text-[10px] uppercase tracking-widest text-on-primary-container font-bold">Years Experience</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-xs text-on-primary-container leading-relaxed max-w-xs">{featured.education}</div>
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-full overflow-hidden">
            <img
              src={featured.img}
              alt={featured.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/10 to-transparent lg:bg-gradient-to-l" />
          </div>
        </div>
      </section>

      {/* Rest of Team Grid */}
      <section className="px-8 mb-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {rest.map((member) => (
            <div key={member.name} className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-surface-container-low">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.slice(0, 2).map((sp) => (
                      <span key={sp} className="bg-white/90 text-primary text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full font-body">
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-1">{member.name}</h3>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-primary font-body">{member.role}</p>
                </div>
                <p className="text-on-surface-variant text-xs leading-relaxed font-body flex-1 mb-6">
                  {member.bio}
                </p>
                <div className="border-t border-outline-variant/10 pt-4 flex items-center justify-between font-body">
                  <div>
                    <div className="text-xl font-headline font-extrabold text-on-surface">{member.years}</div>
                    <div className="text-[9px] uppercase tracking-widest text-outline font-bold">Experience</div>
                  </div>
                  <Link
                    href="/booking"
                    className="text-[10px] uppercase tracking-wider font-bold text-primary hover:underline flex items-center gap-1 font-body"
                  >
                    Book <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="px-8 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[12px] uppercase tracking-[0.2em] text-primary mb-4 block font-bold font-body">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter text-on-background">
              Guided by principle,<br />not just protocol.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-surface-container-lowest rounded-[2rem] p-8 border border-outline-variant/10 shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">{v.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-lg text-on-surface mb-3">{v.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 max-w-7xl mx-auto w-full">
        <div className="relative bg-surface-container-lowest rounded-[3rem] p-12 md:p-20 border border-outline-variant/10 shadow-xl overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full blur-[120px] opacity-60 pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter text-on-background mb-6 leading-tight">
              Ready to meet your clinician?
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed font-body mb-10">
              Book a consultation and we will pair you with the specialist best suited to your needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                Book Appointment <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="bg-surface-container-high text-on-surface px-10 py-5 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-all text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
