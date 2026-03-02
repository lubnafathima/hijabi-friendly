import { Link } from "react-router";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#EFE7DE] bg-[#FAF8F5]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[74px] flex items-center justify-between">
        <Link to="/" className="font-['Playfair_Display',serif] text-[28px] tracking-tight leading-none">
          <span className="text-[#7B5B3A]">Hijabi</span>
          <span className="text-[#3D2B1F]">Friendly</span>
        </Link>

        <div className="hidden lg:flex items-center gap-10 text-[13px] text-[#8B7355]">
          <a href="/#problem-solution" className="hover:text-[#3D2B1F]">The Problem</a>
          <a href="/#why-choose-us" className="hover:text-[#3D2B1F]">Why Us</a>
          <a href="/#for-salons" className="hover:text-[#3D2B1F]">For Salons</a>
          <a href="/#testimonials" className="hover:text-[#3D2B1F]">Community</a>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-[13px]">
          <Link to="/add-listing" className="text-[#7B5B3A] hover:text-[#3D2B1F]">List Your Salon</Link>
          <Link to="/salons" className="group flex items-center space-x-2 bg-[#3D2B1F] hover:bg-[#2A1D15] text-white px-6 py-2.5 rounded-full text-sm transition-all">Find Salons →</Link>
        </div>

        <Link to="/salons" className="lg:hidden bg-[#3D2B1F] text-white px-4 py-2 rounded-full text-sm">Find Salons</Link>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#3D2B1F] text-[#D9C3AA] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="font-['Playfair_Display',serif] text-[28px] inline-block mb-3">
            <span className="text-white">Hijabi</span><span className="text-[#BFA78E]">Friendly</span>
          </Link>
          <p className="text-sm text-[#B8A08A] mb-4">A space created to make everyday beauty care easier and safer for hijabi women in New York City.</p>
          <div className="flex gap-2 text-xs">
            <a href="https://www.instagram.com/nusrat.ahmd" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full border border-[#6B4F3D] inline-flex items-center justify-center">◎</a>
            <a href="mailto:nusrata17@gmail.com" className="w-7 h-7 rounded-full border border-[#6B4F3D] inline-flex items-center justify-center">✉</a>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-[10px] tracking-[0.16em] uppercase text-[#B89F88] mb-3">Platform</p>
          <Link to="/salons" className="block">Find a Salon</Link>
          <Link to="/add-listing" className="block">List Your Salon</Link>
          <a href="/#why-choose-us" className="block">Why Choose Us</a>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-[10px] tracking-[0.16em] uppercase text-[#B89F88] mb-3">Support</p>
          <Link to="/guidelines" className="block">Salon Guidelines</Link>
          <Link to="/contact" className="block">Contact Us</Link>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.16em] uppercase text-[#B89F88] mb-3">Stay Updated</p>
          <div className="flex rounded-full overflow-hidden border border-[#654A39] bg-[#4A3224]">
            <input className="flex-1 bg-transparent px-4 py-2.5 text-sm" placeholder="Your email" />
            <button className="bg-[#7A5A45] px-4 text-white">→</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
