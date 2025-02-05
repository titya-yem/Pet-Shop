import { comment } from "@/constants/ClientComments";
import leftArrow from "@/assets/svg/BackwardArrow.svg";
import rightArrow from "@/assets/svg/ForwardArrow.svg";
import whiteDog from "@/assets/image/client-image.png";
import sittingDog from "@/assets/image/client-dog.png";
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { Button } from "./ui/button";
import { useState } from "react";

const Recommendation: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? comment.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === comment.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mt-8 pt-10 bg-[#FBF3DF]">
      <Container>
        <Box className="space-y-6">
          <Box>
            <h1 className="text-2xl lg:text-4xl mx-auto md:my-4 lg:mb-14 text-center font-bold uppercase">
              What our clients say about us
            </h1>
          </Box>
          <Box>
            <Box>
              {/* Display the current comment */}
              <Flex
                align="center"
                justify="center"
                gap="3"
                key={comment[currentIndex].userName}
                className="w-full lg:px-3 rounded-lg h-[280px] mb-10 bg-[#FAD046]"
              >
                {/* Left Arrow Button */}
                <Button
                  className="p-0 hover:bg-[#E3462C] bg-[#E3462C]"
                  onClick={handlePrevious}
                >
                  <img
                    src={leftArrow}
                    alt="backward Arrow"
                    className="invert w-10"
                  />
                </Button>

                <Box className="!hidden lg:!inline-block">
                  <img
                    src={whiteDog}
                    alt="White cute hairy dog"
                    width="220px"
                    className="bg-[#ECB93F] rounded-xl"
                  />
                </Box>

                {/* Comment Content */}
                <Box className="w-2/3 lg:w-1/2 space-y-4">
                  <h1 className="text-xl lg:text-3xl text-center font-semibold uppercase">
                    "{comment[currentIndex].title}"
                  </h1>
                  <Text as="p" className="text-sm md:text-base lg:text-lg">
                    {comment[currentIndex].text}
                  </Text>
                  <Box>
                    <Text as="p" className="font-medium">
                      {comment[currentIndex].userName}
                    </Text>
                    <Text as="p" className="text-sm lg:text-base">
                      {comment[currentIndex].type}
                    </Text>
                  </Box>
                </Box>

                <Box className="!hidden lg:!inline-block">
                  <img
                    src={sittingDog}
                    alt="Cute innocent sitting dog"
                    width="220px"
                  />
                </Box>

                {/* Right Arrow Button */}
                <Button
                  className="p-0 hover:bg-[#E3462C] bg-[#E3462C]"
                  onClick={handleNext}
                >
                  <img
                    src={rightArrow}
                    alt="forward Arrow"
                    className="invert w-10"
                  />
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Recommendation;
