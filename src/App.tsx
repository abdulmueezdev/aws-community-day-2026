import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { WhereBuildersUnite } from './sections/WhereBuildersUnite';
import { Partners } from './sections/Partners';
import { Speakers } from './sections/Speakers';
import { Organizers } from './sections/Organizers';
import { Venue } from './sections/Venue';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';
import { AdminLayout } from './admin/components/AdminLayout';
import { ProtectedRoute } from './admin/components/ProtectedRoute';
import { Login } from './admin/pages/Login';
import { Dashboard } from './admin/pages/Dashboard';
import { HeroEditor } from './admin/pages/HeroEditor';
import { SpeakersManager } from './admin/pages/SpeakersManager';
import { PartnersManager } from './admin/pages/PartnersManager';
import { FAQManager } from './admin/pages/FAQManager';
import { OrganizersManager } from './admin/pages/OrganizersManager';
import { VenueEditor } from './admin/pages/VenueEditor';
import { Settings } from './admin/pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Site */}
        <Route path="/" element={
          <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
            <div className="min-h-screen bg-background font-body text-textPrimary">
              <Navbar />
              <main>
                <Hero />
                <WhereBuildersUnite />
                <Partners />
                <Speakers />
                <Organizers />
                <Venue />
                <FAQ />
              </main>
              <Footer />
            </div>
          </ReactLenis>
        } />
        
        {/* Admin */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="hero" element={<HeroEditor />} />
          <Route path="speakers" element={<SpeakersManager />} />
          <Route path="partners" element={<PartnersManager />} />
          <Route path="faq" element={<FAQManager />} />
          <Route path="organizers" element={<OrganizersManager />} />
          <Route path="venue" element={<VenueEditor />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
