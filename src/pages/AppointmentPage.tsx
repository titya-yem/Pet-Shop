import { Box, Container } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";
import aboutHeroImage from "@/assets/image/About-hero.png";
import aboutFormImage from "@/assets/image/appointmnet-image.png";
import AppointmentForm from "@/components/AppointmentForm";

const AppointmentPage = () => {
  return (
    <Box className="bg-[#e3462c]">
      <Container>
        <Toaster />
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12">
          <Box className="my-4 px-4 md:w-[56%]">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:mb-16 text-white font-bold uppercase text-center md:text-left"
              style={{ WebkitTextStroke: "1.5px #950E00" }}
            >
              Book an Appointment with us today for your pets
            </h1>
          </Box>
          <Box>
            <img
              src={aboutHeroImage}
              alt="cute innocent dog"
              className="w-[300px] lg:w-[400px] relative z-[2]"
            />
          </Box>
        </div>
      </Container>

      {/* Appointment Booking Form Section */}
      <div className="flex flex-col md:flex-row justify-center items-center py-20 bg-[#1F272B] relative bottom-16 z-[1]">
        {/* Image */}
        <Box className="md:mr-8">
          <img
            src={aboutFormImage}
            alt="cute cat and dog sitting on a chair"
            width="420"
            className="mx-auto md:mx-0"
          />
        </Box>

        {/* Form */}
        <Box className="mx-auto md:ml-8">
          <AppointmentForm />
        </Box>
      </div>
    </Box>
  );
};

export default AppointmentPage;