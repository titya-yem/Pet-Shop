import { Box, Container, Flex } from "@radix-ui/themes";
import logo from "../../assets/Logo.png";
import { NavbarLists } from "../../constants/Navbar";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <Container>
        <Flex justify="between" align="center" className="py-4 px-4">
          <Box>
            <img src={logo} alt="Pet Shop logo" width={80} height={80} />
          </Box>
          <Flex gap="5">
            {NavbarLists.map((list) => (
              <ul key={list.link}>
                <li className="hidden md:flex text-white hover:font-medium duration-200">
                  <Link to={list.link}>{list.label}</Link>
                </li>
              </ul>
            ))}
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
