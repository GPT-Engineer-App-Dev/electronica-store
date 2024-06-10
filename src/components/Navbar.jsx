import { Box, Flex, Link, Spacer, Heading, Input } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    navigate(`/products?search=${e.target.value}`);
  };

  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center">
        <Heading as="h1" size="lg" color="white">
          Electronics Store
        </Heading>
        <Input
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearchChange}
          width="200px"
          mx={2}
        />
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/products" color="white" mx={2}>
          Products
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;