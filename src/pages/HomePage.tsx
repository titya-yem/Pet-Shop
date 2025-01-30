import Phone from "@/components/Phone";
import { Button } from "@/components/ui/button";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import heroImage from "@/assets/image/hero-dog.png";

const HomePage = () => {
  return (
    <Container className="bg-[#e3462c] pt-10">
      <Flex direction="column" className="py-4 pl-8 px-4 text-center ">
        <Box className="space-y-8">
          <Heading className="text-xl text-white uppercase stroke-[#950E00]">
            we are always here for all your pet's good health
          </Heading>
          <Button className="bg-[#362626] px-8 py-6">Shop Now</Button>
          <Phone title="Schedule a Call" link="appointment" />
        </Box>
        <img
          src={heroImage}
          alt="hero image"
          className="w-[400px] mx-auto mt-6"
        />
      </Flex>
    </Container>
  );
};

export default HomePage;
