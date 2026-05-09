import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Phone, Mail, MapPin, Zap, Bot, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-brand-light font-sans text-brand-dark flex flex-col">
      {/* Top Bar for Subsidy */}
      <div className="bg-brand-green text-white text-center py-2 px-4 text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
        <Zap size={16} />
        Krijg tot wel 30% van je isolatiekosten terug via de subsidie-regeling (ISDE).
      </div>

      {/* Header */}
      <header className="sticky w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/Blink-Specialist-_1_.webp-logo.png" alt="Blink Spuitisolatie Logo" className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex gap-8 font-semibold text-slate-600">
            <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <div className="group relative">
              <span className="hover:text-brand-orange transition-colors cursor-pointer pb-2">Topdiensten</span>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2">
                <Link to="/diensten/polyurethaan-pur" className="px-4 py-2 hover:bg-orange-50 hover:text-brand-orange rounded-lg">Polyurethaan (PUR)</Link>
                <Link to="/diensten/pur-vloerisolatie" className="px-4 py-2 hover:bg-orange-50 hover:text-brand-orange rounded-lg">PUR Vloer isolatie</Link>
                <Link to="/diensten/pur-dakisolatie" className="px-4 py-2 hover:bg-orange-50 hover:text-brand-orange rounded-lg">PUR Dak isolatie</Link>
                <Link to="/diensten/eps-spouwmuur-bodemisolatie" className="px-4 py-2 hover:bg-orange-50 hover:text-brand-orange rounded-lg">EPS spouwmuur & bodem</Link>
                <Link to="/diensten/pur-tankisolatie" className="px-4 py-2 hover:bg-orange-50 hover:text-brand-orange rounded-lg">PUR Tank isolatie</Link>
                <Link to="/diensten/pur-scheepsisolatie" className="px-4 py-2 hover:bg-orange-50 hover:text-brand-orange rounded-lg">PUR Scheeps/Jacht isolatie</Link>
              </div>
            </div>
            <Link to="/ons-werk" className="hover:text-brand-orange transition-colors">Ons werk</Link>
            <Link to="/ai-tools" className="text-brand-orange font-bold hover:text-orange-600 transition-colors flex items-center gap-1"><Zap size={16} /> AI Demo's</Link>
            <Link to="/over-ons" className="hover:text-brand-orange transition-colors">Over ons</Link>
            <Link to="/contact" className="hover:text-brand-orange transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="btn-primary py-2.5 px-6 rounded-xl hidden md:inline-flex">
              Snel Offerte
            </Link>
            <button 
              className="md:hidden p-2 text-brand-dark hover:text-brand-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <nav className="flex flex-col px-6 py-4 space-y-4 font-semibold text-slate-600">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-orange">Home</Link>
                <div className="flex flex-col space-y-2">
                  <span className="text-brand-orange font-bold">Topdiensten</span>
                  <div className="flex flex-col pl-4 border-l-2 border-brand-orange/20 space-y-3 mt-2">
                    <Link to="/diensten/polyurethaan-pur" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-orange text-sm">Polyurethaan (PUR)</Link>
                    <Link to="/diensten/pur-vloerisolatie" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-orange text-sm">PUR Vloer isolatie</Link>
                    <Link to="/diensten/pur-dakisolatie" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-orange text-sm">PUR Dak isolatie</Link>
                    <Link to="/diensten/eps-spouwmuur-bodemisolatie" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-orange text-sm">EPS spouwmuur & bodem</Link>
                    <Link to="/diensten/pur-tankisolatie" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-orange text-sm">PUR Tank isolatie</Link>
                    <Link to="/diensten/pur-scheepsisolatie" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-orange text-sm">PUR Scheeps/Jacht isolatie</Link>
                  </div>
                </div>
                <Link to="/ons-werk" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-orange">Ons werk</Link>
                <Link to="/ai-tools" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-orange font-bold flex items-center gap-1"><Zap size={16} /> AI Demo's</Link>
                <Link to="/over-ons" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-orange">Over ons</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-orange">Contact</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary py-3 text-center rounded-xl mt-4">
                  Snel Offerte Aanvragen
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-slate-300 py-16 border-t border-slate-800 mt-auto">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/Blink-Specialist-_1_.webp-logo.png" alt="Blink Spuitisolatie Logo" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="mb-6 leading-relaxed text-sm">Dé specialist in naadloze spuitisolatie voor vloeren, daken, spouwmuren en meer. Profiteer direct van de voordelen.</p>
            <div className="flex gap-4">
               {/* Sociaal verbinden */}
               <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange transition-colors text-white"><ArrowUpRight size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange transition-colors text-white"><ArrowUpRight size={18} /></a>
            </div>
          </div>

          {/* Ontdekken */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Ontdekken</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link to="/over-ons" className="hover:text-brand-orange transition-colors">Over ons</Link></li>
              <li><Link to="/ons-werk" className="hover:text-brand-orange transition-colors">Ons werk</Link></li>
              <li><Link to="/ai-tools" className="text-brand-orange font-bold hover:text-orange-600 transition-colors">AI Demo's</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Topdiensten */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Topdiensten</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/diensten/polyurethaan-pur" className="hover:text-brand-orange transition-colors">Polyurethaan (PUR)</Link></li>
              <li><Link to="/diensten/pur-vloerisolatie" className="hover:text-brand-orange transition-colors">PUR Vloer isolatie</Link></li>
              <li><Link to="/diensten/pur-dakisolatie" className="hover:text-brand-orange transition-colors">PUR Dak isolatie</Link></li>
              <li><Link to="/diensten/eps-spouwmuur-bodemisolatie" className="hover:text-brand-orange transition-colors">EPS spouwmuur & bodem</Link></li>
              <li><Link to="/diensten/pur-tankisolatie" className="hover:text-brand-orange transition-colors">PUR Tank isolatie</Link></li>
              <li><Link to="/diensten/pur-scheepsisolatie" className="hover:text-brand-orange transition-colors">PUR Scheeps/Jacht isolatie</Link></li>
            </ul>
          </div>

          {/* Contact & Abonneren */}
          <div>
             <h4 className="text-white font-bold mb-6 text-lg">Contact</h4>
             <ul className="space-y-4 text-sm mb-8">
               <li className="flex items-start gap-3">
                 <MapPin className="text-brand-orange shrink-0 mt-1" size={18} />
                 <span>Havenweg 108,<br/>Oosterhout 4905AB<br/>Noord-brabant, Nederland</span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="text-brand-orange shrink-0" size={18} />
                 <a href="https://wa.me/31643741530?text=Hallo%20Blink%20Spuitisolatie,%20ik%20heb%20een%20vraag." target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                   +31 6 43 74 15 30 (WhatsApp)
                 </a>
               </li>
                <li className="flex items-center gap-3">
                 <Mail className="text-brand-orange shrink-0" size={18} />
                 <a href="mailto:info@blinkspuitisolatie.nl" className="break-all text-[13px] leading-tight hover:text-white transition-colors">info@blinkspuitisolatie.nl</a>
               </li>
             </ul>

             <h4 className="text-white font-bold mb-4 text-lg">Abonneren</h4>
             <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
               <input type="email" placeholder="E-mailadres" className="bg-slate-800 text-white px-4 py-2 rounded-lg flex-1 outline-none focus:border-brand-orange border border-transparent text-sm" />
               <button className="bg-brand-orange px-4 py-2 rounded-lg text-white hover:bg-orange-600 transition-colors text-sm font-semibold">OK</button>
             </form>
          </div>
        </div>
        
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>KVK: 12345678 | © 2026 Blink Spuitisolatie. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
             <a href="#" className="hover:text-white transition-colors">Privacybeleid</a>
             <a href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
          </div>
        </div>
      </footer>

      {/* AI Chatbot Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div 
          initial={false}
          animate={{ scale: isChatOpen ? 1 : 0, opacity: isChatOpen ? 1 : 0 }}
          className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform origin-bottom-right"
        >
          <div className="bg-brand-blue p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold">
              <Bot size={20} className="text-brand-orange" />
              AI Isolatie Adviseur
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-slate-300 hover:text-white">&times;</button>
          </div>
          <div className="p-4 h-64 bg-slate-50 flex flex-col justify-end">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-sm text-slate-700 max-w-[85%] mb-4 border border-slate-100">
              Hallo! Ik ben de AI Adviseur van Blink. Hoe kan ik je vandaag helpen met besparen op je energierekening?
            </div>
          </div>
          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input type="text" placeholder="Typ je vraag..." className="flex-1 bg-slate-100 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 ring-brand-orange" />
            <button className="bg-brand-orange text-white p-2 rounded-lg hover:bg-orange-600 transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          <a 
            href="https://wa.me/31643741530?text=Hallo%20Blink%20Spuitisolatie,%20ik%20heb%20een%20vraag." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 group"
            title="Chat met ons op WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </a>

          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 group"
            title="Open AI Adviseur"
          >
            <Bot size={28} className="group-hover:animate-pulse" />
          </button>
        </div>
      </div>

    </div>
  );
}
