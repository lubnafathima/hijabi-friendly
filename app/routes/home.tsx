import { Link, useNavigate } from "react-router";
import { useState } from "react";
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
  const [q, setQ] = useState("");

  return (
    <div className="bg-[#FAF8F5] text-[#3D2B1F] font-['Inter',sans-serif] antialiased">
      <SiteNav />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#F2EAE0] text-[#7B5B3A] px-4 py-1.5 rounded-full text-[11px] tracking-[0.1em] uppercase font-semibold mb-6">🛡 Trusted by hijabi women in NYC</span>
            <h1 className="font-['Playfair_Display',serif] text-[56px] leading-[1.05] mb-6">Find salons that respect your privacy</h1>
            <p className="text-[#7D6651] text-[19px] leading-relaxed mb-8 max-w-xl">Discover salons in New York City that offer private spaces, female-only staff, and an environment where you can remove your hijab with comfort and confidence.</p>
            <div className="bg-white border border-[#EDE6DB] rounded-3xl p-2 flex gap-2 max-w-[620px] mb-4">
              <input value={q} onChange={(e)=>setQ(e.target.value)} className="flex-1 px-5 py-3 text-sm outline-none" placeholder="Neighborhood or zip code..." />
              <button onClick={()=>navigate(`/salons?q=${encodeURIComponent(q)}`)} className="bg-[#3D2B1F] text-white px-9 py-3 rounded-2xl text-lg">⌕ Search</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickTags.map((tag)=><button key={tag} onClick={()=>{setQ(tag); navigate(`/salons?q=${encodeURIComponent(tag)}`)}} className="px-4 py-2 bg-[#F2EAE0] rounded-full text-sm text-[#7B5B3A]">{tag}</button>)}
            </div>
          </div>
          <div className="relative">
            <img src="https://hijabfriendly.figma.site/_assets/v11/b441765cdccee5086d15337430dc2fc5ff889a00.png" className="w-full h-[600px] object-cover rounded-3xl" />
            <div className="absolute -top-4 right-4 bg-white rounded-full px-4 py-2 text-[22px]">★★★★★ 4.9 avg. rating</div>
            <div className="absolute -bottom-4 left-5 bg-white rounded-xl px-4 py-2 text-[20px]">🤍 Community Verified</div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div><p className="text-[11px] uppercase tracking-[0.14em] text-[#A18362]">Featured in NYC</p><h2 className="font-['Playfair_Display',serif] text-5xl">Popular hijab-friendly salons</h2></div>
            <Link to="/salons" className="text-[#7B5B3A]">View all salons →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popular.map((s)=><Link key={s.id} to={`/salons/${s.id}`} className="bg-white border border-[#EDE2D8] rounded-xl overflow-hidden">
              <img src={s.image} className="w-full h-40 object-cover" />
              <div className="p-4"><h3 className="font-['Playfair_Display',serif] text-3xl">{s.name}</h3><p className="text-sm text-[#8B7355]">{s.neighborhood}, {s.borough}</p></div>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="bg-[#3D2B1F] text-[#DCC6AE] py-5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-10 text-sm"><span>◉ Privacy-first salons only</span><span>◉ Verified hijab-friendly practices</span><span>◉ Built by the Muslim community</span></div></section>

      <section id="problem-solution" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div><p className="text-[11px] uppercase tracking-[0.14em] text-[#A18362]">The Problem</p><h2 className="font-['Playfair_Display',serif] text-5xl mb-4">Finding a salon shouldn't feel stressful</h2><div className="space-y-3">{["Call salons and awkwardly explain their needs","Worry about privacy, staff, and male presence","Compromise on comfort or safety"].map(i=><div key={i} className="bg-[#F7F2EB] border rounded-xl p-3">⚪ {i}</div>)}</div></div>
          <div><p className="text-[11px] uppercase tracking-[0.14em] text-[#A18362]">The Solution</p><h2 className="font-['Playfair_Display',serif] text-5xl mb-4">HijabiFriendly helps you find salons that already understand you</h2><div className="space-y-3">{["Search salons that match your privacy needs","See verified details before you visit","Read reviews from other hijabi women"].map(i=><div key={i} className="bg-[#F7F2EB] border rounded-xl p-3">⚪ {i}</div>)}</div></div>
        </div>
      </section>

      <section id="why-choose-us" className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-3"><img src={salons[0].image} className="row-span-2 h-80 rounded-xl object-cover w-full" /><img src={salons[2].image} className="h-38 rounded-xl object-cover w-full" /><img src={salons[1].image} className="h-38 rounded-xl object-cover w-full" /></div>
          <div><p className="text-[11px] uppercase tracking-[0.14em] text-[#A18362]">Why Choose Us</p><h2 className="font-['Playfair_Display',serif] text-5xl mb-6">Why women choose HijabiFriendly</h2><div className="space-y-3 text-[#7B5B3A]"><p>◌ Privacy-first salons only</p><p>◌ Clear details before you visit</p><p>◌ No uncomfortable conversations</p><p>◌ Community-driven and trusted</p></div></div>
        </div>
      </section>

      <section id="for-salons" className="bg-gradient-to-r from-[#3D2B1F] to-[#4A3123] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div><p className="text-[11px] uppercase tracking-[0.14em] text-[#C9B6A1]">For Salon Owners</p><h2 className="font-['Playfair_Display',serif] text-5xl mb-4">Are you a hijab-friendly salon owner?</h2><p className="text-[#DCC7B1] mb-6">Let the right customers find you. HijabiFriendly helps salon owners who respect privacy reach women actively looking for hijab-friendly services.</p><div className="flex gap-3"><Link to="/add-listing" className="bg-white text-[#3D2B1F] px-8 py-3.5 rounded-full">List Your Salon →</Link><Link to="/guidelines" className="border border-[#6E5140] px-8 py-3.5 rounded-full">Learn Requirements</Link></div></div>
          <div><img src="https://images.unsplash.com/photo-1586448127354-6017a26ce03c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" className="w-full h-72 object-cover rounded-xl" /><div className="mt-3 bg-[#5A3D2D]/80 rounded-xl p-5">Listing your salon is simple</div></div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#FAF8F5] py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-['Playfair_Display',serif] text-5xl text-center mb-8">Hear from women who found their salon</h2><div className="grid md:grid-cols-3 gap-4">{["Amira K.","Fatima S.","Layla R."].map(n=><article key={n} className="bg-white border rounded-xl p-5">★★★★★<p className="mt-3 text-[#6D5742]">"Great experience and fully private setup."</p><p className="mt-4 text-sm">{n}</p></article>)}</div></div></section>

      <section className="bg-white py-24 text-center"><div className="max-w-4xl mx-auto px-4"><h2 className="font-['Playfair_Display',serif] text-5xl mb-4">Built on trust, respect, and comfort</h2><p className="text-[#8C755E]">HijabiFriendly isn't just a directory. It's a space created to make everyday beauty care easier, safer, and more respectful for hijabi women.</p></div></section>

      <section className="bg-gradient-to-br from-[#3D2B1F] via-[#4A3224] to-[#3D2B1F] py-24 text-center text-white"><div className="max-w-5xl mx-auto px-4"><h2 className="font-['Playfair_Display',serif] text-5xl mb-5">Ready to feel comfortable at your next salon visit?</h2><p className="text-[#D2BBA2] mb-7">Find a hijab-friendly salon near you today.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link to="/salons" className="bg-white text-[#3D2B1F] px-10 py-4 rounded-full">Find salons near me →</Link><Link to="/add-listing" className="border border-[#6B4E3D] px-10 py-4 rounded-full">List my salon</Link></div></div></section>

      <SiteFooter />
    </div>
  );
}
