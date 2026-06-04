import Link from "next/link";
import ReviewsCarousel from "@/components/ReviewsCarousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center px-8 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Modern dental office"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbR9O6q_uIL9h4I8U0kmMrCxhjdA1M6b505UXavtyWBePrzh2px9dITThWWO7yacEq0Zlpb_l1HevP6QSJGuChRIyn-m2x9wjG82IKbyWliBy83tC9p1_rX0yzdyLKKN3NHt1aeSftXPFBh4Ih3OHp0GnuEdczxjr1H4rDkBYjDqtsXO461EIBUojie7Iyam0XU-CDG46LhtLrjhli7gw7Uj6Cr1ZQOmgBINex49CbB42c4HzMlQgpDa9HfUCko8v2EgmL1hsp"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-2xl">
          <span className="text-[12px] uppercase font-bold tracking-widest text-primary mb-4 block font-body">
            Precision Care
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-on-surface mb-6 font-headline">
            Where Technology <br /> Meets Tranquility
          </h1>
          <p className="text-lg text-on-surface-variant mb-10 leading-relaxed max-w-lg font-body">
            Experience dental care reimagined as a restorative journey. Our GloWhite combines world-class expertise with a calming atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/booking"
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:opacity-90 active:scale-95 transition-all text-center"
            >
              Schedule Your Visit
            </Link>
            <Link
              href="/services"
              className="bg-surface-container-high text-on-secondary-container px-8 py-4 rounded-full font-semibold text-base hover:bg-surface-container-highest transition-all text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section (Bento Grid) */}
      <section className="py-24 px-8 md:px-20 bg-surface-container-low">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 max-w-7xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-4 font-headline">
              Elite Dental Specializations
            </h2>
            <p className="text-on-surface-variant font-medium font-body">
              Curated treatments designed for lasting health and aesthetic perfection.
            </p>
          </div>
          <Link
            href="/services"
            className="text-primary font-bold text-xs uppercase tracking-wider cursor-pointer hover:underline font-body"
          >
            Explore all services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Service 1: Whitening */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-all hover:shadow-[0px_20px_40px_rgba(25,28,30,0.06)]">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">auto_awesome</span>
                <h3 className="text-2xl font-bold mb-3 font-headline">Signature Whitening</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed font-body">
                  Advanced cold-light technology for up to 8 shades lighter in a single sanctuary session.
                </p>
                <Link
                  href="/booking"
                  className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all font-body"
                >
                  Book Whitening <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden">
                <img
                  alt="Teeth Whitening"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoZD_mYJ3Yo0R-6qfXD6p47LIYD0SyBrmRvJ_VRkJxV101pggYQ-rnZK2nccx3oqqqmcZWpUtBcnFK_WdJfgREX2xz0H8tnCaRHYyLDC3_xGE_SfguYEVQU4yxDm-1N6n9kxvI6LxMydbJ8yp42uiiaPhTLoh9Mz9ud3JRn36aNmCyKPjgfhlORUlWADJS0Z4BH_FMTieH6KWdszPMR_gZlh1ezyfhdMMfg8gLYyS4HCNjacQU12gr_XVW2oBikr8024k7dTtE"
                />
              </div>
            </div>
          </div>

          {/* Service 2: Braces */}
          <div className="md:col-span-4 bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl mb-6">align_items_stretch</span>
              <h3 className="text-2xl font-bold mb-3 font-headline">Modern Braces</h3>
              <p className="opacity-80 leading-relaxed font-body text-sm">
                Precision alignment using 3D imaging and invisible alignment options.
              </p>
              <div className="mt-6 rounded-lg overflow-hidden aspect-video border border-white/10">
                <img
                  alt="Modern braces treatment"
                  className="w-full h-full object-cover"
                  src="/braces.png"
                />
              </div>
            </div>
            <div className="mt-8 relative z-10">
              <Link
                href="/booking"
                className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all inline-block"
              >
                Consult Now
              </Link>
            </div>
          </div>

          {/* Service 3: Veneers */}
          <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 relative overflow-hidden group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">interests</span>
              <h3 className="text-2xl font-bold mb-3 font-headline">Porcelain Veneers</h3>
              <p className="text-on-surface-variant leading-relaxed font-body text-sm">
                Custom smile design for refined shape, shade, and symmetry with a natural enamel-like finish.
              </p>
              <div className="mt-6 rounded-lg overflow-hidden aspect-video">
                <img
                  alt="Porcelain veneers smile design"
                  className="w-full h-full object-cover"
                  src="/dental-veneers-on-lower-tooth.png"
                />
              </div>
            </div>
            <div className="mt-8 relative z-10">
              <Link
                href="/booking"
                className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all font-body"
              >
                Book Veneers <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Service 4: Implants */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-all hover:shadow-[0px_20px_40px_rgba(25,28,30,0.06)]">
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="flex-1">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">biotech</span>
                <h3 className="text-2xl font-bold mb-3 font-headline">Bio-Integrated Implants</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed font-body">
                  Permanent restorative solutions using high-grade biocompatible materials for a natural feel and lifelong durability.
                </p>
                <div className="grid grid-cols-1 gap-4 max-w-xs">
                  <div className="bg-background p-4 rounded-lg">
                    <span className="block text-primary font-bold text-xl">99.8%</span>
                    <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest font-body">
                      Success Rate
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/5 aspect-[21/9] rounded-lg overflow-hidden">
                <img
                  alt="Dental Implants"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC74XPc8w_xtmi63pMYuqqJuIMHovNjZIKULiMAgVTVx0HGiL9qGoqqOHTmLw2ayQO5VN8nedoMjb0pAbXSAgIfoCuP04flIs9LRx55bGccI6lZ1YYkyqSkB-YoHoZAjycm_6v2AkO9c3AQs5306fhBXe-TDLWY-DfToADWQGbAemH68Ir_SrrCKWWUAnPcn44a1u2tiUrvD6Hd6rvXCkR_IZPN_OUyyXPTOmWFuol-QyqA_iRtAsXl2CdXr3DzKGj4ODJR5PCY"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Carousel */}
      <ReviewsCarousel />

      {/* Insurance Partners */}
      <section className="py-20 px-8 bg-white overflow-hidden">
        <div className="text-center mb-12">
          <span className="text-[12px] uppercase font-bold tracking-widest text-slate-400 mb-2 block font-body">
            Our Network
          </span>
          <h2 className="text-2xl font-bold text-on-surface font-headline">
            Trusted by Premium Insurance Partners
          </h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex items-center justify-center bg-white border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0 duration-500">
              <img
                src="/insurance.jpg"
                alt="Our Insurance Partners"
                className="w-full h-auto"
              />
            </div>
            <div className="flex items-center justify-center bg-white border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0 duration-500">
              <img
                src="/Nationwide%20Medical%20Insurance.png"
                alt="Nationwide Medical Insurance"
                className="max-h-32 w-full object-contain"
              />
            </div>
        </div>
      </section>

      {/* CTABanner */}
      <section className="mx-8 md:mx-20 mb-20 section-cta">
        <div className="relative rounded-3xl overflow-hidden bg-primary p-12 md:p-20 text-center">
          <div className="absolute inset-0 z-0">
            <img
              alt="Appointment"
              className="w-full h-full object-cover opacity-20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuJgkPLsvEojA5pDArxzcxwJGVLwws4H2_8e6aTk9Y_NCakl3v2Al1JG0qegRT7JDViHAgxn4v49wKTreTw79awiHtVfTOr0nhA6wuCyOEVGxcXqAC1UGku-0hFruK4GxEYnqEmbdCwjnmH8Bkv2C7NVDM9UhfZngKDSsApIsM1zGVykd6SeuHfD4haUCLPo34olpFU8LSRa7rNFfnSQctircLswXcwL2mBqB2_LwC_QQauUvg6aNHmtSZHieHqeQ0-WRDDme9"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary-container"></div>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-primary mb-8 leading-tight font-headline">
              Your New Smile Begins With a Conversation
            </h2>
            <p className="text-on-primary-container font-medium text-lg mb-10 font-body">
              Take the first step toward precision-guided oral health in our GloWhite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 active:scale-95 transition-all shadow-xl shadow-primary/20 inline-flex items-center justify-center"
              >
                Book Appointment
              </Link>
              <a
                href="/Glowwhite_Dental_Price_List_Flyer.pdf"
                download
                className="bg-white/10 text-on-primary px-10 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 active:scale-95 transition-all inline-flex items-center justify-center gap-3"
              >
                Download Price List <span className="material-symbols-outlined">download</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
