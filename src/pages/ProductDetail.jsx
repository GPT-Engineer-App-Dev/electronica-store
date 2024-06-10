import { Box, Image, Text, Heading, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone",
    image: "https://via.placeholder.com/150",
    price: "$699",
    description: "A high-end smartphone with a sleek design and powerful features.",
  },
  {
    id: 2,
    name: "Laptop",
    image: "https://via.placeholder.com/150",
    price: "$999",
    description: "A powerful laptop suitable for all your computing needs.",
  },
  {
    id: 3,
    name: "Smartwatch",
    image: "https://via.placeholder.com/150",
    price: "$199",
    description: "A stylish smartwatch with multiple health tracking features.",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>{product.name}</Heading>
        <Image src={product.image} alt={product.name} />
        <Text fontSize="xl">{product.price}</Text>
        <Text>{product.description}</Text>
      </VStack>
    </Box>
  );
};

export default ProductDetail;