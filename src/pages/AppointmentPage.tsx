import aboutDog from "@/assets/image/About-hero.png";
import vacationImage from "@/assets/svg/appointment/travel.svg";
import bathingImage from "@/assets/svg/appointment/bathing.svg";
import cutAndTrimImage from "@/assets/svg/appointment/cut hair.svg";
import foodImage from "@/assets/svg/appointment/food.svg";
import partyImage from "@/assets/svg/appointment/party.svg";
import { Box, Container, Text } from "@radix-ui/themes";
import { useState } from "react";

const AppointmentPage: React.FC = () => {
  const [handleClick, setHandleCLick] = useState();

  return (
    <Container className="bg-[#e3462c]">
      <div>
        <Box className="my-8 px-4 md:w-[45%] lg:w-1/2">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold uppercase text-center md:text-left"
            style={{ WebkitTextStroke: "1.5px #950E00" }}
          >
            Book an Appointment with us today for your pets
          </h1>
          <img src={aboutDog} alt="Cute innocent dog" className="mx-auto" />
        </Box>

        <Box>
          <Box className="bg-[#1F272B]">
            <div className="py-6 px-4">
              <Box className="hidden lg:block">
                {/* <img src="" alt="" /> */}
              </Box>

              {/* Left side */}
              <Box className="rounded-lg bg-white">
                <Box>
                  <h1 className="text-2xl lg:text-4xl py-6 text-center font-bold uppercase">
                    Book an appointment with us
                  </h1>
                  <Text as="p" className="pb-6 text-center">
                    Please select the following
                  </Text>
                </Box>

                {/* Form */}
                <form>
                  <div>
                    <div className="flex flex-wrap justify-between items-center">
                      <Box>
                        <img
                          src={vacationImage}
                          alt="Stress free for your vacation"
                          className="mx-auto shadow-xl rounded-full w-24 h-24 object-cover"
                        />
                        <p className="text-center mt-2 text-black ">Vacation</p>
                      </Box>
                    </div>
                    {/* <div className="flex flex-col">
                      <label htmlFor="name" className="font-medium">
                        Your Name
                      </label>
                      <input type="text" placeholder="Titya Yem" id="name" />
                    </div> */}
                  </div>
                </form>
              </Box>
            </div>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default AppointmentPage;
