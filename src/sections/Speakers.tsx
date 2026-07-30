import { useSiteData } from '../context/SiteDataContext';
import type { Speaker } from '../data/siteData';
import { ScrollReveal } from '../components/ScrollReveal';

export function Speakers() {
  const { siteData } = useSiteData();
  const speakers = siteData.speakers;

  const panelSpeakers = speakers.filter(s => s.sessionType === 'panel' && s.isVisible).sort((a, b) => a.displayOrder - b.displayOrder);
  const workshopSpeakers = speakers.filter(s => s.sessionType === 'workshop' && s.isVisible).sort((a, b) => a.displayOrder - b.displayOrder);
  const keynoteSpeakers = speakers.filter(s => s.sessionType === 'keynote' && s.isVisible).sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section id="speakers" className="pb-24 px-6 bg-tertiary border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto pt-20">
        
        <ScrollReveal delay={0}>
          {/* Keynote Speakers */}
          {keynoteSpeakers.length > 0 && (
            <div className="mb-12">
              <h3 className="font-heading font-black text-2xl uppercase mb-6 border-b-[3px] border-black pb-2">Keynote Speakers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {keynoteSpeakers.map(speaker => <SpeakerCard key={speaker.id} speaker={speaker} />)}
              </div>
            </div>
          )}

          {/* Panelists */}
          {panelSpeakers.length > 0 && (
            <div className="mb-12">
              <h3 className="font-heading font-black text-2xl uppercase mb-6 border-b-[3px] border-black pb-2">Panelists</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {panelSpeakers.map(speaker => <SpeakerCard key={speaker.id} speaker={speaker} />)}
              </div>
            </div>
          )}

          {/* Workshop Speakers */}
          {workshopSpeakers.length > 0 && (
            <div className="mb-12">
              <h3 className="font-heading font-black text-2xl uppercase mb-6 border-b-[3px] border-black pb-2">Workshop Speakers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {workshopSpeakers.map(speaker => <SpeakerCard key={speaker.id} speaker={speaker} />)}
              </div>
            </div>
          )}
        </ScrollReveal>

      </div>
    </section>
  );
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="w-full bg-white border-[3px] border-black shadow-neo rounded-none overflow-hidden hover:-translate-y-1 hover:shadow-neo-hover transition-transform flex flex-col h-full">
      <div className="relative w-full h-[280px] md:h-[320px] border-b-[3px] border-black bg-gray-100 overflow-hidden">
        <img 
          src={speaker.photoUrl} 
          alt={speaker.name} 
          width="400"
          height="400"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between rounded-none">
        <div>
          <h3 className="font-heading font-bold text-lg uppercase leading-tight mb-1 line-clamp-1" title={speaker.name}>{speaker.name}</h3>
          <p className="font-body text-sm uppercase line-clamp-2" title={`${speaker.role} ${speaker.company !== 'TBD' ? `• ${speaker.company}` : ''}`}>
            {speaker.role} {speaker.company !== 'TBD' && `• ${speaker.company}`}
          </p>
          <p className="font-body text-xs mt-1 line-clamp-2 text-gray-600">{speaker.sessionTitle}</p>
        </div>
      </div>
    </div>
  );
}
