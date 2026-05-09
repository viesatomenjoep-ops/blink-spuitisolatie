import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OnsWerk() {
  const [activeCategory, setActiveCategory] = useState('Alle');

  const portfolioItems = [
    { id: 1, category: 'Spouwmuur & Vloer', img: '/banner3.png', title: 'Villa Isolatie', desc: 'Complete spouwmuur- en vloerisolatie afgerond door onze specialisten.' },
    { id: 2, category: 'Dakisolatie', img: '/banner2.png', title: 'Nieuwbouw Dakisolatie', desc: 'Naadloos PUR-schuim toegepast in een moderne dakconstructie.' },
    { id: 3, category: 'Bodemisolatie', img: '/banner1.png', title: 'EPS Bodemisolatie', desc: 'Kruipruimte voorzien van EPS isolatieparels tegen optrekkend vocht.' },
    { id: 4, category: 'Industrie', img: '/tank_isolatie.png', title: 'Industriële Silo', desc: 'Grootschalig industrieel project: thermische isolatie van opslagtanks.' },
    { id: 5, category: 'Scheepvaart', img: '/scheeps_isolatie.png', title: 'Luxe Jacht Isolatie', desc: 'Hoogwaardige condens-isolatie aangebracht aan de binnenkant van een scheepsromp.' }
  ];

  const categories = ['Alle', ...new Set(portfolioItems.map(item => item.category))];
  const filteredItems = activeCategory === 'Alle' ? portfolioItems : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-24 container mx-auto px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-black text-brand-blue mb-8"
      >
        Ons Werk
      </motion.h1>
      <div className="flex md:flex-wrap gap-3 mb-12 sticky top-20 z-40 bg-brand-light/95 backdrop-blur-md py-4 -mx-6 px-6 md:mx-0 md:px-0 md:bg-transparent md:backdrop-blur-none overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 whitespace-nowrap px-6 py-2 rounded-full font-semibold transition-all relative ${activeCategory === category ? 'text-white' : 'bg-white text-slate-600 hover:bg-slate-50 shadow-sm border border-slate-100'}`}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-brand-orange rounded-full"
                transition={{ type: 'spring', duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id} 
              className="bento-card overflow-hidden p-0 group flex flex-col"
            >
              <div className="overflow-hidden relative">
                <div className="absolute top-4 right-4 bg-brand-blue/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10 backdrop-blur-sm">
                  {item.category}
                </div>
                <img src={item.img} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 bg-white">
                <h3 className="font-bold text-xl text-brand-blue mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
