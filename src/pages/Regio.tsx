import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

export default function Regio() {
  const { regio } = useParams();
  
  // Maak de regionaam mooi (bijv. "noord-brabant" -> "Noord-Brabant")
  const regioName = regio 
    ? regio.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'uw regio';

  return (
    <>
      <Helmet>
        <title>Spuitisolatie in {regioName} | Blink Spuitisolatie</title>
        <meta name="description" content={`Op zoek naar hoogwaardige PUR spuitisolatie, vloerisolatie of dakisolatie in ${regioName}? Blink Spuitisolatie is uw lokale expert. Vraag direct een offerte aan!`} />
      </Helmet>
      
      <div className="py-24 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 text-brand-orange px-4 py-2 rounded-full font-bold mb-6">
            <MapPin size={18} /> Actief in {regioName}
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-brand-blue mb-6">
            Dé Isolatiespecialist voor <span className="text-brand-orange">{regioName}</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Woont u in {regioName} en wilt u flink besparen op uw energierekening? Wij komen direct naar u toe voor naadloze vloer-, dak- en spouwmuurisolatie. Lokaal, betrouwbaar en snel geregeld.
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3">
            <Phone size={20} /> Vraag Offerte Aan in {regioName}
          </a>
        </motion.div>
        
        {/* Placeholder voor meer regio-specifieke content */}
        <div className="bg-brand-light rounded-3xl p-12 text-center text-slate-500 border border-slate-200">
          Hier kan in de toekomst meer specifieke content komen voor projecten die we in {regioName} hebben uitgevoerd.
        </div>
      </div>
    </>
  );
}
