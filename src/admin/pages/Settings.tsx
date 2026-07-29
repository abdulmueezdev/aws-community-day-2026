import { useState } from 'react';
import { NeoCard } from '../../components/NeoCard';
import { NeoInput } from '../../components/NeoInput';
import { defaultSiteData } from '../../data/siteData';

export function Settings() {
  const [settingsData, setSettingsData] = useState(defaultSiteData.settings);
  
  const handleUpdate = (field: keyof typeof settingsData, value: string | number | boolean) => {
    setSettingsData(prev => ({
      ...prev,
      [field]: value
    }));
  };



  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="flex flex-col gap-8">
          <NeoCard className="bg-white p-6">
            <h3 className="font-heading text-2xl font-black mb-6 uppercase">Registration</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between p-4 border-[3px] border-black bg-gray-50">
                <span className="font-bold">Current Registrations</span>
                <span className="font-heading text-2xl font-black">{settingsData.currentRegistrations}</span>
              </div>
              <NeoInput 
                label="Max Capacity" 
                type="number"
                value={settingsData.maxCapacity.toString()} 
                onChange={(e) => handleUpdate('maxCapacity', parseInt(e.target.value))} 
              />
              <div className="flex items-center gap-4 mt-2">
                <input 
                  type="checkbox" 
                  id="registrationOpen" 
                  className="w-6 h-6 border-[3px] border-black accent-primary"
                  checked={settingsData.registrationOpen}
                  onChange={(e) => handleUpdate('registrationOpen', e.target.checked)}
                />
                <label htmlFor="registrationOpen" className="font-bold cursor-pointer text-lg">
                  Registration is Open
                </label>
              </div>
            </div>
          </NeoCard>

          <NeoCard className="bg-white p-6">
            <h3 className="font-heading text-2xl font-black mb-6 uppercase">Social Links</h3>
            <div className="flex flex-col gap-4">
              <NeoInput 
                label="Twitter" 
                value={settingsData.socialTwitter} 
                onChange={(e) => handleUpdate('socialTwitter', e.target.value)} 
              />
              <NeoInput 
                label="LinkedIn" 
                value={settingsData.socialLinkedin} 
                onChange={(e) => handleUpdate('socialLinkedin', e.target.value)} 
              />
              <NeoInput 
                label="Instagram" 
                value={settingsData.socialInstagram} 
                onChange={(e) => handleUpdate('socialInstagram', e.target.value)} 
              />
              <NeoInput 
                label="GitHub" 
                value={settingsData.socialGithub} 
                onChange={(e) => handleUpdate('socialGithub', e.target.value)} 
              />
            </div>
          </NeoCard>
        </div>

        <div className="flex flex-col gap-8">
          <NeoCard className="bg-white p-6">
            <h3 className="font-heading text-2xl font-black mb-6 uppercase">SEO & Meta</h3>
            <div className="flex flex-col gap-4">
              <NeoInput 
                label="Site Title" 
                value={settingsData.seoTitle} 
                onChange={(e) => handleUpdate('seoTitle', e.target.value)} 
              />
              <div className="flex flex-col gap-2">
                <label className="font-heading font-black text-lg uppercase">Meta Description</label>
                <textarea className="rounded-none w-full p-3 border-[3px] border-black shadow-neo-sm font-bold outline-none focus:shadow-neo-hover transition-all min-h-[100px]"
                  value={settingsData.seoDescription}
                  onChange={(e) => handleUpdate('seoDescription', e.target.value)}
                />
              </div>
            </div>
          </NeoCard>

          <NeoCard className="bg-white p-6">
            <h3 className="font-heading text-2xl font-black mb-6 uppercase">Footer Configuration</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-heading font-black text-lg uppercase">Copyright Text</label>
                <textarea className="rounded-none w-full p-3 border-[3px] border-black shadow-neo-sm font-bold outline-none focus:shadow-neo-hover transition-all min-h-[80px]"
                  value={settingsData.footerCopyright}
                  onChange={(e) => handleUpdate('footerCopyright', e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-heading font-black text-lg uppercase">Credits Text</label>
                <textarea className="rounded-none w-full p-3 border-[3px] border-black shadow-neo-sm font-bold outline-none focus:shadow-neo-hover transition-all min-h-[80px]"
                  value={settingsData.footerCredits}
                  onChange={(e) => handleUpdate('footerCredits', e.target.value)}
                />
              </div>
            </div>
          </NeoCard>
        </div>

      </div>

    </div>
  );
}
