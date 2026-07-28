import { defaultSiteData } from '../data/siteData';
import { NeoCard } from '../components/NeoCard';
import { NeoBadge } from '../components/NeoBadge';

export function Partners() {
  const { partners } = defaultSiteData;

  const visiblePartners = partners.filter(p => p.isVisible).sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section id="partners" className="py-24 px-6 bg-background border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <NeoBadge variant="primary" className="mb-6">
          COLLABORATION
        </NeoBadge>
        
        <h2 className="font-heading font-black text-5xl md:text-6xl uppercase leading-tight mb-16">
          Community & Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {visiblePartners.map((partner) => (
            <NeoCard key={partner.id} className="flex flex-col items-center justify-center min-h-[120px] p-4">
              <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center">
                <img 
                  src={partner.logoUrl} 
                  alt={partner.name} 
                  className="w-full max-w-[150px] h-auto object-contain rounded-none grayscale hover:grayscale-0 transition-all"
                />
              </a>
              {partner.tagline && (
                <p className="font-mono text-xs mt-4 font-bold uppercase">{partner.tagline}</p>
              )}
            </NeoCard>
          ))}
        </div>

      </div>
    </section>
  );
}
