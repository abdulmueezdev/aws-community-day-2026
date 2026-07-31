import { useState } from 'react';
import { NeoCard } from '../../components/NeoCard';
import { NeoInput } from '../../components/NeoInput';
import { NeoButton } from '../../components/NeoButton';
import { defaultSiteData } from '../../data/siteData';
import { useSiteData } from '../../context/SiteDataContext';

export function VenueEditor() {
  const { siteData, updateSiteData, isOverride, resetToDefaults } = useSiteData();
  const [venueData, setVenueData] = useState(siteData.event);
  const [toast, setToast] = useState<{ type: string; message: string } | null>(null);

  const showToast = (type: string, message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  const handleUpdate = (field: string, value: string | number) => {
    setVenueData(prev => {
      const updated = { ...prev, [field]: value };
      updateSiteData({ event: updated } as any);
      return updated;
    });
  };

  const handleSave = () => {
    updateSiteData({ event: venueData } as any);
    showToast('success', 'Venue details saved!');
  };

  const handleReset = () => {
    resetToDefaults();
    setVenueData(defaultSiteData.event);
    showToast('info', 'Reset to defaults');
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Save / Reset Buttons */}
      <div className="flex justify-end gap-4">
        <NeoButton variant="primary" onClick={handleSave}>
          Save Changes
        </NeoButton>
        {isOverride && (
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-danger text-white border-[3px] border-black shadow-neo-sm font-heading text-xs uppercase rounded-none hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            Reset to Defaults
          </button>
        )}
      </div>

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
                label="Google Maps Embed URL"
                value={venueData.venueMapEmbedUrl}
                onChange={(e) => handleUpdate('venueMapEmbedUrl', e.target.value)}
                placeholder="https://www.google.com/maps/embed?..."
              />
            </div>
          </NeoCard>

          <NeoCard className="bg-white p-6">
            <h3 className="font-heading text-2xl font-black mb-6 uppercase">Map Coordinates</h3>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <NeoInput
                  label="Latitude"
                  value={String(venueData.venueLatitude || '')}
                  onChange={(e) => handleUpdate('venueLatitude', parseFloat(e.target.value) || 0)}
                  type="number"
                  step="0.0001"
                />
                <NeoInput
                  label="Longitude"
                  value={String(venueData.venueLongitude || '')}
                  onChange={(e) => handleUpdate('venueLongitude', parseFloat(e.target.value) || 0)}
                  type="number"
                  step="0.0001"
                />
              </div>
              <p className="text-xs text-textSecondary font-body">
                Use Google Maps to find coordinates. Current: Lahore Gulberg III (31.5204, 74.3587). Example: Karachi = 24.8607, 67.0011
              </p>
            </div>
          </NeoCard>
        </div>

        {/* Right side intentionally empty — removed broken live preview */}
        <div className="hidden lg:flex flex-col gap-4">
          <h3 className="font-heading text-2xl font-black uppercase">Preview</h3>
          <NeoCard className="bg-background p-6 flex-1 flex items-center justify-center min-h-[400px]">
            <p className="font-body text-textSecondary text-center">
              Save changes and visit the public site to see the updated venue section and map.
            </p>
          </NeoCard>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 px-6 py-3 border-[3px] border-black shadow-neo font-heading font-bold text-sm uppercase rounded-none ${
          toast.type === 'success' ? 'bg-success text-white' : 'bg-primary text-white'
        }`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}
