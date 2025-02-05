type serviceListsTypes = {
  alt: string;
  title: string;
  text: string;
  price: number | string;
  duration?: number | string;
};

export const serviceLists: serviceListsTypes[] = [
  {
    alt: "Stress free for your vacation",
    title: "Pet Stress Free Vacation",
    text: "Vacation time? Leave your dog with us! At Pet Store, we provide a safe, loving space for your pup to stay and play. Enjoy your trip—we’ve got them covered!",
    price: 79,
    duration: 1,
  },
  {
    alt: "Bathing and Drying your pets",
    title: "Pets Bathing and Drying",
    text: "Keep your pet clean and fresh with our professional bathing and drying services. We use premium products to ensure your pet's coat is shiny and healthy.",
    price: 89,
    duration: "2-3",
  },
  {
    alt: "Cut and Trim your pet's hair",
    title: "Cut And Trim Your Pet's Hair",
    text: "Our expert groomers will give your pet a stylish haircut or trim. Whether it’s a simple tidy-up or a full grooming session, we’ll make sure your pet looks and feels great.",
    price: 69,
    duration: "1-2",
  },
  {
    alt: "Foods and Supplies",
    title: "Foods and Supplies",
    text: "We offer a wide variety of high-quality pet foods and supplies to meet all your pet’s needs. From nutritious meals to fun toys, we have everything to keep your pet happy and healthy.",
    price: "variety",
    duration: "Any",
  },
  {
    alt: "Party of all pets once a month",
    title: "All Pets Party Event",
    text: "Join us once a month for our All Pets Party Event! Bring your furry friends for a day of fun, games, and socializing. It’s a great way for pets to make new friends and for owners to relax.",
    price: 19,
    duration: 4,
  },
];
