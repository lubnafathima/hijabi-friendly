import type { Route } from "./+types/home";

const featuredSalons = [
  {
    name: "Noor Beauty Lounge",
    location: "Bay Ridge, Brooklyn",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1697604758668-153049f4abab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVhdXR5JTIwc2Fsb24lMjB3YXJtJTIwbGlnaHRpbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIzNjQwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Private Room", "Female Staff Only"],
  },
  {
    name: "Amal Hair Studio",
    location: "Astoria, Queens",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1742196530221-0df5c43baca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBjaGFpciUyMG1pcnJvciUyMHdhcm0lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIzNjQwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Private Room", "Curtained Area"],
  },
  {
    name: "Safa Glow Spa",
    location: "Jackson Heights, Queens",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1630595633877-9918ee257288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJlbGF4aW5nJTIwc3BhJTIwdHJlYXRtZW50JTIwcGVhY2VmdWx8ZW58MXx8fHwxNzcyMzY0MDU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Private Room", "Female Staff"],
  },
  {
    name: "Barakah Beauty Bar",
    location: "Flatbush, Brooklyn",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1599387737838-660b75526801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGhhaXJzdHlsaW5nJTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MjM2NDA2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Private Room", "Walk-ins Welcome"],
  },
];

const problemItems = [
  "Call salons and awkwardly explain their needs",
  "Worry about privacy, staff, and male presence",
  "Compromise on comfort or safety",
];

const solutionItems = [
  "Search salons that match your privacy needs",
  "See verified details before you visit",
  "Read reviews from other hijabi women",
];

const benefits = [
  {
    title: "Privacy-first salons only",
    subtitle: "Every listed salon meets our strict privacy standards.",
  },
  {
    title: "Clear details before you visit",
    subtitle: "Know exactly what to expect: rooms, staff, timings.",
  },
  {
    title: "No uncomfortable conversations",
    subtitle: "These salons already understand your needs.",
  },
  {
    title: "Community-driven and trusted",
    subtitle: "Built on reviews and recommendations from hijabi women.",
  },
];

const testimonials = [
  {
    text: "I no longer have to call ahead and awkwardly explain my needs. I just search, pick a salon, and walk in knowing my privacy is respected.",
    name: "Amira K.",
    area: "Bay Ridge, Brooklyn",
    initial: "A",
  },
  {
    text: "As a salon owner, listing here brought us clients who truly appreciate what we offer. The platform understands our values.",
    name: "Fatima S.",
    area: "Astoria, Queens",
    initial: "F",
  },
  {
    text: "The reviews from other hijabis gave me confidence to try a new stylist. It was the most relaxing salon experience I've had.",
    name: "Layla R.",
    area: "Flatbush, Brooklyn",
    initial: "L",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hijab Friendly Salon" },
    {
      name: "description",
      content:
        "Discover hijab-friendly salons that respect privacy and cater to Muslim women, while salon owners can list their services.",
    },
  ];
}

function DotIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#A98258]" fill="currentColor" aria-hidden>
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

function Star({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} text-[#D4A76A]`} fill="currentColor" aria-hidden>
      <path d="m12 2.8 2.7 5.5 6.1.9-4.4 4.2 1 6-5.4-2.9-5.5 2.9 1.1-6-4.4-4.2 6.1-.9z" />
    </svg>
  );
}

