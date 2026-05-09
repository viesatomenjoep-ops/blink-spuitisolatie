import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PurDakisolatie() {
  return (
    <div className="py-24 container mx-auto px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-black text-brand-blue mb-8"
      >
        PUR Dak Isolatie
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-3xl shadow-bento text-slate-600 leading-relaxed text-lg">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2"><Zap className="text-brand-orange" /> Stop Warmteverlies via het Dak</h2>
          <p className="mb-6">
            Warmte stijgt op. Een niet-geïsoleerd dak zorgt voor enorm warmteverlies (tot wel 30%). Door de binnenzijde van uw dak te voorzien van PUR-schuim, maakt u uw woning in één klap energiezuiniger.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Houdt warmte binnen in de winter</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Houdt hitte buiten in de zomer</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Perfect naadloos rondom balken</span></li>
          </ul>
          <Link to="/" className="btn-primary inline-block">Offerte Aanvragen</Link>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-bento">
          <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dakisolatie" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
