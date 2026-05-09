import { motion } from 'framer-motion';

export default function OverOns() {
  return (
    <div className="py-24 container mx-auto px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-black text-brand-blue mb-8"
      >
        Over Ons
      </motion.h1>
      <div className="bg-white p-8 rounded-3xl shadow-bento text-slate-600 leading-relaxed max-w-4xl text-lg">
        <p className="mb-6">
          Welkom bij Blink Spuitisolatie. Wij zijn dé specialist op het gebied van naadloze isolatie voor uw woning of bedrijfspand. Met jarenlange ervaring zorgen wij voor een comfortabeler binnenklimaat en een lagere energierekening.
        </p>
        <p>
          Ons gecertificeerde team werkt uitsluitend met hoogwaardige materialen zoals PUR en EPS. Kwaliteit, duurzaamheid en klanttevredenheid staan bij ons voorop.
        </p>
      </div>
    </div>
  );
}
