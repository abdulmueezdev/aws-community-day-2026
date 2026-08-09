export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  sessionTitle: string;
  sessionType: 'panel' | 'workshop' | 'keynote';
  bio: string;
  photoUrl: string;
  socialTwitter?: string;
  socialLinkedin?: string;
  socialGithub?: string;
  displayOrder: number;
  isVisible: boolean;
}

export interface Partner {
  id: string;
  name: string;
  tagline: string;
  websiteUrl: string;
  logoUrl: string;
  displayOrder: number;
  isVisible: boolean;
}

export interface Organizer {
  id: string;
  name: string;
  role: string;
  organization: string;
  photoUrl: string;
  linkedin?: string;
  displayOrder: number;
  isVisible: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  displayOrder: number;
  isPublished: boolean;
}

export interface SiteData {
  event: {
    title: string;
    location: string;
    tagline: string;
    date: string;
    time: string;
    countdownTarget: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonDisabled: boolean;
    secondaryButtonLink: string;
    venueName: string;
    venueAddress: string;
    venueCity: string;
    venueProvince: string;
    venuePostalCode: string;
    venueCountry: string;
    venueMapEmbedUrl: string;
    venueLatitude: number;
    venueLongitude: number;
  };
  speakers: Speaker[];
  partners: Partner[];
  organizers: Organizer[];
  faqs: FAQ[];
  settings: {
    registrationOpen: boolean;
    maxCapacity: number;
    currentRegistrations: number;
    socialInstagram: string;
    socialTwitter: string;
    socialLinkedin: string;
    socialGithub: string;
    footerCopyright: string;
    footerCredits: string;
    seoTitle: string;
    seoDescription: string;
  };
}

