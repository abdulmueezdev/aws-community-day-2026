import { NeoCard } from '../../components/NeoCard';
import { NeoButton } from '../../components/NeoButton';
import { NeoBadge } from '../../components/NeoBadge';
import { Users, Ticket, Handshake, Calendar } from 'lucide-react';
import { defaultSiteData } from '../../data/siteData';

export function Dashboard() {
  const stats = [
    { label: 'Total Speakers', value: defaultSiteData.speakers.length.toString(), icon: Users, color: 'bg-tertiary' },
    { label: 'Registrations', value: '1,248', icon: Ticket, color: 'bg-primary' },
    { label: 'Partners', value: defaultSiteData.partners.length.toString(), icon: Handshake, color: 'bg-secondary' },
    { label: 'Days to Event', value: '43', icon: Calendar, color: 'bg-danger' }
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <NeoCard key={i} className="bg-white p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-gray-600">{stat.label}</span>
              <div className={`p-3 border-[3px] border-black ${stat.color} shadow-neo-sm`}>
                <stat.icon size={24} className="text-black" />
              </div>
            </div>
            <span className="font-heading text-4xl font-black">{stat.value}</span>
          </NeoCard>
        ))}
      </div>

      <section>
        <h3 className="font-heading text-2xl font-black mb-4 uppercase">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          <NeoButton href="/admin/speakers" variant="secondary">Add Speaker</NeoButton>
          <NeoButton href="/admin/hero" variant="secondary">Update Hero</NeoButton>
          <NeoButton href="/admin/partners" variant="secondary">Manage Partners</NeoButton>
          <NeoButton href="/admin/settings" variant="secondary">Site Settings</NeoButton>
        </div>
      </section>

      <section>
        <h3 className="font-heading text-2xl font-black mb-4 uppercase">Recent Activity</h3>
        <NeoCard className="bg-white overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-[3px] border-black bg-gray-100">
                <th className="p-4 font-heading font-black border-r-[3px] border-black">Time</th>
                <th className="p-4 font-heading font-black border-r-[3px] border-black">Action</th>
                <th className="p-4 font-heading font-black border-r-[3px] border-black">User</th>
                <th className="p-4 font-heading font-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { time: '10:24 AM', action: 'Added Speaker: Dr. Sarah Chen', user: 'Admin', status: 'Success', variant: 'success' },
                { time: '09:15 AM', action: 'Updated Hero Tagline', user: 'Admin', status: 'Success', variant: 'success' },
                { time: 'Yesterday', action: 'Deleted Partner: OldCorp', user: 'Admin', status: 'Warning', variant: 'warning' },
              ].map((row, i) => (
                <tr key={i} className="border-b-[3px] border-black last:border-b-0 hover:bg-gray-50 transition-colors">
                  <td className="p-4 border-r-[3px] border-black font-bold">{row.time}</td>
                  <td className="p-4 border-r-[3px] border-black font-bold">{row.action}</td>
                  <td className="p-4 border-r-[3px] border-black font-bold">{row.user}</td>
                  <td className="p-4">
                    <NeoBadge variant={row.variant as any}>{row.status}</NeoBadge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </NeoCard>
      </section>
    </div>
  );
}
