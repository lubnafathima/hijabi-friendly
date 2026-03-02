import { Link } from "react-router";
import { SiteFooter, SiteNav } from "~/components/site-shell";

export default function AddListing() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      <SiteNav />
      <section className="bg-[#3D2B1F] text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/" className="text-sm">← Back to home</Link>
          <h1 className="font-['Playfair_Display',serif] text-6xl mt-3">List Your Salon</h1>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <h2 className="font-['Playfair_Display',serif] text-4xl">Basic Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input className="border rounded-xl px-4 py-3" placeholder="Salon Name" />
          <input className="border rounded-xl px-4 py-3" placeholder="Owner Name" />
          <input className="border rounded-xl px-4 py-3" placeholder="Email" />
          <input className="border rounded-xl px-4 py-3" placeholder="Phone" />
        </div>
        <textarea className="border rounded-xl px-4 py-3 w-full h-32" placeholder="Description" />
        <button className="bg-[#3D2B1F] text-white px-8 py-3 rounded-full">Submit your salon →</button>
      </section>
      <SiteFooter />
    </div>
  );
}
