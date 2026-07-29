import { useState } from 'react';
import { NeoCard } from '../../components/NeoCard';
import { NeoInput } from '../../components/NeoInput';
import { ExportConfig } from '../components/ExportConfig';
import { defaultSiteData } from '../../data/siteData';

export function HeroEditor() {
  const [heroData, setHeroData] = useState(defaultSiteData.event);
  
  const handleUpdate = (field: keyof typeof heroData, value: string | boolean) => {
    setHeroData(prev => ({ ...prev, [field]: value }));
  };

  const currentConfig = { ...defaultSiteData, event: heroData };

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <NeoCard className="bg-white p-6">
            <h3 className="font-heading text-2xl font-black mb-6 uppercase">Main Content</h3>
            <div className="flex flex-col gap-4">
              <NeoInput 
                label="Event Title" 
                value={heroData.title} 
                onChange={(e) => handleUpdate('title', e.target.value)} 
              />
              <NeoInput 
                label="Location (Header)" 
                value={heroData.location} 
                onChange={(e) => handleUpdate('location', e.target.value)} 
              />
              <div className="flex flex-col gap-2">
                <label className="font-heading font-black text-lg uppercase">Tagline</label>
                <textarea className="rounded-none w-full p-3 border-[3px] border-black shadow-neo-sm font-bold outline-none focus:shadow-neo-hover transition-all min-h-[100px]"
                  value={heroData.tagline}
                  onChange={(e) => handleUpdate('tagline', e.target.value)}
                />
              </div>
            </div>
          </NeoCard>

          <NeoCard className="bg-white p-6">
            <h3 className="font-heading text-2xl font-black mb-6 uppercase">Buttons & Actions</h3>
            <div className="flex flex-col gap-4">
              <NeoInput 
                label="Primary Button Text" 
                value={heroData.primaryButtonText} 
                onChange={(e) => handleUpdate('primaryButtonText', e.target.value)} 
              />
              <NeoInput 
                label="Primary Button Link" 
                value={heroData.primaryButtonLink} 
                onChange={(e) => handleUpdate('primaryButtonLink', e.target.value)} 
              />
              <NeoInput 
                label="Secondary Button Text" 
                value={heroData.secondaryButtonText} 
                onChange={(e) => handleUpdate('secondaryButtonText', e.target.value)} 
              />
              <div className="flex items-center gap-4 mt-2">
                <input 
                  type="checkbox" 
                  id="secondaryDisabled" 
                  className="w-6 h-6 border-[3px] border-black accent-primary"
                  checked={heroData.secondaryButtonDisabled}
                  onChange={(e) => handleUpdate('secondaryButtonDisabled', e.target.checked)}
                />
                <label htmlFor="secondaryDisabled" className="font-bold cursor-pointer">
                  Disable Secondary Button
                </label>
              </div>
            </div>
          </NeoCard>
        </div>

        <div className="flex flex-col gap-8">
          <NeoCard className="bg-white p-6">
            <h3 className="font-heading text-2xl font-black mb-6 uppercase">Timing</h3>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <NeoInput 
                  label="Display Date" 
                  value={heroData.date} 
                  onChange={(e) => handleUpdate('date', e.target.value)} 
                />
                <NeoInput 
                  label="Display Time" 
                  value={heroData.time} 
                  onChange={(e) => handleUpdate('time', e.target.value)} 
                />
              </div>
              <NeoInput 
                label="Countdown Target Date (ISO)" 
                value={heroData.countdownTarget} 
                onChange={(e) => handleUpdate('countdownTarget', e.target.value)} 
                placeholder="2026-09-09T10:00:00+05:00"
              />
            </div>
          </NeoCard>
        </div>
      </div>

      <ExportConfig data={currentConfig} />
    </div>
  );
}
