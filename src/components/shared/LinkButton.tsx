import { Link } from "react-router";
import { Button } from "../ui/button";

const LinkButton = ({ link }: { link: string }) => {
  return (
    <Button className="bg-[#D4493A] py-6 px-10 font-semibold ml-20 md:ml-0">
      <Link to={`/${link}`}>More About Us</Link>
    </Button>
  );
};

export default LinkButton;
