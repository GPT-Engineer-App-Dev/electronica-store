import { Box, SimpleGrid, Image, Text, Link, VStack, Select } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    image: "https://via.placeholder.com/150",
    price: "$699",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Laptop",
    image: "https://via.placeholder.com/150",
    price: "$999",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Smartwatch",
    image: "https://via.placeholder.com/150",
    price: "$199",
    category: "Wearables",
  },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState("");
  const query = useQuery();

  useEffect(() => {
    const search = query.get("search")?.toLowerCase() || "";
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(search) &&
        (category ? product.category === category : true)
      )
    );
  }, [query, category]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Box p={4}>
      <Select placeholder="Filter by category" onChange={handleCategoryChange} mb={4}>
        <option value="Electronics">Electronics</option>
        <option value="Wearables">Wearables</option>
      </Select>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <VStack spacing={4}>
                <Text fontWeight="bold" fontSize="xl">
                  {product.name}
                </Text>
                <Text>{product.price}</Text>
                <Link as={RouterLink} to={`/products/${product.id}`} color="teal.500">
                  View Details
                </Link>
              </VStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;