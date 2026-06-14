export type TabId = 'home' | 'order' | 'reviews';

export interface InquiryFormState {
  businessName: string;
  contactPerson: string;
  phone: string;
  email: string;
  businessType: string;
  currentWebsite: string;
  websiteStyle: string;
  pagesNeeded: string;
  featuresRequested: string[];
  budgetRange: string;
  timeline: string;
  additionalNotes: string;
}

export interface Review {
  id: string;
  name: string;
  businessName: string;
  rating: number;
  comment: string;
  date: string;
  industry: string;
  projectType: string;
  isPlaceholder?: boolean;
}
