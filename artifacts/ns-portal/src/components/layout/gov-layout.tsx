import { Shield, Eye, Lock } from "lucide-react";
import { Link } from "wouter";

export function GovMasthead() {
  return (
    <div className="bg-[#f0f0f0] text-[#333333] text-[11px] sm:text-xs py-1.5 px-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
        <div className="flex items-center gap-2">
          {/* Simple lion head placeholder (SVG representation of SG crest style) */}
          <div className="w-4 h-4 bg-[#cc0000] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm" />
          </div>
          <span className="font-medium text-gray-700">A Singapore Government Agency Website</span>
        </div>
        
        <div className="flex items-center gap-4 text-gray-600 hidden sm:flex">
          <button className="flex items-center gap-1 hover:underline">
            <Eye className="w-3.5 h-3.5" />
            How to identify
          </button>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <GovMasthead />
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1" data-testid="link-home">
          <span className="text-3xl font-extrabold text-primary tracking-tighter lowercase">ns</span>
          <span className="text-xl font-bold text-gray-800">.gov.sg</span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3 text-sm text-gray-600 font-medium">
            <button className="text-primary font-bold">EN</button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-primary transition-colors">中文</button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-primary transition-colors">Melayu</button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-primary transition-colors">தமிழ்</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-extrabold text-primary tracking-tighter lowercase">ns</span>
              <span className="text-lg font-bold text-gray-800">.gov.sg</span>
            </div>
            <p className="text-sm text-gray-600 mb-4 max-w-sm">
              The official portal for Singapore National Servicemen to access services and manage their NS journey.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">About NS</a></li>
              <li><a href="#" className="hover:text-primary">Pre-Enlistees</a></li>
              <li><a href="#" className="hover:text-primary">Full-time NSFs</a></li>
              <li><a href="#" className="hover:text-primary">Operationally Ready NSmen</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary">Feedback</a></li>
              <li><a href="#" className="hover:text-primary">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500">
            <li><a href="#" className="hover:text-gray-900">Report Vulnerability</a></li>
            <li><a href="#" className="hover:text-gray-900">Privacy Statement</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms of Use</a></li>
            <li><a href="#" className="hover:text-gray-900">Sitemap</a></li>
          </ul>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Government of Singapore.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
