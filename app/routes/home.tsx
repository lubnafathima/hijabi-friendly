import type { Route } from "./+types/home";

const salonCards = [
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
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Female Staff Only", "Private Room"],
  },
  {
    name: "Barakah Beauty Bar",
    location: "Flatbush, Brooklyn",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Female Staff Only", "Walk-ins Welcome"],
  },
];

const benefits = [
  "Privacy-first salons only",
  "Verified hijab-friendly practices",
  "Built by the Muslim community",
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hijab Friendly Salon" },
    {
      name: "description",
      content:
        "Discover hijab-friendly salons that respect privacy and cater to Muslim women in NYC.",
    },
  ];
}

function StarIcon({ small = false }: { small?: boolean }) {
  const size = small ? "w-3 h-3" : "w-3.5 h-3.5";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${size} text-[#D4A76A]`}
      aria-hidden
    >
      <path d="m12 2.8 2.7 5.5 6.1.9-4.4 4.2 1 6-5.4-2.9-5.5 2.9 1.1-6-4.4-4.2 6.1-.9z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-3 h-3 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M20 10c0 5-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.2 4 15 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
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