export const defaultSiteData: SiteData = {
  event: {
    title: "AWS Student Community Day Peshawar",
    location: "Peshawar",
    tagline: "An immersive, one-day learning conference designed specifically for students.",
    date: "September 9th, 2026",
    time: "10AM — 4PM",
    countdownTarget: "2026-09-09T10:00:00+05:00",
    primaryButtonText: "VIEW AGENDA",
    primaryButtonLink: "#agenda",
    secondaryButtonText: "REGISTRATION CLOSED",
    secondaryButtonDisabled: true,
    secondaryButtonLink: "#",
    venueName: "FAST University",
    venueAddress: "National University of Computer & Emerging Sciences - FAST Peshawar Campus",
    venueCity: "Peshawar",
    venueProvince: "KPK",
    venuePostalCode: "25000",
    venueCountry: "Pakistan",
    venueMapEmbedUrl: "https://maps.google.com/maps?q=National+University+of+Computer+%26+Emerging+Sciences+-+FAST+Peshawar+Campus,+Peshawar,+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed",
    venueLatitude: 33.980304,
    venueLongitude: 71.4276552,
  },
  speakers: [
    {
      id: "panel-1",
      name: "Name",
      role: "Title",
      company: "Organization",
      sessionTitle: "Topic",
      sessionType: "panel",
      bio: "Bio",
      photoUrl: "",
      displayOrder: 1,
      isVisible: true
    },
    {
      id: "speaker-1",
      name: "Name",
      role: "Title",
      company: "Organization",
      sessionTitle: "Topic",
      sessionType: "workshop",
      bio: "Bio",
      photoUrl: "",
      displayOrder: 2,
      isVisible: true
    },
    {
      id: "speaker-2",
      name: "Name",
      role: "Title",
      company: "Organization",
      sessionTitle: "Topic",
      sessionType: "workshop",
      bio: "Bio",
      photoUrl: "",
      displayOrder: 3,
      isVisible: true
    },
    {
      id: "speaker-3",
      name: "Name",
      role: "Title",
      company: "Organization",
      sessionTitle: "Topic",
      sessionType: "workshop",
      bio: "Bio",
      photoUrl: "",
      displayOrder: 4,
      isVisible: true
    },
    {
      id: "speaker-4",
      name: "Name",
      role: "Title",
      company: "Organization",
      sessionTitle: "Topic",
      sessionType: "workshop",
      bio: "Bio",
      photoUrl: "",
      displayOrder: 5,
      isVisible: true
    },
    {
      id: "speaker-5",
      name: "Name",
      role: "Title",
      company: "Organization",
      sessionTitle: "Topic",
      sessionType: "workshop",
      bio: "Bio",
      photoUrl: "",
      displayOrder: 6,
      isVisible: true
    },
    {
      id: "speaker-6",
      name: "Name",
      role: "Title",
      company: "Organization",
      sessionTitle: "Topic",
      sessionType: "workshop",
      bio: "Bio",
      photoUrl: "",
      displayOrder: 7,
      isVisible: true
    },
    {
      id: "speaker-7",
      name: "Name",
      role: "Title",
      company: "Organization",
      sessionTitle: "Topic",
      sessionType: "workshop",
      bio: "Bio",
      photoUrl: "",
      displayOrder: 8,
      isVisible: true
    }
  ],
  partners: [
    {
      id: "partner-1",
      name: "Name",
      tagline: "Description",
      websiteUrl: "#",
      logoUrl: "",
      displayOrder: 1,
      isVisible: true
    },
    {
      id: "partner-2",
      name: "Name",
      tagline: "Description",
      websiteUrl: "#",
      logoUrl: "",
      displayOrder: 2,
      isVisible: true
    },
    {
      id: "partner-3",
      name: "Name",
      tagline: "Description",
      websiteUrl: "#",
      logoUrl: "",
      displayOrder: 3,
      isVisible: true
    },
    {
      id: "partner-4",
      name: "Name",
      tagline: "Description",
      websiteUrl: "#",
      logoUrl: "",
      displayOrder: 4,
      isVisible: true
    }
  ],
  organizers: [
    {
      id: "org-1",
      name: "Name",
      role: "Role",
      organization: "Organization",
      photoUrl: "",
      linkedin: "",
      displayOrder: 1,
      isVisible: true
    },
    {
      id: "org-2",
      name: "Name",
      role: "Role",
      organization: "Organization",
      photoUrl: "",
      linkedin: "",
      displayOrder: 2,
      isVisible: true
    },
    {
      id: "org-3",
      name: "Name",
      role: "Role",
      organization: "Organization",
      photoUrl: "",
      linkedin: "",
      displayOrder: 3,
      isVisible: true
    },
    {
      id: "org-4",
      name: "Name",
      role: "Role",
      organization: "Organization",
      photoUrl: "",
      linkedin: "",
      displayOrder: 4,
      isVisible: true
    },
    {
      id: "org-5",
      name: "Name",
      role: "Role",
      organization: "Organization",
      photoUrl: "",
      linkedin: "",
      displayOrder: 5,
      isVisible: true
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Is the event free and open for all students?",
      answer: "Yes, the event is entirely free and open to all university students.",
      displayOrder: 1,
      isPublished: true
    },
    {
      id: "faq-2",
      question: "Will there be refreshments provided?",
      answer: "Yes, refreshments will be provided to all registered attendees.",
      displayOrder: 2,
      isPublished: true
    },
    {
      id: "faq-3",
      question: "Is there a strict schedule for the event?",
      answer: "Yes, the event schedule will be strictly followed. Sessions run from 10AM to 4PM.",
      displayOrder: 3,
      isPublished: true
    },
    {
      id: "faq-4",
      question: "Does registration guarantee a seat?",
      answer: "Registration acts as an RSVP, but seats are limited and will be given on a first-come, first-served basis on the event day.",
      displayOrder: 4,
      isPublished: true
    },
    {
      id: "faq-5",
      question: "Can I register on-spot at the venue?",
      answer: "On-spot registration is not guaranteed and depends entirely on available capacity. Pre-registration is highly recommended.",
      displayOrder: 5,
      isPublished: true
    }
  ],
  settings: {
    registrationOpen: false,
    maxCapacity: 500,
    currentRegistrations: 15,
    socialInstagram: "#",
    socialTwitter: "#",
    socialLinkedin: "#",
    socialGithub: "#",
    footerCopyright: "Copyright © 2026 AWS Community Day FAST Peshawar. All rights reserved.",
    footerCredits: "DESIGN AND CODE BY ABDUL MUEEZ",
    seoTitle: "AWS Student Community Day Peshawar 2026",
    seoDescription: "An immersive, one-day AWS learning conference at FAST University Peshawar."
  }
};
