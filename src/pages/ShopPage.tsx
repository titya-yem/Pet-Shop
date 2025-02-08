import LinkButton from "@/components/shared/LinkButton";
import { Box, Container, Text } from "@radix-ui/themes";
import shopImage from "@/assets/image/shop-image.png";
import catAppointment from "@/assets/image/shop-party.png";
import dogContact from "@/assets/image/shop-contact.png";

const ShopPage = () => {
  return (
    <Container className="bg-[#E3462C]">
      <div>
        {/* main box */}
        <Box className="px-4 pt-6 space-y-2 *:text-center bg-[#A2C8DD]">
          <h3 className="text-lg font-medium text-[#00424F]">Up to</h3>
          <h1 className="text-3xl font-bold text-[#00424F]">45% Off</h1>
          <Box className="w-[60%] h-[5px] mx-auto rounded-sm bg-[#E6C570]"></Box>
          <Text as="p" className="font-medium text-[#00424F]">
            Explore our discount services at the end of the month
          </Text>
          <LinkButton
            link="services"
            name="Services"
            className="py-5 px-8 bg-[#054053]"
          />
          <img src={shopImage} alt="dog steals food" />
        </Box>

        {/* side Boxes */}
        <div className="hidden md:block">
          <Box className="px-4 *:text-center bg-[#017496]">
            <h2 className="py-4 text-white">
              Looking for the party event for your pets ?
            </h2>
            <LinkButton
              link="appointment"
              name="Party"
              className="py-5 px-8 font-normal bg-transparent border"
            />
            <img
              src={catAppointment}
              alt="Cat wearing sunglasses"
              className="hidden md:block"
            />
          </Box>
          <Box className="px-4 *:text-center bg-[#017496]">
            <h2 className="py-4 text-white">
              Any questions ? Contact us Anytime
            </h2>
            <LinkButton
              link="contact"
              name="Contact"
              className="py-5 px-8 font-normal bg-transparent border"
            />
            <img
              src={dogContact}
              alt="cute little sitting puppy"
              className="hidden md:block"
            />
          </Box>
        </div>
      </div>
      
    </Container>
  );
};

export default ShopPage;
