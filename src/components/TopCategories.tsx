import { useState, useEffect } from "react";
import { Box, Container } from "@radix-ui/themes";
import PetFoodCategories from "./PetFoodCategories";
import rabbitImage from "@/assets/svg/CircleRabbit.svg";
import catImage from "@/assets/svg/CircleCat.svg";
import dogImage from "@/assets/svg/CircleDog.svg";
import birdImage from "@/assets/svg/CircleBird.svg";
import fishImage from "@/assets/svg/CircleFish.svg";
import LinkButton from "./shared/LinkButton";
import birds from "@/assets/image/Category-birds.png";
import CategoryFood from "./CategoryFood";
import leftArrow from "@/assets/svg/BackwardArrow.svg";
import rightArrow from "@/assets/svg/ForwardArrow.svg";
import { Button } from "./ui/button";
import { Products } from "@/constants";

const TopCategories = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // Default to 3 products

  const handleForward = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsToShow, Products.length - itemsToShow)
    );
  };

  const handleBackward = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsToShow, 0));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(4); // Show 4 products for screens wider than 1024px
      } else {
        setItemsToShow(3); // Show 3 products for smaller screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container className="pt-10 bg-[#FAD046]">
      <Box className="relative">
        <h1 className="uppercase text-2xl lg:text-4xl text-center font-bold">
          Top Categories
        </h1>
        <img
          src={birds}
          alt="category birds"
          className="hidden md:inline absolute top-1 w-[150px] xl:w-[180px]"
        />
      </Box>
      <div className="flex flex-wrap gap-2 justify-between items-center w-2/3 mx-auto mt-10">
        <PetFoodCategories name="Rabbit" image={rabbitImage} />
        <PetFoodCategories name="Cat" image={catImage} />
        <PetFoodCategories name="Dog" image={dogImage} />
        <PetFoodCategories name="Bird" image={birdImage} />
        <PetFoodCategories name="Fish" image={fishImage} />
      </div>
      <Box>
        <div className="w-[189px] h-[20px] bg-[#302B2B] rounded-xl my-8 mx-auto"></div>
        <LinkButton
          link="shop"
          name="Check Our Shop"
          classname="block md:hidden mx-auto text-center"
        />
        <Box className="!hidden md:!flex justify-between items-center px-2 h-[310px] bg-[#E3462C] rounded-lg">
          {/* Backward Button */}
          <Button
            onClick={handleBackward}
            disabled={startIndex === 0} // Disable if at the start
            className="border border-black shadow-md bg-transparent px-2 py-2 hover:bg-transparent rounded-sm"
          >
            <img
              src={leftArrow}
              alt="Backward Arrow"
              width={25}
              className="invert"
            />
          </Button>

          {/* Display Current Products */}
          <CategoryFood startIndex={startIndex} itemsToShow={itemsToShow} />

          {/* Forward Button */}
          <Button
            onClick={handleForward}
            disabled={startIndex + itemsToShow >= Products.length} // Disable if at the end
            className="border border-black shadow-md bg-transparent px-2 py-2 hover:bg-transparent rounded-sm"
          >
            <img
              src={rightArrow}
              alt="Forward Arrow"
              width={25}
              className="invert"
            />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TopCategories;
