import { defaultSiteData } from '../data/siteData';
import { NeoBadge } from '../components/NeoBadge';
import { ScrollReveal } from '../components/ScrollReveal';
import { StaggerContainer } from '../components/StaggerContainer';
import { StaggerItem } from '../components/StaggerItem';

export function Speakers() {
  const { speakers } = defaultSiteData;

  const panelSpeaker = speakers.find(s => s.sessionType === 'panel' && s.isVisible);
  const workshopSpeakers = speakers.filter(s => s.sessionType === 'workshop' && s.isVisible).sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section id="speakers" className="pb-24 px-6 bg-tertiary border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 pt-20">
        
        {/* Left Column: Panel Discussion */}
        <ScrollReveal delay={0}>
          <div className="w-full lg:w-2/5 flex flex-col">
            <NeoBadge variant="primary" className="mb-6 self-start">
              PANEL DISCUSSION
            </NeoBadge>
            
            <h2 className="font-heading font-black text-4xl uppercase leading-tight mb-4">
              Intelligence Needs Infrastructure
            </h2>
            <p className="font-body text-lg text-black font-semibold mb-8">
              Who Owns AI Systems on Cloud?
            </p>
  
            {panelSpeaker && (
              <div className="flex-1">
                <SpeakerCard speaker={panelSpeaker} isLarge />
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Right Column: Workshops */}
        <div className="w-full lg:w-3/5 flex flex-col">
          <NeoBadge variant="secondary" className="mb-6 self-start bg-white">
            SPEAKERS & WORKSHOPS
          </NeoBadge>

          {/* Grid of 7 cards - 4 columns on large screens, or wrap */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {workshopSpeakers.map((speaker) => (
              <StaggerItem key={speaker.id}>
                <SpeakerCard speaker={speaker} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
}

function SpeakerCard({ speaker, isLarge = false }: { speaker: any, isLarge?: boolean }) {
  return (
    <div className={`bg-white border-[3px] border-black shadow-neo rounded-none overflow-hidden hover:-translate-y-1 hover:shadow-neo-hover transition-transform flex flex-col h-full`}>
      <div className={`relative ${isLarge ? 'flex-1 min-h-[280px] md:min-h-[320px]' : 'h-48'} w-full border-b-[3px] border-black bg-gray-200 overflow-hidden`}>
        <img 
          src={speaker.photoUrl} 
          alt={speaker.name} 
          width="400"
          height="400"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <div className={`bg-black ${isLarge ? 'p-6 md:p-8' : 'p-4'} text-white flex-grow flex flex-col justify-between rounded-none`}>
        <div>
          <h3 className="font-heading font-bold text-lg uppercase leading-tight mb-1 line-clamp-1" title={speaker.name}>{speaker.name}</h3>
          <p className="font-body text-xs text-gray-300 uppercase line-clamp-2" title={`${speaker.role} ${speaker.company !== 'TBD' ? `• ${speaker.company}` : ''}`}>
            {speaker.role} {speaker.company !== 'TBD' && `• ${speaker.company}`}
          </p>
        </div>
      </div>
    </div>
  );
}
