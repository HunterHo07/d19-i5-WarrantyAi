import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/common/LoadingScreen';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const DemoPage = lazy(() => import('./pages/DemoPage/DemoPage'));
const PitchDeckPage = lazy(() => import('./pages/PitchDeckPage/PitchDeckPage'));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage/WhyUsPage'));
const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const ShowcasePage = lazy(() => import('./pages/ShowcasePage/ShowcasePage'));
const RoadmapPage = lazy(() => import('./pages/RoadmapPage/RoadmapPage'));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/pitch" element={<PitchDeckPage />} />
              <Route path="/why-us" element={<WhyUsPage />} />
              <Route path="/landing" element={<LandingPage />} />
              <Route path="/showcase" element={<ShowcasePage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
