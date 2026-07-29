import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { NeoCard } from './NeoCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Organizer } from '../data/siteData';

interface CardFanCarouselProps {
  organizers: Organizer[];
}

export function CardFanCarousel({ organizers }: CardFanCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % organizers.length);
  }, [organizers.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + organizers.length) % organizers.length);
  }, [organizers.length]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Touch swipe handling
  const [touchStart, setTouchStart] = useState(0);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto h-[500px] flex items-center justify-center"
      style={{ perspective: '1000px' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation Arrows */}
      <button 
        onClick={prev}
        className="absolute left-0 z-50 p-3 bg-secondary border-[3px] border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px]"
        aria-label="Previous organizer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={next}
        className="absolute right-0 z-50 p-3 bg-secondary border-[3px] border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px]"
        aria-label="Next organizer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Cards */}
      {organizers.map((organizer, index) => {
        const offset = index - currentIndex;
        const normalizedOffset = ((offset + organizers.length + Math.floor(organizers.length / 2)) % organizers.length) - Math.floor(organizers.length / 2);
        
        const isActive = index === currentIndex;
        
        const xOffset = normalizedOffset * 60;
        const rotateZ = shouldReduceMotion ? 0 : normalizedOffset * 12;
        const scale = isActive ? 1.1 : 0.9;
        const zIndex = isActive ? 30 : 20 - Math.abs(normalizedOffset);
        const opacity = Math.abs(normalizedOffset) > 2 ? 0 : 1;

        return (
          <motion.div
            key={organizer.id}
            className="absolute w-[280px]"
            initial={false}
            animate={{
              x: xOffset,
              rotateZ,
              scale,
              zIndex,
              opacity,
            }}
            transition={{ 
              duration: shouldReduceMotion ? 0 : 0.5, 
              ease: [0.25, 0.1, 0.25, 1] 
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <NeoCard className="flex flex-col items-center text-center p-6 bg-white">
              <div className="w-24 h-24 border-[3px] border-black rounded-none overflow-hidden mb-4 shadow-neo-sm">
                <img 
                  src={organizer.photoUrl} 
                  alt={organizer.name}
                  className="w-full h-full object-cover"
                  width={96}
                  height={96}
                />
              </div>
              <h3 className="font-heading font-bold text-lg uppercase">{organizer.name}</h3>
              <p className="font-body text-xs text-gray-500 uppercase mt-1">{organizer.role}</p>
              <p className="font-body text-xs font-bold text-primary uppercase mt-1">{organizer.organization}</p>
            </NeoCard>
          </motion.div>
        );
      })}
    </div>
  );
}
