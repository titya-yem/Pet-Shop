import { Box, Container } from "@radix-ui/themes";
import PetFoodCategories from "./PetFoodCategories";
import rabbitImage from "@/assets/svg/CircleRabbit.svg";
import catImage from "@/assets/svg/CircleCat.svg";
import dogImage from "@/assets/svg/CircleDog.svg";
import birdImage from "@/assets/svg/CircleBird.svg";
import fishImage from "@/assets/svg/CircleFish.svg";
import LinkButton from "./shared/LinkButton";

const TopCategories = () => {
  return (
    <Container className="pt-10 bg-[#FAD046]">
      <Box>
        <h1 className="uppercase text-2xl lg:text-4xl text-center font-bold">
          Top Categories
        </h1>
      </Box>

      <div className="flex flex-wrap gap-2 justify-between items-center w-2/3 mx-auto mt-10">
        <PetFoodCategories name="Rabbit" image={rabbitImage} />
        <PetFoodCategories name="Cat" image={catImage} />
        <PetFoodCategories name="Dog" image={dogImage} />
        <PetFoodCategories name="Bird" image={birdImage} />
        <PetFoodCategories name="Fish" image={fishImage} />
      </div>

      <Box>
        <div className=" w-[189px] h-[20px] bg-[#302B2B] rounded-xl my-8 mx-auto"></div>
        <LinkButton
          link="shop"
          name="Check Our Shop"
          classname="block md:hidden mx-auto text-center"
        />

        <Box className="!hidden md:!block h-[310px] bg-[#E3462C] rounded-lg">
          
        </Box>
      </Box>
    </Container>
  );
};

export default TopCategories;
