export interface ProjectData {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  client: string;
  description: string;
  heroVideo: string;
  featuredImage: string;
  images: string[];
  details: {
    title: string;
    text: string;
    image: string;
    align: "left" | "right";
  }[];
}