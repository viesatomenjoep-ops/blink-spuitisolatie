import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EpsIsolatie() {
  return (
    <div className="py-24 container mx-auto px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-black text-brand-blue mb-8"
      >
        EPS Spouwmuur & Bodem
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-3xl shadow-bento text-slate-600 leading-relaxed text-lg">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2"><Zap className="text-brand-orange" /> Duurzame EPS Parels</h2>
          <p className="mb-6">
            EPS parels spouwmuur isolatie vormen een naadloze en continue isolatielaag die de warmte binnenhoudt en koude lucht buiten houdt. EPS (geëxpandeerd polystyreen) is het ultieme materiaal voor uw kruipruimte en spouw.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Hoge isolatiewaarde</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Waterafstotend (ideaal voor vochtige kruipruimtes)</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>100% recyclebaar en milieuvriendelijk</span></li>
          </ul>
          <Link to="/" className="btn-primary inline-block">Offerte Aanvragen</Link>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-bento">
          <img src="/banner1.png" alt="EPS Isolatie Parels" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
