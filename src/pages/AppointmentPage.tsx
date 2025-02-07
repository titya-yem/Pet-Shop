import { Box, Container } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentPage = () => {
  return (
    <Container className="bg-[#e3462c]">
      <Toaster />
      <div>
        <Box className="my-8 px-4 md:w-[45%] lg:w-1/2">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold uppercase text-center md:text-left"
            style={{ WebkitTextStroke: "1.5px #950E00" }}
          >
            Book an Appointment with us today for your pets
          </h1>
        </Box>

        {/* Appointment Booking Form */}
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Schedule an Appointment
          </h2>
        </div>
      </div>
    </Container>
  );
};

export default AppointmentPage;
