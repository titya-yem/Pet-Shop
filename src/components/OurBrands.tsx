import { Box, Container, Flex } from "@radix-ui/themes";
import meO from "@/assets/svg/products/me-o.svg";
import Lara from "@/assets/svg/products/lara.svg";
import smartHeart from "@/assets/svg/products/smart-heart.svg";
import whiskas from "@/assets/svg/products/Whiskas.svg";
import moderna from "@/assets/svg/products/Moderna.svg";
import Kiki from "@/assets/svg/products/Kiki.svg";
import bearing from "@/assets/svg/products/Bearing.svg";

const OurBrands = () => {
  return (
    <Box className="h-[650px] md:h-[400px] lg:h-[440px] bg-[#E3462C]">
      <Container>
        <Box>
          <h1 className="text-2xl lg:text-4xl mx-auto pt-10 md:my-4 lg:mb-14 text-center font-bold uppercase text-white">
            What our clients say about us
          </h1>
        </Box>
        <Box className="mt-10 md:mt-12">
          <Flex
            justify="between"
            align="center"
            className="flex-wrap h-[460px] md:h-[200px] lg:h-[200px] rounded-md px-4 bg-white"
          >
            <img src={moderna} alt="Moderna brand" width="100px" />
            <img src={meO} alt="Me-o brand" width="100px" />
            <img src={smartHeart} alt="Smart-heart brand" width="100px" />
            <img src={whiskas} alt="Whiskas brand" width="100px" />
            <img src={bearing} alt="Bearing brand" width="100px" />
            <img src={Kiki} alt="Kiki brand" width="100px" />
            <img src={Lara} alt="Lara brand" width="100px" />
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default OurBrands;
