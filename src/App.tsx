import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle, Bot, ArrowRight, Zap, Shield, Home } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const images = [
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
];

function App() {
  const [step, setStep] = useState(1);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-brand-light font-sans text-brand-dark">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center">
              <Zap className="text-brand-orange" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tight text-brand-blue">
              Blink <span className="text-brand-orange">Spuitisolatie</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-8 font-semibold text-slate-600">
            <a href="#diensten" className="hover:text-brand-orange transition-colors">Diensten</a>
            <a href="#over-ons" className="hover:text-brand-orange transition-colors">Over Ons</a>
            <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
          </nav>
          <a href="#offerte" className="btn-primary py-2.5 px-6 rounded-xl hidden md:inline-flex">
            Snel Offerte
          </a>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="h-full w-full"
            >
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="absolute inset-0 bg-brand-dark/60 z-10" />
                  <img src={src} alt={`Spuitisolatie project ${i + 1} - Duurzaam isoleren met Blink`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          <div className="container relative z-20 mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg"
            >
              Duurzaam Isoleren, <br/> 
              <span className="text-brand-orange">Direct Besparen</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto drop-shadow"
            >
              Hoogwaardige spuitisolatie voor een energiezuinig en comfortabel huis. Bereken binnen 1 minuut je voordeel.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#offerte" className="btn-primary text-lg inline-flex items-center gap-3">
                Bereken Mijn Besparing <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Bento Grid Layout Section */}
        <section id="diensten" className="py-24 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-brand-blue mb-4">Onze Expertise in Isolatie</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Wij leveren maatwerk voor elk type woning. Ontdek onze diensten.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bento-card col-span-1 md:col-span-2 bg-brand-blue text-white"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <Home className="text-brand-orange w-12 h-12 mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Vloerisolatie</h3>
                  <p className="text-slate-300 text-lg mb-6">Tot 15% besparing op uw energierekening met naadloze PUR-isolatie. Voorkom optrekkend vocht en koude voeten.</p>
                </div>
                <div className="flex items-center gap-4 text-brand-orange font-bold">
                  <span>Lees meer</span>
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bento-card bg-gradient-to-br from-brand-orange to-orange-600 text-white"
            >
               <Zap className="w-12 h-12 mb-6" />
               <h3 className="text-2xl font-bold mb-4">Dakisolatie</h3>
               <p className="text-orange-100 mb-6">De meeste warmte verdwijnt via het dak. Pak dit direct aan en profiteer van subsidies.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bento-card bg-white"
            >
               <Shield className="text-brand-green w-12 h-12 mb-6" />
               <h3 className="text-2xl font-bold mb-4 text-brand-blue">Kwaliteit & Garantie</h3>
               <ul className="space-y-3">
                 {['10 Jaar Garantie', 'Gecertificeerd Personeel', 'Beste Materialen', 'Snelle Uitvoering'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-600">
                     <CheckCircle className="text-brand-green" size={20} />
                     <span className="font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bento-card col-span-1 md:col-span-2 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="relative z-20 flex flex-col md:flex-row gap-8 items-center h-full">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-brand-blue mb-4">Direct Weten Wat Het Kost?</h3>
                  <p className="text-slate-600 mb-6 text-lg">Probeer onze slimme AI Calculator en ontvang binnen 1 minuut een schatting van de kosten en besparingen.</p>
                  <a href="#offerte" className="btn-secondary inline-block">Start AI Calculator</a>
                </div>
                <div className="w-48 h-48 bg-brand-light rounded-full flex items-center justify-center shrink-0">
                  <Bot className="w-24 h-24 text-brand-blue" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Form Section */}
        <section id="offerte" className="py-24 bg-white relative">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-brand-blue mb-4">AI Offerte Generator</h2>
              <p className="text-lg text-slate-600">Beantwoord een paar simpele vragen en onze AI berekent de perfecte isolatie voor jouw woning.</p>
            </div>

            <motion.div 
              className="bg-brand-light rounded-3xl p-8 md:p-12 shadow-bento border border-slate-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="mb-8 flex items-center justify-between relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 -translate-y-1/2 rounded-full"></div>
                <div className={`absolute top-1/2 left-0 h-1 bg-brand-orange -z-10 -translate-y-1/2 rounded-full transition-all duration-500`} style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-colors duration-300 ${step >= s ? 'bg-brand-orange' : 'bg-slate-300'}`}>
                    {s}
                  </div>
                ))}
              </div>

              <div className="min-h-[250px]">
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 className="text-2xl font-bold mb-6 text-brand-blue">Wat wil je isoleren?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Vloer (Kruipruimte)', 'Dak (Binnenzijde)', 'Spouwmuur', 'Anders'].map((opt) => (
                        <button key={opt} onClick={() => setStep(2)} className="p-4 border-2 border-slate-200 rounded-xl text-left hover:border-brand-orange hover:bg-orange-50 font-semibold text-slate-700 transition-all text-lg">
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="text-2xl font-bold mb-6 text-brand-blue">Wat is het geschatte oppervlakte?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {['< 50 m2', '50 - 100 m2', '> 100 m2'].map((opt) => (
                        <button key={opt} onClick={() => setStep(3)} className="p-4 border-2 border-slate-200 rounded-xl text-center hover:border-brand-orange hover:bg-orange-50 font-semibold text-slate-700 transition-all text-lg">
                          {opt}
                        </button>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-start">
                       <button onClick={() => setStep(1)} className="text-slate-500 font-semibold hover:text-brand-blue">Terug</button>
                    </div>
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="text-2xl font-bold mb-6 text-brand-blue">Waar mogen we de schatting naartoe sturen?</h3>
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Verzonden naar AI!'); }}>
                      <input type="text" placeholder="Jouw Naam" className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-brand-orange outline-none font-medium text-lg" required />
                      <input type="email" placeholder="E-mailadres" className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-brand-orange outline-none font-medium text-lg" required />
                      <button type="submit" className="w-full btn-primary mt-4">Bereken Nu</button>
                    </form>
                    <div className="mt-6 flex justify-start">
                       <button onClick={() => setStep(2)} className="text-slate-500 font-semibold hover:text-brand-blue">Terug</button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Bento */}
        <section id="contact" className="py-24 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bento-card flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center shrink-0">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Bel Ons</p>
                  <p className="text-xl font-bold text-brand-dark">085 - 123 45 67</p>
                </div>
             </div>
             <div className="bento-card flex items-center gap-6">
                <div className="w-16 h-16 bg-orange-50 text-brand-orange rounded-2xl flex items-center justify-center shrink-0">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">E-mail</p>
                  <p className="text-xl font-bold text-brand-dark">info@blink.nl</p>
                </div>
             </div>
             <div className="bento-card flex items-center gap-6">
                <div className="w-16 h-16 bg-green-50 text-brand-green rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Locatie</p>
                  <p className="text-xl font-bold text-brand-dark">Isolatieweg 1, Amsterdam</p>
                </div>
             </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-dark text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap className="text-brand-orange" size={24} />
            <span className="text-2xl font-black tracking-tight text-white">
              Blink <span className="text-brand-orange">Spuitisolatie</span>
            </span>
          </div>
          <p>KVK: 12345678 | © 2026 Blink Spuitisolatie. Alle rechten voorbehouden.</p>
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
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-sm text-slate-700 max-w-[85%] mb-4">
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

        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 group"
        >
          <Bot size={28} className="group-hover:animate-pulse" />
        </button>
      </div>

    </div>
  );
}

export default App;
