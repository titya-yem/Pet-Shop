enum petType {
  DogsLover = "Dogs Lover",
  CatsLover = "Cats Lover",
  RabbitLover = "Rabbit Lover",
  BirdsLover = "Birds Lover",
  FishesLover = "Fishes Lover",
}

interface commentProps {
  title: string;
  text: string;
  userName: string;
  type: petType;
}

export const comment: commentProps[] = [
  {
    title: "A team of vets you can trust",
    text: "Until one has loved an animal, a part of one’s soul remains unawakened. We believe in it and we believe in easy access to things that are good for our mind, body and spirit.",
    userName: "Titya Yem",
    type: petType.DogsLover,
  },
  {
    title: "Purr-fect Companions",
    text: "Cats bring a sense of calm and independence to any home. Their playful antics and soothing purrs make them irreplaceable family members.",
    userName: "Luna Meow",
    type: petType.CatsLover,
  },
  {
    title: "Hoppy Little Friends",
    text: "Rabbits are gentle, curious creatures that thrive on love and care. Watching them explore their world is pure joy.",
    userName: "Bunny Hops",
    type: petType.RabbitLover,
  },
  {
    title: "Wings of Freedom",
    text: "Birds fill our lives with music and color. From their morning chirps to their graceful flights, they remind us of nature's beauty.",
    userName: "Sky Wing",
    type: petType.BirdsLover,
  },
  {
    title: "Underwater Serenity",
    text: "Fish tanks are like living art pieces. Observing fish swim peacefully brings tranquility and balance to our busy lives.",
    userName: "Aqua Flow",
    type: petType.FishesLover,
  },
];
