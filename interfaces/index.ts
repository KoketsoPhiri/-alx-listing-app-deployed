// interfaces/index.ts

export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string; // Added for property cards
}

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
}



// interfaces/index.ts

export interface PropertyAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  avatar: string; // URL to avatar image
  rating: number; // e.g., 1-5
  comment: string;
  reviewerName: string;
  date: string; // ISO date string
}

export interface PropertyProps {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  rating: number;
  image: string; // Main image URL
  images: string[]; // Additional image URLs for gallery
  address: PropertyAddress;
  category: string[]; // Amenities/features
  reviews: Review[];
  whatWeOffer: string; // For the tabbed description
  aboutHost: string; // For the tabbed description
}

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  description: string;
}

export interface PropertyCardProps {
  property: Property;
}