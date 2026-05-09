import { motion } from 'framer-motion';

export default function OnsWerk() {
  return (
    <div className="py-24 container mx-auto px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-black text-brand-blue mb-8"
      >
        Ons Werk
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bento-card overflow-hidden p-0 group">
            <img src={`https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} alt="Project" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="p-6">
              <h3 className="font-bold text-xl text-brand-blue mb-2">Project {item}</h3>
              <p className="text-slate-600">Vloer- en dakisolatie succesvol afgerond met PUR schuim.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
