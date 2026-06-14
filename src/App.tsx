import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import OrderView from './components/OrderView';
import ReviewsView from './components/ReviewsView';
import Footer from './components/Footer';
import { TabId } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabId>('home');

  const renderActiveView = () => {
    switch (currentTab) {
      case 'home':
        return <HomeView setCurrentTab={setCurrentTab} />;
      case 'order':
        return <OrderView />;
      case 'reviews':
        return <ReviewsView />;
      default:
        return <HomeView setCurrentTab={setCurrentTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#050707] text-gray-200 font-sans relative" id="app-viewport-wrapper">
      
      {/* Sticky Dynamic Header */}
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Main interactive stage containing viewports */}
      <main className="flex-grow w-full relative" id="app-main-viewport">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} // smooth apple-like ease-out curve
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Luxury Footer panel */}
      <Footer setCurrentTab={setCurrentTab} />
      
    </div>
  );
}

