import { Products } from "@/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "@/slices/Cart-Slice";
import { AppDispatch } from "@/store/store";
import { Button } from "@/components/ui/button";
import star from "@/assets/svg/Star.svg";
import { Box, Container, Flex } from "@radix-ui/themes";

const ProductsComponent = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Container>
      <h4 className="text-xl text-center lg:text-start font-semibold py-16">
        Food <span className="text-[#43606D]">& Supplies</span>
      </h4>

      <Box className="p-10 px-4 md:px-20 mb-14 rounded-md bg-[#DEFBFF]">
        <div className="flex flex-wrap justify-center items-stretch gap-6">
          {Products.map((item) => (
            <Flex
              key={item.id}
              direction="column"
              align="center"
              className="w-[210px] bg-white rounded-md shadow-xl overflow-hidden flex-grow"
            >
              {/* Image Box */}
              <Box className="h-[160px] bg-gray-100 flex items-center justify-center">
                <img
                  src={item.image}
                  alt="Pet food product"
                  className="max-w-full max-h-full object-contain"
                />
              </Box>
              {/* Info Box */}
              <Box className="bg-[#253239] w-full p-4 text-white flex-grow">
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
            </Flex>
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default ProductsComponent;
