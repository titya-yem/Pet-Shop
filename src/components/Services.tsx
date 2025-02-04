// import leftArrow from "@/assets/svg/BackwardArrow.svg";
// import rightArrow from "@/assets/svg/ForwardArrow.svg";
import { Container } from "@radix-ui/themes";
// import { Button } from "./ui/button";
import ServicesCards from "./ServicesCards";
import circleDog from "@/assets/svg/CircleDog.svg";
import circleCat from "@/assets/svg/CircleCat.svg";
import circleRabbit from "@/assets/svg/CircleRabbit.svg";
import circleBird from "@/assets/svg/CircleBird.svg";
import circleFish from "@/assets/svg/CircleFish.svg";

const Services = () => {
  return (
    <Container className="mt-10 px-4">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl lg:text-4xl mx-auto md:my-4 font-bold uppercase">
          Services
        </h1>

        {/* In case future have more than six services */}
        {/* <div className="hidden md:flex items-center gap-x-4">
          <Button className="bg-[#D4493A] hover:bg-[#cf3c2c] px-2 py-2 rounded-sm shadow-md">
            <img
              src={leftArrow}
              alt="Forward Arrow"
              width={25}
              className="invert"
            />
          </Button>
          <Button className="bg-[#D4493A] hover:bg-[#cf3c2c] px-2 py-2 rounded-sm shadow-md">
            <img
              src={rightArrow}
              alt="Forward Arrow"
              width={25}
              className="invert"
            />
          </Button>
        </div> */}
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 space-y-6 md:space-y-0">
        <ServicesCards image={circleDog} index={0} />
        <ServicesCards image={circleCat} index={1} />
        <ServicesCards image={circleRabbit} index={2} />
        <ServicesCards image={circleBird} index={3} />
        <ServicesCards image={circleFish} index={4} />
      </div>
    </Container>
  );
};

export default Services;
