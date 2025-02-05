import { Box, Container, Flex } from "@radix-ui/themes";
import logo from "@/assets/image/Logo.png";
import { NavbarLists } from "../../constants/Navbar";
import { Link } from "react-router";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import toggle from "@/assets/svg/Toggle.svg";
import SearchIcon from "@/assets/svg/SearchIcon.svg";
import ShoppingBag from "@/assets/svg/ShoppingBag.svg";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Navbar = () => {
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  return (
    <>
      <Container className="bg-[#e3462c]">
        <Flex justify="between" align="center" className="py-4 px-4">
          <Box>
            <img src={logo} alt="Pet Shop logo" width={80} height={80} />
          </Box>
          <Flex gap="5">
            {/* Desktop Navbar */}
            {NavbarLists.map((list) => (
              <ul key={list.link}>
                <li className="hidden md:flex text-white hover:font-medium duration-200">
                  <Link to={list.link}>{list.label}</Link>
                </li>
              </ul>
            ))}
            <Button className="bg-transparent hover:bg-transparent shadow-none px-0">
              <img
                src={SearchIcon}
                alt="search"
                width={25}
                className="hidden md:inline-block invert pb-3"
              />
            </Button>

            <Link to="/cart" className="relative">
              <img
                src={ShoppingBag}
                alt="Shopping Bag"
                width={25}
                className="hidden md:block invert"
              />
              {totalQuantity > 0 && (
                <span className="absolute bottom-2 left-3 bg-yellow-400 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>

            {/* Mobile Navbar */}
            <Sheet>
              <SheetTrigger>
                <img
                  src={toggle}
                  alt="toggle"
                  width={25}
                  className="md:hidden invert focus:outline-none"
                />
              </SheetTrigger>
              <SheetContent className="w-1/2">
                <SheetHeader>
                  <SheetTitle className="text-[#e3462c] pb-10 pt-6 text-center">
                    Pet Shop
                  </SheetTitle>
                  <Box className="text-center space-y-2">
                    {NavbarLists.map((list) => (
                      <ul key={list.link}>
                        <li className="hover:font-medium duration-200 hover:bg-[#e3462c] rounded-lg p-2 hover:text-white">
                          <Link to={list.link}>{list.label}</Link>
                        </li>
                      </ul>
                    ))}
                  </Box>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
