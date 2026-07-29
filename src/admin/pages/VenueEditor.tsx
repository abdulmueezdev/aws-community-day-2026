import { useState } from 'react';
import { NeoCard } from '../../components/NeoCard';
import { NeoInput } from '../../components/NeoInput';
import { defaultSiteData } from '../../data/siteData';
import { Venue } from '../../sections/Venue';

export function VenueEditor() {
  const [venueData, setVenueData] = useState(defaultSiteData.event);
  
  const handleUpdate = (field: keyof typeof venueData, value: string) => {
    setVenueData(prev => ({ ...prev, [field]: value }));
  };



  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <NeoCard className="bg-white p-6">
            <h3 className="font-heading text-2xl font-black mb-6 uppercase">Schedule</h3>
            <div className="flex flex-col gap-4">
              <NeoInput 
                label="Date" 
                value={venueData.date} 
                onChange={(e) => handleUpdate('date', e.target.value)} 
              />
              <NeoInput 
                label="Time" 
                value={venueData.time} 
                onChange={(e) => handleUpdate('time', e.target.value)} 
              />
            </div>
          </NeoCard>

          <NeoCard className="bg-white p-6">
            <h3 className="font-heading text-2xl font-black mb-6 uppercase">Location</h3>
            <div className="flex flex-col gap-4">
              <NeoInput 
                label="Venue Name" 
                value={venueData.venueName} 
                onChange={(e) => handleUpdate('venueName', e.target.value)} 
              />
              <NeoInput 
                label="Address" 
                value={venueData.venueAddress} 
                onChange={(e) => handleUpdate('venueAddress', e.target.value)} 
              />
              <div className="grid grid-cols-2 gap-4">
                <NeoInput 
                  label="City" 
                  value={venueData.venueCity} 
                  onChange={(e) => handleUpdate('venueCity', e.target.value)} 
                />
                <NeoInput 
                  label="Province" 
                  value={venueData.venueProvince} 
                  onChange={(e) => handleUpdate('venueProvince', e.target.value)} 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <NeoInput 
                  label="Postal Code" 
                  value={venueData.venuePostalCode} 
                  onChange={(e) => handleUpdate('venuePostalCode', e.target.value)} 
                />
                <NeoInput 
                  label="Country" 
                  value={venueData.venueCountry} 
                  onChange={(e) => handleUpdate('venueCountry', e.target.value)} 
                />
              </div>
              <NeoInput 
                label="Google Maps URL" 
                value={venueData.venueMapEmbedUrl} 
                onChange={(e) => handleUpdate('venueMapEmbedUrl', e.target.value)} 
              />
            </div>
          </NeoCard>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-2xl font-black uppercase">Live Preview</h3>
          <div className="border-[3px] border-black bg-background relative overflow-hidden h-full min-h-[600px] lg:min-h-0">
             {/* Note: In a real app we'd pass venueData as props to Venue to preview real-time changes.
                 Since this is purely static client side, we render the Venue section to demonstrate layout */}
             <div className="absolute inset-0 origin-top" style={{ zoom: 0.65 }}>
                <Venue />
             </div>
          </div>
        </div>
      </div>

    </div>
  );
}
