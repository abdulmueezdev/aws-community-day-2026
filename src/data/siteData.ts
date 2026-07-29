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
    venueName: string;
    venueAddress: string;
    venueCity: string;
    venueProvince: string;
    venuePostalCode: string;
    venueCountry: string;
    venueMapEmbedUrl: string;
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
    title: "AWS Student Community Day Lahore",
    location: "Lahore",
    tagline: "An immersive, one-day learning conference designed specifically for students.",
    date: "September 9th, 2026",
    time: "10AM — 4PM",
    countdownTarget: "2026-09-09T10:00:00+05:00",
    primaryButtonText: "VIEW AGENDA",
    primaryButtonLink: "#agenda",
    secondaryButtonText: "REGISTRATION CLOSED",
    secondaryButtonDisabled: true,
    venueName: "Indigo Heights",
    venueAddress: "3 C3, Near Jehan Road, Gulberg III",
    venueCity: "Lahore",
    venueProvince: "Punjab",
    venuePostalCode: "54660",
    venueCountry: "Pakistan",
    venueMapEmbedUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Map+Embed"
  },
  speakers: [
    {
      id: "panel-1",
      name: "TBD",
      role: "Panelist",
      company: "TBD",
      sessionTitle: "Intelligence Needs Infrastructure: Who Owns AI Systems on Cloud?",
      sessionType: "panel",
      bio: "",
      photoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Panelist",
      displayOrder: 1,
      isVisible: true
    },
    {
      id: "speaker-1",
      name: "TBD",
      role: "Speaker",
      company: "TBD",
      sessionTitle: "TBD",
      sessionType: "workshop",
      bio: "",
      photoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Speaker",
      displayOrder: 2,
      isVisible: true
    },
    {
      id: "speaker-2",
      name: "TBD",
      role: "Speaker",
      company: "TBD",
      sessionTitle: "TBD",
      sessionType: "workshop",
      bio: "",
      photoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Speaker",
      displayOrder: 3,
      isVisible: true
    },
    {
      id: "speaker-3",
      name: "TBD",
      role: "Speaker",
      company: "TBD",
      sessionTitle: "TBD",
      sessionType: "workshop",
      bio: "",
      photoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Speaker",
      displayOrder: 4,
      isVisible: true
    },
    {
      id: "speaker-4",
      name: "TBD",
      role: "Speaker",
      company: "TBD",
      sessionTitle: "TBD",
      sessionType: "workshop",
      bio: "",
      photoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Speaker",
      displayOrder: 5,
      isVisible: true
    },
    {
      id: "speaker-5",
      name: "TBD",
      role: "Speaker",
      company: "TBD",
      sessionTitle: "TBD",
      sessionType: "workshop",
      bio: "",
      photoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Speaker",
      displayOrder: 6,
      isVisible: true
    },
    {
      id: "speaker-6",
      name: "TBD",
      role: "Speaker",
      company: "TBD",
      sessionTitle: "TBD",
      sessionType: "workshop",
      bio: "",
      photoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Speaker",
      displayOrder: 7,
      isVisible: true
    },
    {
      id: "speaker-7",
      name: "TBD",
      role: "Speaker",
      company: "TBD",
      sessionTitle: "TBD",
      sessionType: "workshop",
      bio: "",
      photoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Speaker",
      displayOrder: 8,
      isVisible: true
    }
  ],
  partners: [
    {
      id: "partner-1",
      name: "LBIS-TECH",
      tagline: "Learn-Innovate-Lead",
      websiteUrl: "#",
      logoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=LBIS-TECH",
      displayOrder: 1,
      isVisible: true
    },
    {
      id: "partner-2",
      name: "invozone",
      tagline: "",
      websiteUrl: "#",
      logoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=invozone",
      displayOrder: 2,
      isVisible: true
    },
    {
      id: "partner-3",
      name: "TBD",
      tagline: "",
      websiteUrl: "#",
      logoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Partner",
      displayOrder: 3,
      isVisible: true
    },
    {
      id: "partner-4",
      name: "HM Photography",
      tagline: "",
      websiteUrl: "#",
      logoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=HM+Photography",
      displayOrder: 4,
      isVisible: true
    }
  ],
  organizers: [
    {
      id: "org-1",
      name: "Abdul Wahab",
      role: "PRESIDENT ACM-UMT",
      organization: "UMT",
      photoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Abdul+Wahab",
      linkedin: "https://linkedin.com/in/abdulwahab",
      displayOrder: 1,
      isVisible: true
    },
    {
      id: "org-2",
      name: "Masroor Ahmad",
      role: "CLOUD CLUB CAPTAIN",
      organization: "UMT",
      photoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Masroor+Ahmad",
      linkedin: "https://linkedin.com/in/masroorahmad",
      displayOrder: 2,
      isVisible: true
    },
    {
      id: "org-3",
      name: "Ahmad Hassan",
      role: "EVENT HEAD",
      organization: "UMT",
      photoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Ahmad+Hassan",
      linkedin: "https://linkedin.com/in/example",
      displayOrder: 3,
      isVisible: true
    },
    {
      id: "org-4",
      name: "Faizan Jallani",
      role: "CO-EVENT HEAD",
      organization: "UMT",
      photoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Faizan+Jallani",
      linkedin: "https://linkedin.com/in/example2",
      displayOrder: 4,
      isVisible: true
    },
    {
      id: "org-5",
      name: "Muhammad Hassan Ali",
      role: "LOGISTIC HEAD",
      organization: "UMT",
      photoUrl: "https://ui-avatars.com/api/?background=random&size=400&name=Muhammad+Hassan+Ali",
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
    currentRegistrations: 0,
    socialInstagram: "#",
    socialTwitter: "#",
    socialLinkedin: "#",
    socialGithub: "#",
    footerCopyright: "Copyright © 2026 AWS Student Community Day Lahore. All rights reserved.",
    footerCredits: "DESIGN AND CODE BY AHMAD HASSAN",
    seoTitle: "AWS Student Community Day Lahore 2026",
    seoDescription: "An immersive, one-day learning conference designed specifically for students."
  }
};
