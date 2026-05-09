import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PurTankisolatie() {
  return (
    <div className="py-24 container mx-auto px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-black text-brand-blue mb-8"
      >
        PUR Tank Isolatie
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-3xl shadow-bento text-slate-600 leading-relaxed text-lg">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2"><Zap className="text-brand-orange" /> Industriële Tank Isolatie</h2>
          <p className="mb-6">
            Tank PUR isolatie wordt vaak gebruikt in de industrie en bouw om tanks te isoleren en de inhoud te beschermen tegen warmteverlies of temperatuurschommelingen. Wij bieden op maat gemaakte, naadloze oplossingen voor opslagtanks van elk formaat.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Voorkomt temperatuurschommelingen</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Hoge chemische en thermische resistentie</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Naadloos, ook bij complexe vormen</span></li>
          </ul>
          <Link to="/contact" className="btn-primary inline-block">Direct Contact Opnemen</Link>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-bento">
          <img src="/tank_isolatie.png" alt="Tank Isolatie PUR" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
