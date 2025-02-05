import Phone from "@/components/Phone";
import { Box, Container, Flex } from "@radix-ui/themes";
import heroImage from "@/assets/image/hero-dog.png";
import LinkButton from "@/components/shared/LinkButton";

const HomePage = () => {
  return (
    <Container className="bg-[#e3462c] pt-10 md:pt-0">
      <div className="px-4 flex flex-col md:flex-row md:items-center md:justify-between mx-auto">
        {/* Left Content */}

        <Box className="space-y-8 md:w-[45%] lg:w-1/2">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold uppercase text-center md:text-left"
            style={{ WebkitTextStroke: "1.5px #950E00" }}
          >
            We are always here for all your pet's good health
          </h1>
          <Flex className="flex-col md:flex-row gap-4">
            <LinkButton
              name="Shop Now"
              link="shop"
              className="w-full px-8 py-6 lg:px-12 bg-[#362626]"
            />
            <Phone title="Schedule a Call" link="appointment" />
          </Flex>
        </Box>

        {/* Right Image */}
        <Box className="w-full md:w-1/2 lg:pl-14 mt-6">
          <img
            src={heroImage}
            alt="hero image"
            className="w-[400px] lg:w-[500px]"
          />
        </Box>
      </div>
    </Container>
  );
};

export default HomePage;
