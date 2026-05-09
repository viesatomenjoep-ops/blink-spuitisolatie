import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PurVloerisolatie() {
  return (
    <div className="py-24 container mx-auto px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-black text-brand-blue mb-8"
      >
        PUR Vloer Isolatie
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-3xl shadow-bento text-slate-600 leading-relaxed text-lg">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2"><Zap className="text-brand-orange" /> Warme Voeten, Lage Rekening</h2>
          <p className="mb-6">
            Koude vloeren en optrekkend vocht uit de kruipruimte zijn verleden tijd met PUR vloerisolatie. Wij spuiten een naadloze laag isolatie tegen de onderkant van uw vloer.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Tot 15% besparing op stookkosten</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Direct meer wooncomfort</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>In 1 dag geplaatst zonder overlast</span></li>
          </ul>
          <Link to="/" className="btn-primary inline-block">Offerte Aanvragen</Link>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-bento">
          <img src="https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Vloerisolatie" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
