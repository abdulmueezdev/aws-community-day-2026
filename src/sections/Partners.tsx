import { defaultSiteData } from '../data/siteData';

import { NeoBadge } from '../components/NeoBadge';
import { ScrollReveal } from '../components/ScrollReveal';
import { PartnerMarquee } from '../components/PartnerMarquee';

export function Partners() {
  const { partners } = defaultSiteData;

  const visiblePartners = partners.filter(p => p.isVisible).sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section id="partners" className="pb-24 px-6 bg-background border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <NeoBadge variant="primary" className="mb-6">
          COLLABORATION
        </NeoBadge>
        
        <ScrollReveal>
          <h2 className="font-heading font-black text-5xl md:text-6xl uppercase leading-tight mb-16">
            Community & Partners
          </h2>
        </ScrollReveal>

        <PartnerMarquee partners={visiblePartners} />

      </div>
    </section>
  );
}
