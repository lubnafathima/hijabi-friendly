import { Link } from "react-router";
import { SiteFooter, SiteNav } from "~/components/site-shell";

export default function Guidelines() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#3D2B1F]">
      <SiteNav />
      <section className="bg-[#3D2B1F] text-white py-12"><div className="max-w-3xl mx-auto px-4"><Link to="/" className="text-sm">← Back to home</Link><h1 className="font-['Playfair_Display',serif] text-6xl mt-3">Salon Requirements</h1><p className="text-[#D7C5B1] mt-2">Understand what it takes to be listed on HijabiFriendly.</p></div></section>
      <section className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-xs uppercase tracking-[0.14em] text-[#A18362]">What we look for</p>
        <h2 className="font-['Playfair_Display',serif] text-5xl mb-6">Listing requirements at a glance</h2>
        <div className="space-y-3 mb-8">
          <div className="bg-white border rounded-xl p-5"><b>🔒 Private or semi-private spaces</b><p className="text-[#8B7355] mt-1">Your salon must offer either fully enclosed private rooms or curtained stations.</p></div>
          <div className="bg-white border rounded-xl p-5"><b>👥 Female-only staff during services</b><p className="text-[#8B7355] mt-1">All staff members providing direct services must be female.</p></div>
          <div className="bg-white border rounded-xl p-5 opacity-40"><b>◉ No visibility from outside</b><p className="text-[#8B7355] mt-1">Private areas must not be visible from street-facing windows.</p></div>
        </div>
        <div className="bg-[#8B7C6E] text-white rounded-2xl p-8"><p className="text-xs uppercase tracking-[0.14em]">Free salon guide</p><h3 className="font-['Playfair_Display',serif] text-5xl mb-3">Get the full salon readiness guide</h3><p className="text-[#E4D8CB] mb-4">We'll send you a detailed guide covering everything you need.</p><div className="flex gap-2"><input className="bg-[#A39282] rounded-xl px-4 py-3 flex-1" placeholder="Enter your email address" /><button className="bg-white text-[#3D2B1F] rounded-xl px-6">Send me the guide →</button></div></div>
        <div className="text-center mt-8"><p className="text-[#8B7355] mb-3">Already meet the requirements?</p><Link to="/add-listing" className="bg-[#3D2B1F] text-white px-8 py-3 rounded-full inline-block">List your salon now →</Link></div>
      </section>
      <SiteFooter />
    </div>
  );
}
