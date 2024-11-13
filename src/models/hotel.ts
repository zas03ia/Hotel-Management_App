export interface Room {
    roomSlug: string;
    roomTitle: string;
    roomImage: string;
    bedroomCount: number;
  }
  
  export interface Hotel {
    id: string;
    slug: string;
    title: string;
    description: string;
    guestCount: number;
    bedroomCount: number;
    bathroomCount: number;
    amenities: string[];
    hostInformation: string;
    address: string;
    latitude: number;
    longitude: number;
    images: string[];
    rooms: Room[];
  }