import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Camera, FileText, Settings, Bot, Zap } from 'lucide-react';

export default function AITools() {
  const [activeTool, setActiveTool] = useState(1);
  const [roiSqMeter, setRoiSqMeter] = useState(60);

  return (
    <div className="py-24 container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-black text-brand-blue mb-6">AI Isolatie Tools <span className="text-brand-orange text-2xl align-top bg-orange-100 px-3 py-1 rounded-full uppercase tracking-widest font-bold">Demo</span></h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Ontdek hoe kunstmatige intelligentie de isolatiebranche transformeert. Test onze 5 interactieve concepten hieronder.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Selection */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          <ToolCard active={activeTool === 1} onClick={() => setActiveTool(1)} icon={<Calculator />} title="1. AI Spouwmuur ROI Calculator" desc="Berekent exacte terugverdientijd op basis van actuele gasprijzen." />
          <ToolCard active={activeTool === 2} onClick={() => setActiveTool(2)} icon={<Camera />} title="2. AI Warmteverlies Scanner" desc="Scan een foto van je huis en AI voorspelt warmtelekken." />
          <ToolCard active={activeTool === 3} onClick={() => setActiveTool(3)} icon={<FileText />} title="3. AI Subsidie Assistent" desc="Automatisch ISDE-formulieren invullen via gesprek." />
          <ToolCard active={activeTool === 4} onClick={() => setActiveTool(4)} icon={<Settings />} title="4. AI Materiaal Matcher" desc="EPS of PUR? De AI kiest o.b.v. vocht- & klimaatdata." />
          <ToolCard active={activeTool === 5} onClick={() => setActiveTool(5)} icon={<Bot />} title="5. Slimme Offerte Engine" desc="Dynamische prijsberekening o.b.v. realtime inkoopprijzen." />
        </div>

        {/* Demo Display Area */}
        <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-bento border border-slate-100 min-h-[600px] flex flex-col">
          
          {activeTool === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col">
               <h2 className="text-3xl font-bold text-brand-blue mb-2">AI Spouwmuur ROI Calculator</h2>
               <p className="text-slate-500 mb-8">AI haalt de actuele kubieke meter gasprijs op en combineert dit met historische weerdata om een exacte berekening te maken.</p>
               
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
                 <label className="block text-sm font-bold text-slate-700 mb-4">Oppervlakte spouwmuur: <span className="text-brand-orange text-lg">{roiSqMeter} m²</span></label>
                 <input 
                   type="range" min="20" max="250" value={roiSqMeter} onChange={(e) => setRoiSqMeter(parseInt(e.target.value))}
                   className="w-full accent-brand-orange"
                 />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm">
                    <p className="text-sm font-semibold text-slate-500 mb-2">Investering (Schatting)</p>
                    <p className="text-3xl font-black text-brand-dark">€ {(roiSqMeter * 18).toLocaleString('nl-NL')}</p>
                  </div>
                  <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm">
                    <p className="text-sm font-semibold text-slate-500 mb-2">Besparing per Jaar</p>
                    <p className="text-3xl font-black text-brand-green">€ {Math.round(roiSqMeter * 7.5).toLocaleString('nl-NL')}</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl text-center shadow-sm">
                    <p className="text-sm font-semibold text-orange-700 mb-2">Terugverdientijd</p>
                    <p className="text-3xl font-black text-brand-orange">2.4 Jaar</p>
                  </div>
               </div>

               <div className="mt-auto bg-brand-dark text-white p-4 rounded-xl flex items-center gap-4 text-sm">
                 <Zap className="text-brand-orange shrink-0" />
                 <p>Deze AI-module kan via een API direct worden gekoppeld aan de actuele gasprijzen van Vattenfall of Eneco SQL-databases voor realtime calculaties.</p>
               </div>
            </motion.div>
          )}

          {activeTool === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col items-center justify-center text-center">
               <Camera className="w-20 h-20 text-brand-blue mb-6" />
               <h2 className="text-3xl font-bold text-brand-blue mb-4">AI Warmteverlies Scanner</h2>
               <p className="text-slate-600 mb-8 max-w-lg">In plaats van dure thermische camera's, upload de klant een foto van hun gevel. Ons getrainde Computer Vision model (vergelijkbaar met OpenAI Vision) herkent direct de zwakke plekken (daken, oude kozijnen).</p>
               <div className="w-full h-64 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
                 <span className="font-bold text-slate-400">Sleep hier een foto van je huis (Mockup)</span>
               </div>
            </motion.div>
          )}

          {activeTool === 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col">
               <h2 className="text-3xl font-bold text-brand-blue mb-2">AI Subsidie Assistent</h2>
               <p className="text-slate-500 mb-8">Het ISDE formulier is complex. Deze AI chat vraagt de benodigde info op en vult automatisch via een webhook de SQL database voor de aanvraag.</p>
               <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col">
                  <div className="flex gap-4 mb-4">
                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center shrink-0"><Bot className="text-white" size={20} /></div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
                      Hoi! Ik ga het ISDE subsidieformulier voor je invullen. Wat is de meldcode van het gebruikte isolatiemateriaal?
                    </div>
                  </div>
                  <div className="flex gap-4 mb-4 flex-row-reverse">
                    <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center shrink-0 text-white font-bold">J</div>
                    <div className="bg-brand-orange text-white p-4 rounded-2xl rounded-tr-none shadow-sm">
                      Ik weet dat niet precies, jullie hebben gisteren PUR gespoten.
                    </div>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center shrink-0"><Bot className="text-white" size={20} /></div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
                      Geen probleem. Ik heb in ons SQL CRM gezocht: voor jouw adres (Havenweg 108) hebben wij <b>Pluimers PUR HD</b> gebruikt (Meldcode: KA01234). Ik voeg dit toe aan de aanvraag!
                    </div>
                  </div>
               </div>
            </motion.div>
          )}

          {activeTool === 4 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col items-center justify-center text-center">
               <Settings className="w-20 h-20 text-brand-orange mb-6" />
               <h2 className="text-3xl font-bold text-brand-blue mb-4">AI Materiaal Matcher</h2>
               <p className="text-slate-600 mb-8 max-w-lg">De klant beantwoordt 3 vragen over vocht en vloertype. Een neuraal netwerk (gekoppeld aan een database met 10.000+ isolatie-projecten) voorspelt met 99% zekerheid of EPS parels of PUR hardschuim het beste rendement levert.</p>
               <button className="btn-secondary">Start Test (Demo)</button>
            </motion.div>
          )}

          {activeTool === 5 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col items-center justify-center text-center">
               <FileText className="w-20 h-20 text-brand-green mb-6" />
               <h2 className="text-3xl font-bold text-brand-blue mb-4">Slimme Offerte Engine</h2>
               <p className="text-slate-600 mb-8 max-w-lg">Traditionele offertes zijn statisch. Onze AI-offerte past zich live aan op basis van materiaalprijzen in een SQL-database. Is PUR vandaag goedkoper ingekocht? Dan ziet de klant direct een lagere prijs op zijn interactieve offerte-link.</p>
               <div className="bg-green-50 text-brand-green font-bold px-6 py-3 rounded-xl">
                 Live Prijs PUR: € 14,50 / m² (Update: 1 sec geleden)
               </div>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}

function ToolCard({ active, onClick, icon, title, desc }: any) {
  return (
    <div 
      onClick={onClick}
      className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 flex items-start gap-4 ${
        active ? 'bg-white border-brand-orange shadow-lg scale-105' : 'bg-slate-50 border-transparent hover:bg-slate-100 hover:border-slate-200'
      }`}
    >
      <div className={`mt-1 p-2 rounded-xl shrink-0 ${active ? 'bg-orange-100 text-brand-orange' : 'bg-white text-slate-400'}`}>
        {icon}
      </div>
      <div>
        <h3 className={`font-bold text-lg mb-1 ${active ? 'text-brand-blue' : 'text-slate-700'}`}>{title}</h3>
        <p className={`text-sm ${active ? 'text-slate-600' : 'text-slate-500'}`}>{desc}</p>
      </div>
    </div>
  );
}