function LocationPin() {
  return (
    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M20 10c0 5-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.2 4 15 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#A98258]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="m5 12 4 4 10-10" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-[#FAF8F5] text-[#3D2B1F] font-['Inter',sans-serif] antialiased">
      <nav className="sticky top-0 z-50 border-b border-[#EFE7DE] bg-[#FAF8F5]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[74px] flex items-center justify-between">
          <a href="#" className="font-['Playfair_Display',serif] text-[28px] tracking-tight leading-none">
            <span className="text-[#7B5B3A]">Hijabi</span>
            <span className="text-[#3D2B1F]">Friendly</span>
          </a>

          <div className="hidden lg:flex items-center gap-10 text-[13px] text-[#8B7355]">
            <a href="#problem-solution" className="hover:text-[#3D2B1F] transition-colors">The Problem</a>
            <a href="#benefits" className="hover:text-[#3D2B1F] transition-colors">Why Us</a>
            <a href="#for-salons" className="hover:text-[#3D2B1F] transition-colors">For Salons</a>
            <a href="#testimonials" className="hover:text-[#3D2B1F] transition-colors">Community</a>
          </div>

          <div className="hidden lg:flex items-center gap-5 text-[13px]">
            <a href="#for-salons" className="text-[#7B5B3A] hover:text-[#3D2B1F] transition-colors">List Your Salon</a>
            <a href="#" className="group flex items-center space-x-2 bg-[#3D2B1F] hover:bg-[#2A1D15] text-white px-6 py-2.5 rounded-full text-sm transition-all">
              Find Salons <span>→</span>
            </a>
          </div>

          <a href="#" className="lg:hidden inline-flex items-center gap-2 bg-[#3D2B1F] text-white px-4 py-2 rounded-full text-sm">
            Find Salons
          </a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 lg:pt-20 lg:pb-18">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-[#F2EAE0] text-[#7B5B3A] px-4 py-1.5 rounded-full text-[10px] tracking-[0.12em] uppercase font-semibold mb-6">
              <DotIcon /> Trusted by hijabi women in NYC
            </span>
            <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] text-[#3D2B1F] mb-5">
              Find salons that
              <br />
              respect your privacy
            </h1>
            <p className="max-w-[560px] text-[#7D6651] text-[18px] leading-relaxed mb-8">
              Discover salons in New York City that offer private spaces, female-only staff, and an environment where you can remove your hijab with comfort and confidence.
            </p>

            <div className="bg-white border border-[#EDE6DB] rounded-2xl p-2 flex flex-col sm:flex-row gap-2 sm:items-center max-w-[560px] mb-4 shadow-sm">
              <div className="flex items-center gap-2 px-4 text-[#8E7A66] text-sm flex-1">
                <LocationPin />
                <span>Neighborhood or zip code...</span>
              </div>
              <button className="bg-[#3D2B1F] text-white rounded-full px-7 py-2.5 text-sm hover:bg-[#2d1d14] transition-all hover:-translate-y-0.5">
                Search
              </button>
            </div>

            <div className="flex flex-wrap gap-2 text-[10px] text-[#7B5B3A]">
              {[
                "Bay Ridge",
                "Astoria",
                "Flatbush",
                "Jackson Heights",
              ].map((area) => (
                <span key={area} className="bg-[#F2EAE0] px-2.5 py-1 rounded-full">{area}</span>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up-delay">
            <div className="rounded-[22px] overflow-hidden border border-[#E8DDD0] shadow-[0_18px_55px_rgba(61,43,31,0.14)]">
              <img
                src="https://hijabfriendly.figma.site/_assets/v11/b441765cdccee5086d15337430dc2fc5ff889a00.png"
                alt="Woman in salon"
                className="w-full h-[500px] lg:h-[600px] object-cover object-top"
              />
            </div>
            <div className="absolute -top-4 right-5 bg-white border border-[#EDE2D6] rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
              <div className="flex items-center gap-0.5">
                <Star className="w-3 h-3" />
                <Star className="w-3 h-3" />
                <Star className="w-3 h-3" />
                <Star className="w-3 h-3" />
                <Star className="w-3 h-3" />
              </div>
              <span className="text-[11px] text-[#866E56]">4.9 avg. rating</span>
            </div>
            <div className="absolute -bottom-4 left-4 bg-white border border-[#EDE2D6] rounded-xl px-4 py-2 shadow-sm">
              <p className="text-xs font-semibold">Community Verified</p>
              <p className="text-[10px] text-[#8A745F]">Only vetted salons listed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[10px] tracking-[0.16em] uppercase text-[#A18362] font-semibold mb-2">Featured in NYC</p>
              <h2 className="font-['Playfair_Display',serif] text-2xl lg:text-3xl">Popular hijab-friendly salons</h2>
            </div>
            <a href="#" className="hidden sm:inline-flex text-sm text-[#7B5B3A] hover:text-[#3D2B1F] items-center gap-1">View all salons <span>→</span></a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredSalons.map((salon, index) => (
              <article
                key={salon.name}
                className="bg-white border border-[#ECE2D8] rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-[136px] overflow-hidden">
                  <img src={salon.image} alt={salon.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <span className="absolute top-2.5 right-2.5 bg-white/90 rounded-full px-2 py-0.5 flex items-center gap-1 text-[10px]">
                    <Star className="w-2.5 h-2.5" />
                    {salon.rating}
                  </span>
                </div>
                <div className="p-3.5">
                  <h3 className="font-['Playfair_Display',serif] text-[20px] leading-none mb-1.5">{salon.name}</h3>
                  <p className="text-[11px] text-[#856E57] mb-3 flex items-center gap-1">
                    <LocationPin /> {salon.location}
                  </p>
                  <div className="flex gap-1.5 flex-wrap">
                    {salon.tags.map((tag) => (
                      <span key={tag} className="text-[9px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#F5EEE5] text-[#7A6148]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-[#3D2B1F] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#DCC6AE] flex flex-wrap gap-x-11 gap-y-2 justify-center text-sm">
          <span>◎ Privacy-first salons only</span>
          <span>◎ Verified hijab-friendly practices</span>
          <span>◎ Built by the Muslim community</span>
        </div>
      </section>

      <section id="problem-solution" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="reveal">
            <p className="text-[10px] tracking-[0.16em] uppercase text-[#A18362] font-semibold mb-2">The Problem</p>
            <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl mb-6">Finding a salon shouldn't feel stressful</h2>
            <p className="text-[#856F58] mb-5">Yet most women have to navigate uncomfortable situations just to get a haircut.</p>
            <div className="space-y-2.5">
              {problemItems.map((item) => (
                <div key={item} className="bg-[#F7F2EB] border border-[#ECE0D3] rounded-[10px] px-4 py-3 text-[#6E5844] text-[14px] flex items-center gap-2">
                  <DotIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "120ms" }}>
            <p className="text-[10px] tracking-[0.16em] uppercase text-[#A18362] font-semibold mb-2">The Solution</p>
            <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl mb-6">HijabiFriendly helps you find salons that already understand you</h2>
            <p className="text-[#856F58] mb-5">No explaining. No second-guessing. Just book with confidence.</p>
            <div className="space-y-2.5">
              {solutionItems.map((item) => (
                <div key={item} className="bg-[#F7F2EB] border border-[#ECE0D3] rounded-[10px] px-4 py-3 text-[#6E5844] text-[14px] flex items-center gap-2">
                  <DotIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 reveal">
            <img className="rounded-xl h-[280px] w-full object-cover row-span-2" src={featuredSalons[0].image} alt="Salon space" />
            <img className="rounded-xl h-[134px] w-full object-cover" src={featuredSalons[2].image} alt="Salon service" />
            <img className="rounded-xl h-[134px] w-full object-cover" src={featuredSalons[1].image} alt="Salon decor" />
          </div>

          <div className="reveal" style={{ animationDelay: "100ms" }}>
            <p className="text-[10px] tracking-[0.16em] uppercase text-[#A18362] font-semibold mb-2">Why Choose Us</p>
            <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl mb-10">Why women choose HijabiFriendly</h2>
            <div className="space-y-4">
              {benefits.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full border border-[#DDCBB8] bg-[#F4EDE3] flex items-center justify-center mt-0.5">
                    <Check />
                  </span>
                  <div>
                    <p className="font-medium text-[#3D2B1F]">{item.title}</p>
                    <p className="text-sm text-[#8B7355]">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="for-salons" className="bg-gradient-to-r from-[#3D2B1F] to-[#4a3123] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="reveal">
            <p className="text-[10px] tracking-[0.16em] uppercase text-[#BDA891] font-semibold mb-2">For Salon Owners</p>
            <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl text-white mb-6 leading-tight">Are you a hijab-friendly salon owner?</h2>
            <p className="text-[#DCC7B1] text-[17px] leading-relaxed mb-5">
              Let the right customers find you. HijabiFriendly helps salon owners who respect privacy reach women actively looking for hijab-friendly services.
            </p>
            <p className="text-[#C5AE96] mb-3">By listing your salon, you get:</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[#E6D7C7] text-sm mb-6">
              <li className="flex items-center gap-2"><Check /> Visibility to a niche, high-intent audience</li>
              <li className="flex items-center gap-2"><Check /> Clear expectations from customers</li>
              <li className="flex items-center gap-2"><Check /> More walk-ins and repeat clients</li>
              <li className="flex items-center gap-2"><Check /> A profile highlighting your practices</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <a href="#" className="inline-flex items-center justify-center gap-2 bg-white text-[#3D2B1F] px-8 py-3.5 rounded-full hover:-translate-y-0.5 transition-all">List Your Salon →</a>
              <a href="#" className="inline-flex items-center justify-center gap-2 border border-[#6E5140] text-[#DCC7B1] px-8 py-3.5 rounded-full hover:border-[#DCC7B1] transition-colors">Learn Requirements</a>
            </div>
            <p className="text-[#9f8870] text-xs">It only takes a few minutes to get listed.</p>
          </div>

          <div className="reveal" style={{ animationDelay: "120ms" }}>
            <img
              src="https://images.unsplash.com/photo-1586448127354-6017a26ce03c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMG93bmVyJTIwYnVzaW5lc3MlMjB3b21hbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzcyMzYxNDg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Salon owner"
              className="rounded-xl h-[290px] w-full object-cover border border-[#5B4132]"
            />
            <div className="mt-3 bg-[#5A3D2D]/85 border border-[#6A4C3A] rounded-xl p-5 text-[#E6D7C7]">
              <p className="font-semibold mb-3">Listing your salon is simple</p>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-[#7A5A45] flex items-center justify-center text-xs">1</span> Add your salon details</li>
                <li className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-[#7A5A45] flex items-center justify-center text-xs">2</span> Mention your hijab-friendly facilities</li>
                <li className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-[#7A5A45] flex items-center justify-center text-xs">3</span> Get discovered by nearby customers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] tracking-[0.16em] uppercase text-[#A18362] font-semibold mb-2">Community Stories</p>
          <h2 className="text-center font-['Playfair_Display',serif] text-3xl lg:text-4xl mb-10">Hear from women who found their salon</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((item, index) => (
              <article key={item.name} className="bg-white border border-[#EDE2D8] rounded-xl p-5 reveal" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex gap-1 mb-3">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p className="text-[#6D5742] text-[15px] leading-relaxed mb-5">“{item.text}”</p>
                <div className="flex items-center gap-3 border-t border-[#F2E8DD] pt-3">
                  <span className="w-7 h-7 rounded-full bg-[#F4ECE3] text-[#7B5B3A] text-xs font-semibold flex items-center justify-center">{item.initial}</span>
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-[#8A725B]">{item.area}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <span className="w-10 h-10 rounded-full bg-[#F4ECE3] border border-[#E6D8C8] inline-flex items-center justify-center text-[#A98258] mb-4">♡</span>
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl mb-6">Built on trust, respect, and comfort</h2>
          <p className="text-[#8C755E] text-[17px] leading-relaxed">
            HijabiFriendly isn't just a directory. It's a space created to make everyday beauty care easier, safer, and more respectful for hijabi women. Every salon, every review, every detail is curated with you in mind.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#3D2B1F] via-[#4A3224] to-[#3D2B1F] py-24 border-b border-[#725645]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-5xl text-white mb-6 leading-tight">Ready to feel comfortable at your next salon visit?</h2>
          <p className="text-[#D2BBA2] mb-7 text-[18px]">Find a hijab-friendly salon near you today.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center gap-2 bg-white text-[#3D2B1F] px-10 py-4 rounded-full hover:-translate-y-0.5 transition-all">Find salons near me →</a>
            <a href="#for-salons" className="inline-flex items-center justify-center gap-2 text-[#D8C3AC] px-10 py-4 rounded-full border border-[#6B4E3D] hover:border-[#D8C3AC] transition-colors">List my salon</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#3D2B1F] text-[#D9C3AA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="#" className="font-['Playfair_Display',serif] text-[28px] leading-none inline-block mb-4">
              <span className="text-white">Hijabi</span><span className="text-[#BFA78E]">Friendly</span>
            </a>
            <p className="text-sm text-[#B8A08A] leading-relaxed mb-5">
              A space created to make everyday beauty care easier, safer, and more respectful for hijabi women in New York City.
            </p>
            <div className="flex gap-2">
              <span className="w-7 h-7 rounded-full border border-[#6B4F3D] inline-flex items-center justify-center text-xs">◎</span>
              <span className="w-7 h-7 rounded-full border border-[#6B4F3D] inline-flex items-center justify-center text-xs">◈</span>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] tracking-[0.16em] uppercase text-[#B89F88] mb-4">Platform</h3>
            <div className="space-y-2.5 text-sm">
              <a href="#" className="block hover:text-white transition-colors">Find a Salon</a>
              <a href="#for-salons" className="block hover:text-white transition-colors">List Your Salon</a>
              <a href="#benefits" className="block hover:text-white transition-colors">Why Choose Us</a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] tracking-[0.16em] uppercase text-[#B89F88] mb-4">Support</h3>
            <div className="space-y-2.5 text-sm">
              <a href="#" className="block hover:text-white transition-colors">Salon Guidelines</a>
              <a href="#" className="block hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] tracking-[0.16em] uppercase text-[#B89F88] mb-4">Stay Updated</h3>
            <p className="text-sm text-[#B8A08A] mb-4">Get notified when new salons join in your area.</p>
            <div className="flex rounded-full overflow-hidden border border-[#654A39] bg-[#4A3224]">
              <input
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-[#E6D7C7] placeholder:text-[#8E745E] outline-none"
                placeholder="Your email"
              />
              <button className="bg-[#7A5A45] px-4 text-white hover:bg-[#8A6A55] transition-colors">→</button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 border-t border-[#664B39] text-xs text-[#8E745D] flex items-center justify-between">
          <span>© 2026 HIJABI FRIENDLY. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#D9C3AA] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#D9C3AA] transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <div className="font-['Inter',sans-serif] text-[#3D2B1F] antialiased selection:bg-[#D4C5B2] selection:text-[#3D2B1F] bg-[#FAF8F5]">
      <nav className="sticky top-0 z-50 w-full transition-all duration-300 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#F1EAE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <a className="flex items-center space-x-2" href="#">
              <span
                className="text-2xl tracking-tight font-['Playfair_Display',serif]"
                style={{ fontWeight: 700 }}
              >
                <span className="text-[#7B5B3A]">Hijabi</span>
                <span className="text-[#3D2B1F]">Friendly</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center space-x-10">
              <a href="#problem-solution" className="text-[#8B7355] hover:text-[#3D2B1F] transition-colors text-sm tracking-wide" style={{ fontWeight: 500 }}>The Problem</a>
              <a href="#benefits" className="text-[#8B7355] hover:text-[#3D2B1F] transition-colors text-sm tracking-wide" style={{ fontWeight: 500 }}>Why Us</a>
              <a href="#for-salons" className="text-[#8B7355] hover:text-[#3D2B1F] transition-colors text-sm tracking-wide" style={{ fontWeight: 500 }}>For Salons</a>
              <a href="#testimonials" className="text-[#8B7355] hover:text-[#3D2B1F] transition-colors text-sm tracking-wide" style={{ fontWeight: 500 }}>Community</a>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <a className="text-[#7B5B3A] hover:text-[#3D2B1F] text-sm" href="#" style={{ fontWeight: 500 }}>List Your Salon</a>
              <a className="bg-[#3D2B1F] text-white px-4 py-2 rounded-full text-sm hover:bg-[#2D1D14] transition-colors" href="#" style={{ fontWeight: 500 }}>Find Salons</a>
            </div>
            <a className="lg:hidden bg-[#3D2B1F] text-white px-4 py-2 rounded-full text-sm" href="#">Find Salons</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#F5F0E8] text-[#7B5B3A] px-4 py-1.5 text-xs tracking-wider uppercase mb-6" style={{ fontWeight: 600 }}>
                Trusted by hijabi women in NYC
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-['Playfair_Display',serif] text-[#3D2B1F] leading-[1.15] mb-6" style={{ fontWeight: 600 }}>
                Find salons that<br />respect your privacy
              </h1>
              <p className="text-[#8B7355] text-lg leading-relaxed mb-8 max-w-xl">
                Discover salons in New York City that offer private spaces, female-only staff, and an environment where you can remove your hijab with comfort and confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-7">
                <a className="inline-flex items-center justify-center space-x-2 bg-[#3D2B1F] text-white px-8 py-3.5 rounded-full transition-all hover:bg-[#2D1D14]" href="#" style={{ fontWeight: 500 }}>Search</a>
                <a className="inline-flex items-center justify-center space-x-2 border border-[#D8CBBD] text-[#7B5B3A] px-8 py-3.5 rounded-full transition-all hover:border-[#7B5B3A]" href="#" style={{ fontWeight: 500 }}>Find Salons</a>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Bay Ridge', 'Astoria', 'Flatbush', 'Jackson Heights'].map((area) => (
                  <span key={area} className="text-[11px] text-[#7B5B3A] bg-[#F5F0E8] px-3 py-1 rounded-full">{area}</span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-white border border-[#EEE4D7] shadow-[0_25px_60px_rgba(61,43,31,0.18)]">
                <img
                  src="https://images.unsplash.com/photo-1633681926035-ec1ac984418a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Woman in salon"
                  className="w-full h-[460px] sm:h-[520px] object-cover"
                />
              </div>
              <div className="absolute -top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-[#F1E6D8]">
                <div className="flex items-center gap-0.5"><StarIcon small /><StarIcon small /><StarIcon small /><StarIcon small /><StarIcon small /></div>
                <span className="text-xs text-[#8B7355]">4.9 reviews</span>
              </div>
              <div className="absolute -bottom-4 left-4 bg-white rounded-xl px-4 py-2.5 border border-[#EEE4D7] shadow-sm">
                <p className="text-xs text-[#3D2B1F]" style={{ fontWeight: 600 }}>Community Verified</p>
                <p className="text-[11px] text-[#8B7355]">Only vetted salons listed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs tracking-widest uppercase text-[#7B5B3A] mb-2 block" style={{ fontWeight: 600 }}>Featured in NYC</span>
              <h2 className="text-2xl lg:text-3xl font-['Playfair_Display',serif] text-[#3D2B1F]" style={{ fontWeight: 600 }}>Popular hijab-friendly salons</h2>
            </div>
            <a className="hidden sm:inline-flex items-center space-x-2 text-[#7B5B3A] hover:text-[#3D2B1F] transition-colors group" href="#" style={{ fontWeight: 500 }}><span className="text-sm">View all salons</span></a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {salonCards.map((salon) => (
              <div key={salon.name} className="bg-white rounded-2xl border border-[#EDE6DB] overflow-hidden hover:shadow-[0_8px_30px_rgba(123,91,58,0.1)] transition-all duration-300 group">
                <div className="relative h-44 overflow-hidden">
                  <img src={salon.image} alt={salon.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <StarIcon small />
                    <span className="text-xs text-[#3D2B1F]" style={{ fontWeight: 600 }}>{salon.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-[#3D2B1F] mb-1 font-['Playfair_Display',serif]" style={{ fontWeight: 600 }}>{salon.name}</h3>
                  <div className="flex items-center space-x-1.5 text-[#8B7355] text-xs mb-3"><MapPinIcon /><span>{salon.location}</span></div>
                  <div className="flex flex-wrap gap-1">
                    {salon.tags.map((tag) => (
                      <span key={tag} className="text-[10px] text-[#7B5B3A] bg-[#F5F0E8] px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-[#3D2B1F] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-x-12 gap-y-3 text-[#D4C5B2] text-sm">
          {benefits.map((b) => <span key={b}>{b}</span>)}
        </div>
      </section>

      <section id="problem-solution" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs tracking-widest uppercase text-[#7B5B3A] mb-3 block" style={{ fontWeight: 600 }}>The Problem</span>
            <h2 className="text-3xl lg:text-4xl font-['Playfair_Display',serif] text-[#3D2B1F] mb-6" style={{ fontWeight: 600 }}>Finding a salon shouldn't feel stressful</h2>
            <p className="text-[#8B7355] mb-6 text-lg">Yet most women have to navigate uncomfortable situations just to get a haircut.</p>
            <ul className="space-y-3 text-[#6E5844]">
              <li>Call salons and awkwardly explain their needs</li>
              <li>Worry about privacy, staff, and male presence</li>
              <li>Compromise on comfort or safety</li>
            </ul>
          </div>
          <div>
            <span className="text-xs tracking-widest uppercase text-[#7B5B3A] mb-3 block" style={{ fontWeight: 600 }}>The Solution</span>
            <h2 className="text-3xl lg:text-4xl font-['Playfair_Display',serif] text-[#3D2B1F] mb-6" style={{ fontWeight: 600 }}>HijabiFriendly helps you find salons that already understand you</h2>
            <p className="text-[#8B7355] mb-6 text-lg">No explaining. No second-guessing. Just book with confidence.</p>
            <ul className="space-y-3 text-[#6E5844]">
              <li>Search salons that match your privacy needs</li>
              <li>See verified details before you visit</li>
              <li>Read reviews from other hijabi women</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FAF8F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-['Playfair_Display',serif] text-[#3D2B1F] mb-10" style={{ fontWeight: 600 }}>Why women choose HijabiFriendly</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Every listed salon meets our strict privacy standards.",
              "Know exactly what to expect: rooms, staff, timings.",
              "These salons already understand your needs.",
              "Built on reviews and recommendations from hijabi women.",
            ].map((text) => (
              <div key={text} className="rounded-2xl bg-white border border-[#EEE4D7] p-6 text-[#6E5844] leading-relaxed">{text}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="for-salons" className="py-24 bg-[#3D2B1F] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs tracking-widest uppercase text-[#B8A99A] mb-3 block" style={{ fontWeight: 600 }}>For Salon Owners</span>
            <h2 className="text-3xl lg:text-4xl font-['Playfair_Display',serif] text-white mb-6 leading-tight" style={{ fontWeight: 600 }}>Are you a hijab-friendly salon owner?</h2>
            <p className="text-[#D4C5B2] text-lg leading-relaxed mb-6">Let the right customers find you. HijabiFriendly helps salon owners who respect privacy reach women actively looking for hijab-friendly services.</p>
            <p className="text-[#D4C5B2] mb-4">By listing your salon, you get:</p>
            <ul className="space-y-3 text-[#E6D9CB]">
              <li>Visibility to a niche, high-intent audience</li>
              <li>Clear expectations from customers</li>
              <li>More walk-ins and repeat clients</li>
              <li>A profile highlighting your practices</li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a className="inline-flex items-center justify-center space-x-2 bg-white text-[#3D2B1F] px-10 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-white/10" href="#" style={{ fontWeight: 600 }}>List Your Salon</a>
              <a className="inline-flex items-center justify-center space-x-2 text-[#D4C5B2] border border-[#5A4030] hover:border-[#D4C5B2] px-10 py-4 rounded-full transition-all" href="#">Learn Requirements</a>
            </div>
            <p className="text-[#D4C5B2] mb-4">It only takes a few minutes to get listed.</p>
            <ul className="space-y-3 text-[#E6D9CB]">
              <li>Add your salon details</li>
              <li>Mention your hijab-friendly facilities</li>
              <li>Get discovered by nearby customers</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-['Playfair_Display',serif] text-[#3D2B1F] mb-10" style={{ fontWeight: 600 }}>Hear from women who found their salon</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: '"I no longer have to call ahead and awkwardly explain my needs. I just search, pick a salon, and walk in knowing my privacy is respected."',
                initial: "A",
                area: "Bay Ridge, Brooklyn",
              },
              {
                text: '"As a salon owner, listing here brought us clients who truly appreciate what we offer. The platform understands our values."',
                initial: "F",
                area: "Astoria, Queens",
              },
              {
                text: '"The reviews from other hijabis gave me confidence to try a new stylist. It was the most relaxing salon experience I\'ve had."',
                initial: "L",
                area: "Flatbush, Brooklyn",
              },
            ].map((testimonial) => (
              <article key={testimonial.initial} className="bg-white border border-[#EEE4D7] rounded-2xl p-6">
                <p className="text-[#6E5844] leading-relaxed mb-5">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F5F0E8] text-[#7B5B3A] flex items-center justify-center text-sm" style={{ fontWeight: 600 }}>{testimonial.initial}</div>
                  <p className="text-sm text-[#8B7355]">{testimonial.area}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-['Playfair_Display',serif] text-[#3D2B1F] mb-6" style={{ fontWeight: 600 }}>Built on trust, respect, and comfort</h2>
          <p className="text-[#8B7355] text-lg leading-relaxed">HijabiFriendly isn't just a directory. It's a space created to make everyday beauty care easier, safer, and more respectful for hijabi women. Every salon, every review, every detail is curated with you in mind.</p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#3D2B1F] via-[#4D3628] to-[#3D2B1F] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-['Playfair_Display',serif] text-white mb-6 leading-tight" style={{ fontWeight: 600 }}>Ready to feel comfortable at your next salon visit?</h2>
          <p className="text-[#D4C5B2] text-lg mb-10">Find a hijab-friendly salon near you today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="group inline-flex items-center justify-center space-x-2 bg-white text-[#3D2B1F] px-10 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-white/10" href="#" style={{ fontWeight: 600 }}>Find salons near me</a>
            <a className="inline-flex items-center justify-center space-x-2 text-[#D4C5B2] border border-[#5A4030] hover:border-[#D4C5B2] px-10 py-4 rounded-full transition-all" href="#">List my salon</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#3D2B1F] border-t border-[#5A4030]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-[#D4C5B2]">
          <div>
            <a className="inline-block mb-5" href="#">
              <span className="text-2xl tracking-tight font-['Playfair_Display',serif]" style={{ fontWeight: 700 }}>
                <span className="text-white">Hijabi</span><span className="text-[#B8A99A]">Friendly</span>
              </span>
            </a>
            <p className="text-sm text-[#B8A99A] leading-relaxed">A space created to make everyday beauty care easier, safer, and more respectful for hijabi women in New York City.</p>
          </div>
          <div>
            <h3 className="text-xs tracking-widest uppercase text-[#B8A99A] mb-5">Platform</h3>
            <div className="space-y-3 text-sm">
              <a className="block text-[#D4C5B2] hover:text-white transition-colors" href="#">Find a Salon</a>
              <a className="block text-[#D4C5B2] hover:text-white transition-colors" href="#">List Your Salon</a>
              <a className="block text-[#D4C5B2] hover:text-white transition-colors" href="#">Why Choose Us</a>
            </div>
          </div>
          <div>
            <h3 className="text-xs tracking-widest uppercase text-[#B8A99A] mb-5">Support</h3>
            <div className="space-y-3 text-sm">
              <a className="block text-[#D4C5B2] hover:text-white transition-colors" href="#">Salon Guidelines</a>
              <a className="block text-[#D4C5B2] hover:text-white transition-colors" href="#">Contact Us</a>
            </div>
          </div>
          <div>
            <h3 className="text-xs tracking-widest uppercase text-[#B8A99A] mb-5">Stay Updated</h3>
            <p className="text-sm text-[#B8A99A] mb-4">Get notified when new salons join in your area.</p>
            <div className="flex bg-[#4D3628] border border-[#5A4030] rounded-full overflow-hidden">
              <input className="bg-transparent text-sm text-[#D4C5B2] placeholder:text-[#8B7355] px-4 py-2.5 outline-none w-full" placeholder="Email" />
              <button className="bg-[#7B5B3A] hover:bg-[#8B7355] text-white px-4">→</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 border-t border-[#5A4030] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8B7355]">
          <p>© 2026 HijabiFriendly. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-[#D4C5B2] transition-colors" href="#">Terms</a>
            <a className="hover:text-[#D4C5B2] transition-colors" href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}