import { Products } from "@/constants";
import { Box, Flex } from "@radix-ui/themes";
import { Button } from "../ui/button";
import star from "@/assets/svg/Star.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "@/slices/Cart-Slice";
import { AppDispatch } from "@/store/store";

type categoryProps = {
  startIndex: number;
  itemsToShow: number;
};

const CategoryFood = ({ startIndex, itemsToShow }: categoryProps) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex justify-between items-center overflow-hidden gap-x-4 xl:gap-x-0 w-[85%]">
      {Products.slice(startIndex, startIndex + itemsToShow).map((item) => (
        <div key={item.id} className="w-[220px]">
          <div>
            {/* Image Box */}
            <Box className="h-[140px] rounded-t-md flex items-center justify-center bg-white">
              <img
                src={item.image}
                alt="Pet food product"
                className="mx-auto max-w-full max-h-full object-contain"
              />
            </Box>
            {/* Info Box */}
            <Box className="rounded-b-md p-4 text-white bg-[#253239]">
              <h4 className="text-base font-medium mb-2">{item.name}</h4>
              <Flex justify="between" align="center" className="mb-3">
                <p className="font-semibold">${item.price}</p>
                <Flex gapX="2" align="center">
                  <img src={star} alt={`Rating ${item.rating}`} />
                  <span>{item.rating}</span>
                </Flex>
              </Flex>
              <Button
                className="!text-black bg-[#FAD046] hover:bg-[#ffca1e] w-full py-2"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image,
                      quantity: 1,
                    })
                  )
                }
              >
                Add To Cart
              </Button>
            </Box>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryFood;
