import Link from "next/link";

export default function Insurance() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-32 mb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[12px] uppercase tracking-widest text-primary font-bold font-body">Accessible Excellence</span>
            <h1 className="font-headline text-6xl md:text-7xl font-extrabold tracking-tighter text-on-background leading-[1.1]">
              Your Smile, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Fully Covered.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed font-body">
              At Glowhite Dental Clinic, we believe premium care should be effortless. We partner with leading insurance providers to ensure your journey to a radiant smile is as tranquil as it is precise.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img
                alt="Clinic Reception"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBycILntza5GcK8Gfz38OQatvkLXeUqoEXBPuGYeBvRIW7NcU-Cz042iCeyZ0QZzEJHIbVltRXgcIRN73_MIuM7Vs8Cu_RHYWb2t7oxp5rli9Gd5xAUAXUo1YMBlE4FspOD54YK4TOTR81VMrmnrbu6JM1Iepm9Ggpu3t4b-258q-HUFg6BE1OQHI8I8Is6yF4P6hsAnOqzjLSMHfthn2GTAeGVxT-Uww_jaj5ZC6OqNzW9IMu7qrJlmyXYAFafDvCiAagCle__"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl max-w-xs hidden md:block border border-white/20">
              <div className="flex items-center gap-4 mb-3">
                <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                <span className="font-headline font-bold text-lg">Hassle-Free Claims</span>
              </div>
              <p className="text-xs text-on-surface-variant font-body font-medium">We handle all the paperwork directly with your provider so you can focus on your recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="max-w-7xl mx-auto px-8 w-full">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-headline text-4xl font-bold mb-4">Our Insurance Partners</h2>
            <p className="text-on-surface-variant max-w-md font-body">Accepted providers at our GloWhite.</p>
          </div>
          <div className="h-px flex-grow bg-outline-variant/20 mx-8 hidden md:block"></div>
          <div className="flex items-center gap-2 text-primary font-bold text-[12px] uppercase tracking-wider font-body">
            <span className="material-symbols-outlined text-sm">info</span>
            <span>Accepted Providers</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-sm border border-outline-variant/10">
          <div className="flex items-center justify-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <img
              src="/insurance.jpg"
              alt="Our Insurance Partners"
              className="w-full h-auto"
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <img
              src="/Nationwide%20Medical%20Insurance.png"
              alt="Nationwide Medical Insurance"
              className="max-h-40 w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="max-w-7xl mx-auto px-8 mt-32 mb-24 w-full">
        <div className="bg-surface-container-lowest rounded-[3rem] overflow-hidden shadow-xl flex flex-col lg:flex-row border border-outline-variant/10">
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <span className="text-[12px] uppercase tracking-widest text-primary font-bold mb-6 font-body">Our Commitment</span>
            <h2 className="font-headline text-4xl font-extrabold mb-8 text-on-background leading-tight">Patient-First <br />Access Policy</h2>
            <div className="space-y-8 font-body">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined">contact_support</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Pre-Authorization Support</h4>
                  <p className="text-on-surface-variant text-sm">Our dedicated insurance concierge handles all pre-approvals before your procedure.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Co-Payment Clarity</h4>
                  <p className="text-on-surface-variant text-sm">Transparent breakdown of any out-of-pocket costs provided during consultation.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              alt="Consultation"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKfQOKpPLpKptOkL-SS1f1Q1sPIamzGo8Rjm45y5AbmXvYfX7ax8ckBWw62JEOHC5gc_L3yXaXVrgROiq7w5QyYrF3V5gtaPIVqsbjAWKnG-gVlrCOtz6B4fxIhQhfnE7MEGle2BEZYrhYhKw-ilxM6cUrm1TUuVDv0MLuWxpe6aSZmMKJmtxvzVyKjgZL6XQIrcla-PqOailQlAFoxDEeh_0Ec2EQhslOOJucJXTK1jLyyCJ4RwW-W0W2Uecoa2TVV8hWn0fm"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent hidden lg:block"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
