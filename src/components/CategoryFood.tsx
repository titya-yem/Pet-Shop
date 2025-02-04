import { Products } from "@/constants";
import { Box, Flex } from "@radix-ui/themes";
import { Button } from "./ui/button";
import star from "@/assets/svg/Star.svg";

type categoryProps = {
  startIndex: number;
  itemsToShow: number;
};

const CategoryFood = ({ startIndex, itemsToShow }: categoryProps) => {
  return (
    <div className="flex justify-between items-center overflow-hidden w-[85%]">
      {Products.slice(startIndex, startIndex + itemsToShow).map((item) => (
        <div key={item.id} className="w-[200px]">
          <div>
            {/* Image Box */}
            <Box className="bg-white h-[160px] rounded-t-md">
              <img
                src={item.image}
                alt="Pet food product"
                className="relative top-[20px] left-[60px] w-[80px] h-[120px]"
              />
            </Box>
            {/* Info Box */}
            <Box className="bg-[#253239] rounded-b-md">
              <h4 className="pt-2 text-base pl-3 text-gray-300">{item.name}</h4>
              <Flex
                direction="column"
                justify="center"
                align="center"
                className="*:text-white"
              >
                <Flex gapX="6" align="center" className="pl-4 pb-2 pt-2 w-full">
                  <p className="font-semibold">${item.price}</p>
                  <Flex gapX="2">
                    <img src={star} alt={`Rating ${item.rating}`} />
                    <span>{item.rating}</span>
                  </Flex>
                </Flex>
                <Button className="!text-black bg-[#FAD046] hover:bg-[#ffca1e] py-5 px-11 mb-3">
                  Add To Cart
                </Button>
              </Flex>
            </Box>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryFood;
