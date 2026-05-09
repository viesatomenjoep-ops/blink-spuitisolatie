import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24 container mx-auto px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-black text-brand-blue mb-8 text-center"
      >
        Neem Contact Op
      </motion.h1>
      <p className="text-center text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
        Heeft u vragen of wilt u een vrijblijvende offerte aanvragen? Wij staan voor u klaar!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-3xl shadow-bento">
          <h3 className="text-2xl font-bold mb-6 text-brand-blue">Contactgegevens</h3>
          <ul className="space-y-6">
             <li className="flex items-start gap-4">
               <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-xl flex items-center justify-center shrink-0">
                 <MapPin />
               </div>
               <div>
                 <p className="font-semibold text-brand-dark text-lg">Adres</p>
                 <p className="text-slate-600">Havenweg 108<br/>Oosterhout 4905AB<br/>Noord-brabant, Nederland</p>
               </div>
             </li>
             <li className="flex items-start gap-4">
               <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center shrink-0">
                 <Phone />
               </div>
               <div>
                 <p className="font-semibold text-brand-dark text-lg">Telefoon</p>
                 <p className="text-slate-600 mb-2">+31 6 43 74 15 30</p>
                 <a href="https://wa.me/31643741530?text=Hallo%20Blink%20Spuitisolatie,%20ik%20heb%20een%20vraag." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#128C7E] transition-colors shadow-lg">
                   <MessageCircle size={18} /> WhatsApp Ons
                 </a>
               </div>
             </li>
             <li className="flex items-start gap-4">
               <div className="w-12 h-12 bg-green-50 text-brand-green rounded-xl flex items-center justify-center shrink-0">
                 <Mail />
               </div>
               <div>
                 <p className="font-semibold text-brand-dark text-lg">E-mail</p>
                 <p className="text-slate-600 break-all">info@blinkspuitisolatie.nl</p>
               </div>
             </li>
          </ul>
          
          <div className="mt-8 rounded-2xl overflow-hidden shadow-sm h-64">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.568165502213!2d4.851087076865203!3d51.65028049629168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6a213ce624f15%3A0xe67db5001ff2a096!2sHavenweg%20108%2C%204905%20AB%20Oosterhout!5e0!3m2!1sen!2snl!4v1715200000000!5m2!1sen!2snl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-bento">
          <h3 className="text-2xl font-bold mb-6 text-brand-blue">Stuur een Bericht</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Naam</label>
              <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:border-brand-orange outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">E-mailadres</label>
              <input type="email" className="w-full p-3 rounded-xl border border-slate-200 focus:border-brand-orange outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Bericht</label>
              <textarea rows={4} className="w-full p-3 rounded-xl border border-slate-200 focus:border-brand-orange outline-none"></textarea>
            </div>
            <button className="btn-primary w-full mt-4">Versturen</button>
          </form>
        </div>
      </div>
    </div>
  );
}
