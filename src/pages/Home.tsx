import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Bot, ArrowRight, Zap, Shield, Home as HomeIcon } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const images = [
  "/banner1.png",
  "/banner2.png",
  "/banner3.png"
];

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <>
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
            className="bento-card col-span-1 md:col-span-2 bg-brand-blue text-white group cursor-pointer relative overflow-hidden"
          >
            <Link to="/diensten/pur-vloerisolatie" className="absolute inset-0 z-20"></Link>
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <HomeIcon className="text-brand-orange w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold mb-4">PUR Vloerisolatie</h3>
                <p className="text-slate-300 text-lg mb-6">Tot 15% besparing op uw energierekening met naadloze PUR-isolatie. Voorkom optrekkend vocht en koude voeten.</p>
              </div>
              <div className="flex items-center gap-4 text-brand-orange font-bold">
                <span>Lees meer over Vloerisolatie</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bento-card bg-gradient-to-br from-brand-orange to-orange-600 text-white group cursor-pointer relative overflow-hidden"
          >
            <Link to="/diensten/pur-dakisolatie" className="absolute inset-0 z-20"></Link>
            <div className="relative z-10">
              <Zap className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">PUR Dakisolatie</h3>
              <p className="text-orange-100 mb-6">De meeste warmte verdwijnt via het dak. Pak dit direct aan en profiteer van subsidies.</p>
              <div className="flex items-center gap-2 font-bold text-white mt-auto">
                <span>Lees meer</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card bg-white group cursor-pointer relative overflow-hidden"
          >
            <Link to="/diensten/eps-spouwmuur-bodemisolatie" className="absolute inset-0 z-20"></Link>
            <Shield className="text-brand-green w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 text-brand-blue">EPS Spouwmuur & Bodem</h3>
            <p className="text-slate-600 mb-6">Ontdek de kracht van EPS parels voor naadloze spouwmuur- en bodemisolatie.</p>
            <div className="flex items-center gap-2 font-bold text-brand-blue">
               <span>Lees meer</span>
               <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bento-card col-span-1 md:col-span-2 relative overflow-hidden group cursor-pointer"
          >
            <Link to="/diensten/polyurethaan-pur" className="absolute inset-0 z-20"></Link>
            <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-brand-blue mb-4">Waarom Polyurethaan (PUR)?</h3>
                <p className="text-slate-600 mb-6 text-lg">Lees alles over de voordelen, duurzaamheid en isolatiewaarde van PUR-schuim voor uw woning of bedrijfspand.</p>
                <span className="font-bold text-brand-orange flex items-center gap-2">Ontdek PUR <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" /></span>
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
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bento-card flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center shrink-0">
                <Phone size={32} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Bel of App Ons</p>
                <a href="https://wa.me/31643741530?text=Hallo%20Blink%20Spuitisolatie,%20ik%20heb%20een%20vraag." target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-[#25D366] hover:underline flex items-center gap-2">
                  +31 6 43 74 15 30
                </a>
              </div>
           </div>
           <div className="bento-card flex items-center gap-6">
              <div className="w-16 h-16 bg-orange-50 text-brand-orange rounded-2xl flex items-center justify-center shrink-0">
                <Mail size={32} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">E-mail</p>
                <p className="text-lg font-bold text-brand-dark break-all">info@blinkspuitisolatie.nl</p>
              </div>
           </div>
           <div className="bento-card flex items-center gap-6">
              <div className="w-16 h-16 bg-green-50 text-brand-green rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={32} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Locatie</p>
                <p className="text-xl font-bold text-brand-dark">Havenweg 108, Oosterhout</p>
              </div>
           </div>
        </div>
      </section>
    </>
  );
}
