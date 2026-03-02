import { Link } from "react-router";
import { SiteFooter, SiteNav } from "~/components/site-shell";

export default function ContactPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#3D2B1F]">
      <SiteNav />
      <section className="bg-[#3D2B1F] text-white py-12"><div className="max-w-4xl mx-auto px-4"><Link to="/" className="text-sm">← Back to home</Link><h1 className="font-['Playfair_Display',serif] text-6xl mt-3">Contact Us</h1><p className="text-[#D7C5B1] mt-2">Have a question, suggestion, or just want to say hello? We'd love to hear from you.</p></div></section>
      <section className="max-w-4xl mx-auto px-4 py-10 grid lg:grid-cols-2 gap-6">
        <div><h2 className="font-['Playfair_Display',serif] text-4xl mb-4">Get in Touch</h2><p className="text-[#8B7355] mb-6">Whether you're a hijabi woman looking for salon recommendations, or a salon owner interested in joining our platform, we're here to help.</p><div className="space-y-4"><p>✉ Email<br/><a href="mailto:nusrata17@gmail.com">nusrata17@gmail.com</a></p><p>◎ Instagram<br/><a href="https://www.instagram.com/nusrat.ahmd" target="_blank" rel="noreferrer">@nusrat.ahmd</a></p><p>◉ Location<br/>Serving New York City</p><p>◷ Response Time<br/>Usually within 24 hours</p></div><div className="bg-[#F4EDE3] rounded-xl p-4 mt-6"><p className="font-semibold">Common Questions?</p><p><Link to="/guidelines">View salon requirements →</Link></p><p><Link to="/add-listing">List your salon →</Link></p><p><Link to="/salons">Browse salons →</Link></p></div></div>
        <div className="bg-white border rounded-2xl p-6"><h3 className="font-['Playfair_Display',serif] text-4xl mb-4">Send a Message</h3><div className="grid grid-cols-2 gap-3 mb-3"><input className="border rounded-xl px-4 py-3" placeholder="Your full name" /><input className="border rounded-xl px-4 py-3" placeholder="you@example.com" /></div><input className="border rounded-xl px-4 py-3 w-full mb-3" placeholder="Select a topic" /><textarea className="border rounded-xl px-4 py-3 w-full h-32 mb-4" placeholder="Tell us how we can help..." /><button className="bg-[#3D2B1F] text-white px-8 py-3 rounded-full">Send Message ✈</button></div>
      </section>
      <SiteFooter />
    </div>
  );
}
