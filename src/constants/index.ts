import dogKibble from "@/assets/image/data/Premium Dog Kibble.jpg";
import catFood from "@/assets/image/data/Organic Wet Cat Food.jpg";
import rabbitHay from "@/assets/image/data/Timothy Hay for Rabbits.jpg";
import seedMix from "@/assets/image/data/Bird Seed Mix.jpg";
import fishFlakes from "@/assets/image/data/Goldfish Flakes.jpg";
import dogTreat from "@/assets/image/data/Grain-Free Dog Treats.jpg";
import fishCatFood from "@/assets/image/data/Salmon & Tuna Cat Food.jpg";
import rabbitPellets from "@/assets/image/data/Rabbit Pellets.jpg";
import foodBlend from "@/assets/image/data/Exotic Bird Food Blend.jpg";
import fishPellets from "@/assets/image/data/Tropical Fish Pellets.jpg";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  reviews?: number;
  description?: string;
};

export const Products: Product[] = [
  {
    id: 1,
    name: "Premium Dog Kibble",
    category: "dog",
    price: 29.99,
    rating: 4.7,
    reviews: 132,
    description:
      "High-quality kibble made with real chicken and wholesome grains, perfect for active dogs.",
    image: dogKibble,
  },
  {
    id: 2,
    name: "Organic Wet Cat Food",
    category: "cat",
    price: 19.99,
    rating: 4.5,
    reviews: 87,
    description:
      "Delicious organic wet food packed with nutrients for your feline friend.",
    image: catFood,
  },
  {
    id: 3,
    name: "Timothy Hay for Rabbits",
    category: "rabbit",
    price: 24.99,
    rating: 4.8,
    reviews: 201,
    description:
      "Fresh Timothy hay to support your rabbit's digestive health and dental hygiene.",
    image: rabbitHay,
  },
  {
    id: 4,
    name: "Bird Seed Mix",
    category: "bird",
    price: 14.99,
    rating: 4.6,
    reviews: 112,
    description:
      "A nutritious blend of seeds and grains to keep your birds happy and healthy.",
    image: seedMix,
  },
  {
    id: 5,
    name: "Goldfish Flakes",
    category: "fish",
    price: 9.99,
    rating: 4.4,
    reviews: 45,
    description:
      "High-quality flakes designed to provide balanced nutrition for goldfish.",
    image: fishFlakes,
  },
  {
    id: 6,
    name: "Grain-Free Dog Treats",
    category: "dog",
    price: 15.99,
    rating: 4.9,
    reviews: 178,
    description:
      "Grain-free treats made with natural ingredients, ideal for sensitive dogs.",
    image: dogTreat,
  },
  {
    id: 7,
    name: "Salmon & Tuna Cat Food",
    category: "cat",
    price: 27.99,
    rating: 4.7,
    reviews: 156,
    description:
      "Delicious wet food made with real salmon and tuna, rich in omega-3 fatty acids.",
    image: fishCatFood,
  },
  {
    id: 8,
    name: "Rabbit Pellets",
    category: "rabbit",
    price: 21.99,
    rating: 4.6,
    reviews: 94,
    description:
      "Nutritious pellets designed to support your rabbit's digestive health.",
    image: rabbitPellets,
  },
  {
    id: 9,
    name: "Exotic Bird Food Blend",
    category: "bird",
    price: 18.99,
    rating: 4.8,
    reviews: 98,
    description:
      "A premium blend of seeds, nuts, and fruits for exotic birds like parrots and cockatiels.",
    image: foodBlend,
  },
  {
    id: 10,
    name: "Tropical Fish Pellets",
    category: "fish",
    price: 12.99,
    rating: 4.5,
    reviews: 67,
    description:
      "Specially formulated pellets for tropical fish to promote vibrant colors and health.",
    image: fishPellets,
  },
];
