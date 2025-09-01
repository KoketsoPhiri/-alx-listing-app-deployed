import { PropertyProps } from "@/interfaces/index";

export const APP_NAME = "ALX Listing App";
export const API_BASE_URL = "http://localhost:5000/api"; // Example API URL

// Add other constants here as the project grows

// Hero section background image (You'll need to place an image in public/assets, e.g., hero-bg.jpg)
export const HERO_BACKGROUND_IMAGE = '/assets/hero-bg.jpg';

// Predefined filter labels
export const FILTER_LABELS = [
  "Top Villa",
  "Self Checkin",
  "Free Cancellation",
  "Pet Friendly",
  "Free WiFi",
  "Pool",
  "Mountain View",
  "Beachfront",
  "City Center",
  "Countryside",
  "Historical",
  "Riverside",
  "Lakeside",
  "Ski Access",
  "Hot Tub"
];

// Sample property listings for the homepage
// This can be replaced with real data from an API or database in the future
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",
    name: "Luxury Beachfront Villa",
    description: "Experience unparalleled luxury at this stunning beachfront villa. Perfect for a relaxing getaway with breathtaking ocean views.",
    pricePerNight: 500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1570198889895-7d52a7b8e2d4?fit=crop&w=1200&h=800",
    images: [
      "https://images.unsplash.com/photo-1570198889895-7d52a7b8e2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1560517721-a4897f2c62c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1549447432-888e2c04052f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1628177439369-0268480d0d8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1588667657279-c5c2a1e6a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    ],
    address: {
      street: "123 Ocean Drive",
      city: "Miami",
      state: "Florida",
      zip: "33101",
      country: "United States",
    },
    category: [
      "Private Pool",
      "Ocean View",
      "Fully Equipped Kitchen",
      "Air Conditioning",
      "Free WiFi",
      "Private Beach Access",
      "Hot Tub",
      "BBQ Area",
      "Parking",
      "Pet Friendly"
    ],
    reviews: [
      {
        id: "r1",
        userId: "u1",
        userName: "Alice Smith",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 5,
        comment: "Absolutely stunning property! The views were incredible and the villa was spotless. Highly recommend!",
        date: "2024-07-15",
      },
      {
        id: "r2",
        userId: "u2",
        userName: "Bob Johnson",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        rating: 4,
        comment: "Great location and amenities. A few minor issues with the WiFi but overall a fantastic stay.",
        date: "2024-07-10",
      },
      {
        id: "r3",
        userId: "u3",
        userName: "Carol White",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 5,
        comment: "The best vacation ever! Every detail was perfect. Can't wait to come back.",
        date: "2024-07-01",
      },
    ],
    whatWeOffer: "This luxury villa offers a private infinity pool overlooking the ocean, direct beach access, and a fully equipped gourmet kitchen. Enjoy spacious living areas, comfortable bedrooms, and outdoor dining with BBQ facilities. Perfect for families or groups seeking a high-end retreat.",
    aboutHost: "Your host, Maria, is a local expert with years of experience in hospitality. She is dedicated to ensuring your stay is comfortable and memorable. Maria is always available to assist with any needs or recommendations during your visit.",
  },
  {
    id: "2",
    name: "Cozy Mountain Cabin",
    description: "A rustic and cozy cabin nestled in the heart of the mountains. Ideal for nature lovers and those seeking peace and quiet.",
    pricePerNight: 150,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1560965319-33177f0a823e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800",
    images: [
      "https://images.unsplash.com/photo-1560965319-33177f0a823e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1548175896-48b497040445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1531612450393-2775a7c2e88a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1584989396116-2c0b784a3c1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1555513811-20a811802148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    ],
    address: {
      street: "789 Pine Ridge Rd",
      city: "Asheville",
      state: "North Carolina",
      zip: "28801",
      country: "United States",
    },
    category: [
      "Fireplace",
      "Mountain View",
      "Hiking Trails Nearby",
      "Pet Friendly",
      "Outdoor Deck",
      "Board Games",
      "Kitchenette",
    ],
    reviews: [
      {
        id: "r4",
        userId: "u4",
        userName: "David Green",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        rating: 5,
        comment: "Perfect quiet escape! Loved the fireplace and the hiking trails were fantastic.",
        date: "2024-06-20",
      },
      {
        id: "r5",
        userId: "u5",
        userName: "Eve Black",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        rating: 4,
        comment: "Very cozy, exactly what we needed. A bit isolated, so plan your groceries accordingly!",
        date: "2024-06-18",
      },
    ],
    whatWeOffer: "This charming cabin features a cozy fireplace, a well-equipped kitchenette, and a spacious outdoor deck with mountain views. Ideal for a serene retreat, with access to numerous hiking and nature trails right outside your door.",
    aboutHost: "John, your host, is an avid outdoorsman who knows the local area inside and out. He's happy to share tips on the best hiking trails, local attractions, and places to eat. John ensures the cabin is always ready for a comfortable and relaxing stay.",
  },
];

