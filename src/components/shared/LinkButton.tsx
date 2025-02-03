import { Link } from "react-router";
import { Button } from "../ui/button";

interface LinkButtonProps {
  link: string;
  className?: string;
  classname?: string;
  name: string;
}

const LinkButton = ({ link, className, name, classname }: LinkButtonProps) => {
  return (
    <div className={`${classname}`}>
      <Button className={`bg-[#D4493A] py-6 px-10 font-semibold hover:bg-[#c52b1a] ${className}`}>
        <Link to={`/${link}`}>{name}</Link>
      </Button>
    </div>
  );
};

export default LinkButton;
