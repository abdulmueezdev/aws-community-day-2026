import { defaultSiteData } from '../data/siteData';
import { NeoBadge } from '../components/NeoBadge';
import { NeoButton } from '../components/NeoButton';
import { NeoCard } from '../components/NeoCard';
import { ScrollReveal } from '../components/ScrollReveal';

export function Venue() {
  const { event } = defaultSiteData;

  return (
    <section id="venue" className="py-24 px-6 bg-white border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Column: Details */}
        <ScrollReveal>
          <div className="w-full lg:w-1/3 flex flex-col items-start">
            <NeoBadge variant="primary" className="mb-6">
              VENUE LOCATION
            </NeoBadge>
            
            <h2 className="font-heading font-black text-5xl md:text-6xl uppercase leading-tight mb-2">
              {event.venueName}.
            </h2>
            <h3 className="font-heading font-bold text-3xl text-textSecondary uppercase mb-6">
              {event.venueCity}, {event.venueProvince}.
            </h3>
            
            <div className="font-body text-lg text-textPrimary mb-8">
              <p>{event.venueAddress}</p>
              <p>{event.venueCity}, {event.venueProvince} {event.venuePostalCode}</p>
              <p>{event.venueCountry}</p>
            </div>
  
            <NeoButton variant="teal" href={`https://maps.google.com/?q=${encodeURIComponent(event.venueName + ' ' + event.venueAddress)}`} target="_blank" rel="noopener noreferrer">
              NAVIGATE VENUE &rarr;
            </NeoButton>
          </div>
        </ScrollReveal>

        {/* Right Column: Map */}
        <ScrollReveal delay={0.2}>
          <div className="w-full lg:w-full">
            <NeoCard className="p-0 overflow-hidden w-full h-[400px]">
              <img 
                src={event.venueMapEmbedUrl} 
                alt="Map Location" 
                className="w-full h-full object-cover rounded-none"
              />
            </NeoCard>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
