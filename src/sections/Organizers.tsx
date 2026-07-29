import { defaultSiteData } from '../data/siteData';
import { NeoBadge } from '../components/NeoBadge';
import { CardFanCarousel } from '../components/CardFanCarousel';

export function Organizers() {
  const { organizers } = defaultSiteData;

  const visibleOrganizers = organizers.filter(o => o.isVisible).sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section id="team" className="pb-24 px-6 bg-background border-b-[3px] border-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center pt-10">
        
        <NeoBadge variant="primary" className="mb-6">
          ORGANIZERS
        </NeoBadge>
        
        <h2 className="font-heading font-black text-5xl md:text-6xl uppercase leading-tight mb-4">
          Meet The Team
        </h2>
        <p className="font-body text-lg text-textSecondary mb-16 max-w-2xl mx-auto">
          The passionate individuals working behind the scenes to make AWS Student Community Day Lahore a reality.
        </p>

        <CardFanCarousel organizers={visibleOrganizers} />

      </div>
    </section>
  );
}
