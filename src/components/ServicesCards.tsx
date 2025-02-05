import dollarCircle from "@/assets/svg/DollarCircle.svg";
import { serviceLists } from "@/constants/service";
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { Button } from "./ui/button";
import { Link } from "react-router";

interface ServicesCardsProps {
  image: string;
  index: number;
}

const ServicesCards: React.FC<ServicesCardsProps> = ({ image, index }) => {
  const service = serviceLists[index];
  if (!service) return null;

  return (
    <Container className="w-full md:w-[393px] bg-[#1F272B] py-6 md:py-4 rounded-lg *:text-white">
      <Flex justify="between" align="start" gapX="2" key={service.price}>
        <Box>
          <img
            src={image}
            alt={service.alt}
            className="w-[260px] rounded-full p-2"
          />
        </Box>
        <Box className="space-y-3">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            {service.title}
          </h1>
          <Text as="p" className="text-sm lg:text-base text-[#e9e3d3] w-[90%]">
            {service.text}
          </Text>

          {/* Buttons */}
          <Flex gapX="4" className="md:pt-4">
            <Link to="/appointment">
              <Button className="bg-[#FBF3DF] hover:bg-[#eae0c6] text-black">
                <img src={dollarCircle} alt="Currency price USD" />
                {service.price}
              </Button>
            </Link>

            <Link to="/services">
              <Button className="bg-[#FBF3DF] hover:bg-[#eae0c6] text-black">
                {service.duration ?? 0}
                <span>
                  {typeof service.duration === "number" &&
                  service.duration === 1
                    ? " day"
                    : " hours"}
                </span>
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default ServicesCards;
