import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import OverOns from './pages/OverOns';
import OnsWerk from './pages/OnsWerk';
import Contact from './pages/Contact';
import PolyurethaanPur from './pages/diensten/Polyurethaan';
import PurVloerisolatie from './pages/diensten/PurVloerisolatie';
import PurDakisolatie from './pages/diensten/PurDakisolatie';
import EpsIsolatie from './pages/diensten/EpsIsolatie';
import PurTankisolatie from './pages/diensten/PurTankisolatie';
import PurScheepsisolatie from './pages/diensten/PurScheepsisolatie';
import Regio from './pages/Regio';

import AITools from './pages/AITools';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="over-ons" element={<OverOns />} />
            <Route path="ons-werk" element={<OnsWerk />} />
            <Route path="contact" element={<Contact />} />
            <Route path="ai-tools" element={<AITools />} />
            <Route path="werkgebied/:regio" element={<Regio />} />
            
            <Route path="diensten">
              <Route path="polyurethaan-pur" element={<PolyurethaanPur />} />
              <Route path="pur-vloerisolatie" element={<PurVloerisolatie />} />
              <Route path="pur-dakisolatie" element={<PurDakisolatie />} />
              <Route path="eps-spouwmuur-bodemisolatie" element={<EpsIsolatie />} />
              <Route path="pur-tankisolatie" element={<PurTankisolatie />} />
              <Route path="pur-scheepsisolatie" element={<PurScheepsisolatie />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
