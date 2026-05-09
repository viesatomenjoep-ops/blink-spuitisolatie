import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PolyurethaanPur() {
  return (
    <div className="py-24 container mx-auto px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-black text-brand-blue mb-8"
      >
        Polyurethaan (PUR)
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-3xl shadow-bento text-slate-600 leading-relaxed text-lg">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2"><Zap className="text-brand-orange" /> Wat is PUR Isolatie?</h2>
          <p className="mb-6">
            Polyurethaan (PUR) is een hoogwaardig isolatiemateriaal dat vloeibaar wordt aangebracht en vervolgens uitzet tot een hardschuim. Hierdoor dicht het alle naden en kieren naadloos af.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Hoogste isolatiewaarde (HR++)</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Naadloze afdichting, geen tocht</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="text-brand-green shrink-0 mt-1" /> <span>Waterafstotend en schimmelwerend</span></li>
          </ul>
          <Link to="/" className="btn-primary inline-block">Offerte Aanvragen</Link>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-bento">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="PUR Isolatie" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
