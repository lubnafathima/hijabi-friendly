import { Link, useNavigate } from "react-router";
import type { Route } from "./+types/home";
import { SiteFooter, SiteNav } from "~/components/site-shell";
import { salons } from "~/data/salons";

const popular = salons.slice(0, 4);
const quickTags = ["Bay Ridge", "Astoria", "Flatbush", "Jackson Heights"];

export function meta({}: Route.MetaArgs) {
  return [{ title: "Hijab Friendly Salon" }];
}

export default function Home() {
  const navigate = useNavigate();
  let q = "";

  const doSearch = () => navigate(`/salons?q=${encodeURIComponent(q)}`);

  return (
    <div className="bg-[#FAF8F5] text-[#3D2B1F] font-['Inter',sans-serif] antialiased">
      <SiteNav />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-[#F2EAE0] text-[#7B5B3A] px-4 py-1.5 rounded-full text-[10px] tracking-[0.12em] uppercase font-semibold mb-6">
              ● Trusted by hijabi women in NYC
            </span>
            <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] mb-5">
              Find salons that
              <br />
              respect your privacy
            </h1>
            <p className="max-w-[560px] text-[#7D6651] text-[18px] leading-relaxed mb-8">
              Discover salons in New York City that offer private spaces, female-only staff, and an environment where you can remove your hijab with comfort and confidence.
            </p>

            <div className="bg-white border border-[#EDE6DB] rounded-2xl p-2 flex flex-col sm:flex-row gap-2 sm:items-center max-w-[560px] mb-4 shadow-sm">
              <input
                className="flex-1 px-4 py-2.5 outline-none text-sm"
                placeholder="Neighborhood or zip code..."
                onChange={(e) => (q = e.target.value)}
              />
              <button onClick={doSearch} className="bg-[#3D2B1F] text-white rounded-full px-7 py-2.5 text-sm">Search</button>
            </div>

            <div className="flex flex-wrap gap-2 text-[10px] text-[#7B5B3A]">
              {quickTags.map((tag) => (
                <button key={tag} onClick={() => navigate(`/salons?q=${encodeURIComponent(tag)}`)} className="bg-[#F2EAE0] px-2.5 py-1 rounded-full">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up-delay">
            <div className="rounded-[22px] overflow-hidden border border-[#E8DDD0] shadow-[0_18px_55px_rgba(61,43,31,0.14)]">
              <img src="https://hijabfriendly.figma.site/_assets/v11/b441765cdccee5086d15337430dc2fc5ff889a00.png" alt="Woman in salon" className="w-full h-[500px] lg:h-[600px] object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-['Playfair_Display',serif] text-2xl lg:text-3xl">Popular hijab-friendly salons</h2>
            <Link to="/salons" className="text-sm text-[#7B5B3A]">View all salons →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popular.map((salon) => (
              <Link key={salon.id} to={`/salons/${salon.id}`} className="bg-white border border-[#ECE2D8] rounded-xl overflow-hidden hover:-translate-y-1 transition-all">
                <img src={salon.image} alt={salon.name} className="w-full h-[136px] object-cover" />
                <div className="p-3.5">
                  <h3 className="font-['Playfair_Display',serif] text-[20px] mb-1.5">{salon.name}</h3>
                  <p className="text-[11px] text-[#856E57]">{salon.neighborhood}, {salon.borough}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl mb-6">Why women choose HijabiFriendly</h2>
          <div className="grid md:grid-cols-2 gap-4 text-[#8B7355]">
            <p>Privacy-first salons only.</p>
            <p>Verified hijab-friendly practices.</p>
            <p>Built by the Muslim community.</p>
            <p>Reviews from women like you.</p>
          </div>
        </div>
      </section>

      <section id="for-salons" className="bg-[#3D2B1F] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl mb-6">Are you a hijab-friendly salon owner?</h2>
          <div className="flex gap-3">
            <Link to="/add-listing" className="bg-white text-[#3D2B1F] px-8 py-3.5 rounded-full">List Your Salon</Link>
            <Link to="/guidelines" className="border border-[#6E5140] px-8 py-3.5 rounded-full">Learn Requirements</Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#3D2B1F] via-[#4A3224] to-[#3D2B1F] py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-5xl mb-6">Ready to feel comfortable at your next salon visit?</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/salons" className="bg-white text-[#3D2B1F] px-10 py-4 rounded-full">Find salons near me</Link>
            <Link to="/add-listing" className="border border-[#6B4E3D] px-10 py-4 rounded-full">List my salon</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
