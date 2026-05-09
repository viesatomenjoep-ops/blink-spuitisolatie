import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PurScheepsisolatie() {
  return (
    <div className="py-24 container mx-auto px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-black text-brand-blue mb-8"
      >
        PUR Scheeps & Jacht Isolatie
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-3xl shadow-bento text-slate-600 leading-relaxed text-lg">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2"><Zap className="text-brand-orange" /> Condensatie- & Thermische Controle</h2>
          <p className="mb-6">
            PUR (polyurethaan) isolatie is vaak de beste optie voor isolatie op schepen en jachten omdat het een hoge isolatiewaarde heeft en een effectieve barrière biedt tegen warmteoverdracht. Daarnaast voorkomt het efficiënt condensvorming tegen de koude stalen of aluminium romp.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Perfecte barrière tegen condens en roest</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Extreem hoge isolatiewaarde bij minimale dikte</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Geschikt voor jachten, binnenvaart en offshore</span></li>
          </ul>
          <Link to="/contact" className="btn-primary inline-block">Offerte Aanvragen</Link>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-bento">
          <img src="/scheeps_isolatie.png" alt="Scheeps en Jacht Isolatie" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
