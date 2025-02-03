import { Products } from "@/lib";
import { Box, Flex } from "@radix-ui/themes";
import { Button } from "./ui/button";
import star from "@/assets/svg/Star.svg";

const CategoryFood = () => {
  return (
    <div className="flex justify-between items-center overflow-hidden w-[85%]">
      {Products.slice(0, 3).map((item) => (
        <div key={item.id} className="w-[200px]">
          <div>
            {/* Image Box */}
            <Box className="bg-white h-[130px] rounded-t-md">
              <img
                src={item.image}
                alt="Pet food product"
                className="w-[80px] h-[120px] pt-2 mx-auto"
              />
            </Box>

            {/* Info Box */}
            <Box className="bg-[#253239] rounded-b-md">
              <h4 className="text-gray-300 text-base pl-3">{item.name}</h4>
              <Flex
                direction="column"
                justify="center"
                align="center"
                className="*:text-white"
              >
                <Flex gapX="6" align="center">
                  <p className="font-semibold">${item.price}</p>
                  <Flex gapX="2">
                    <img src={star} alt={`Rating ${item.rating}`} />
                    <span>{item.rating}</span>
                  </Flex>
                </Flex>
                <Button>{/* Add To Card */}</Button>
              </Flex>
            </Box>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryFood;
