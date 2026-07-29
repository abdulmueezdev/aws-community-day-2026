import { defaultSiteData } from '../data/siteData';
import { NeoBadge } from '../components/NeoBadge';
import { NeoCard } from '../components/NeoCard';
import { StaggerContainer } from '../components/StaggerContainer';
import { StaggerItem } from '../components/StaggerItem';

export function Organizers() {
  const { organizers } = defaultSiteData;

  const visibleOrganizers = organizers.filter(o => o.isVisible).sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section id="team" className="py-24 px-6 bg-background border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
        
        <NeoBadge variant="primary" className="mb-6">
          ORGANIZERS
        </NeoBadge>
        
        <h2 className="font-heading font-black text-5xl md:text-6xl uppercase leading-tight mb-4">
          Meet The Team
        </h2>
        <p className="font-body text-lg text-textSecondary mb-16 max-w-2xl mx-auto">
          The passionate individuals working behind the scenes to make AWS Student Community Day Lahore a reality.
        </p>

        {/* Horizontal scroll container for mobile, flex wrap for desktop */}
        <div className="w-full overflow-x-auto pb-8 -mb-8">
          <StaggerContainer className="flex flex-row md:flex-wrap justify-start md:justify-center gap-6 min-w-max md:min-w-0 px-2">
            {visibleOrganizers.map((org) => (
              <StaggerItem key={org.id}>
                <NeoCard className="flex flex-col items-center text-center min-w-[250px] max-w-[280px]">
                  <div className="w-32 h-32 rounded-full border-[3px] border-black shadow-neo-sm overflow-hidden mb-6 bg-gray-200">
                    <img 
                      src={org.photoUrl} 
                      alt={org.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl uppercase leading-tight mb-1">{org.name}</h3>
                  <p className="font-body text-sm text-textSecondary uppercase font-semibold">{org.role}</p>
                  <p className="font-body text-xs text-textSecondary mt-1">{org.organization}</p>
                </NeoCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
}
