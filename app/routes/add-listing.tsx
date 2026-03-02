import { Link } from "react-router";
import { SiteFooter, SiteNav } from "~/components/site-shell";

export default function AddListing() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#3D2B1F]">
      <SiteNav />
      <section className="bg-[#3D2B1F] text-white py-12"><div className="max-w-3xl mx-auto px-4"><Link to="/" className="text-sm">← Back to home</Link><h1 className="font-['Playfair_Display',serif] text-6xl mt-3">List Your Salon</h1><p className="text-[#D7C5B1] mt-2">Join HijabiFriendly and get discovered by hijabi women in NYC who are actively looking for salons that respect their privacy.</p></div></section>
      <div className="bg-[#4D3628] text-[#D7C5B1] text-sm py-3 text-center">◌ Free to list &nbsp;&nbsp; ◌ Reach a niche audience &nbsp;&nbsp; ◌ Reviewed in 2-3 days</div>
      <section className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <h2 className="font-['Playfair_Display',serif] text-4xl">Basic Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input className="border rounded-xl px-4 py-3" placeholder="e.g. Noor Beauty Lounge" /><input className="border rounded-xl px-4 py-3" placeholder="Your full name" />
          <input className="border rounded-xl px-4 py-3" placeholder="you@example.com" /><input className="border rounded-xl px-4 py-3" placeholder="(555) 123-4567" />
        </div>
        <h3 className="font-['Playfair_Display',serif] text-4xl">Location</h3>
        <input className="border rounded-xl px-4 py-3 w-full" placeholder="Street address, City, NY ZIP" />
        <input className="border rounded-xl px-4 py-3 w-full" placeholder="e.g. Bay Ridge, Brooklyn" />
        <h3 className="font-['Playfair_Display',serif] text-4xl">About Your Salon</h3>
        <textarea className="border rounded-xl px-4 py-3 w-full h-32" placeholder="Tell hijabi women what makes your salon special..." />
        <div className="grid md:grid-cols-2 gap-4"><input className="border rounded-xl px-4 py-3" placeholder="Mon-Sat 10am-7pm" /><div className="flex gap-2"><button className="border rounded-xl px-6">$</button><button className="bg-[#3D2B1F] text-white rounded-xl px-6">$$</button><button className="border rounded-xl px-6">$$$</button></div></div>
        <h3 className="font-['Playfair_Display',serif] text-4xl">Privacy Features</h3>
        <div className="grid md:grid-cols-2 gap-3">{["Fully private rooms","Curtained stations","Female-only staff at all times","Separate entrance for women","No male walk-ins during hours","Halal-certified products used"].map(i=><label key={i} className="border rounded-xl px-4 py-3 text-sm"><input type="checkbox" className="mr-2" />{i}</label>)}</div>
        <h3 className="font-['Playfair_Display',serif] text-4xl">Services Offered</h3>
        <div className="flex flex-wrap gap-2">{["Haircut & Styling","Hair Coloring","Keratin Treatment","Blowout","Bridal Makeup","Facials","Waxing","Threading","Lash Extensions","Brow Shaping","Nails","Henna","Body Scrub","Deep Conditioning"].map(s=><button key={s} className="border rounded-full px-3 py-1 text-sm">{s}</button>)}</div>
        <h3 className="font-['Playfair_Display',serif] text-4xl">Photos</h3>
        <div className="border border-dashed rounded-xl h-32 flex items-center justify-center text-[#8B7355]">Click to upload photos</div>
        <button className="bg-[#3D2B1F] text-white px-8 py-3 rounded-full">Submit your salon →</button>
      </section>
      <SiteFooter />
    </div>
  );
}
