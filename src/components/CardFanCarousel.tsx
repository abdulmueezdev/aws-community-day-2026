import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { NeoCard } from './NeoCard';
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
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <div 
        className="relative w-full h-[500px] flex items-center justify-center"
        style={{ perspective: '1200px' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {organizers.map((organizer, index) => {
          const offset = index - currentIndex;
          const normalizedOffset = ((offset + organizers.length + Math.floor(organizers.length / 2)) % organizers.length) - Math.floor(organizers.length / 2);
          
          const isActive = index === currentIndex;
          
          // Fan logic using rotateY and rotateZ
          const xOffset = normalizedOffset * 60;
          const rotateZ = shouldReduceMotion ? 0 : normalizedOffset * 8;
          const rotateY = shouldReduceMotion ? 0 : normalizedOffset * -15; // 3D depth
          const scale = isActive ? 1.15 : 0.9;
          const zIndex = isActive ? 30 : 20 - Math.abs(normalizedOffset);
          const opacity = Math.abs(normalizedOffset) > 2 ? 0 : 1;

          return (
            <motion.div
              key={organizer.id}
              className="absolute w-[280px] cursor-pointer"
              initial={false}
              animate={{
                x: xOffset,
                rotateZ,
                rotateY,
                scale,
                zIndex,
                opacity,
              }}
              transition={{ 
                duration: shouldReduceMotion ? 0 : 0.6, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => setCurrentIndex(index)}
            >
              <NeoCard className="flex flex-col text-center p-0 overflow-hidden bg-white">
                <div className="w-full h-48 border-b-[3px] border-black bg-gray-100">
                  <img 
                    src={organizer.photoUrl} 
                    alt={organizer.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(organizer.name)}&background=random&size=200`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg uppercase">{organizer.name}</h3>
                  <p className="font-body text-xs text-gray-500 uppercase mt-1">{organizer.role}</p>
                  <p className="font-body text-xs font-bold text-primary uppercase mt-1">{organizer.organization}</p>
                </div>
              </NeoCard>
            </motion.div>
          );
        })}
      </div>
      
      {/* Dot Indicators */}
      <div className="flex gap-3 mt-8">
        {organizers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-none border-[2px] border-black transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
