import { useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "@/constants";
import { Box, Container, Text } from "@radix-ui/themes";
import star from "@/assets/svg/Star.svg";
import { Button } from "./ui/button";
import LinkButton from "./shared/LinkButton";
import { useDispatch } from "react-redux";
import { addToCart } from "@/slices/Cart-Slice";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = Products.find((p) => `${slugify(p.name)}-${p.id}` === slug);
  const [mainImage, setMainImage] = useState(product?.image || "");
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <Box className="bg-[#FFFAF5]">
      <Container className="p-8">
        <div className="flex items-start px-4">
          {/* Small Images Section */}
          <Box className="!hidden md:!block w-full md:w-[80px] space-y-2">
            {[product.image].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} - ${index}`}
                className={`w-full h-20 object-cover cursor-pointer border-2 ${
                  mainImage === image ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => setMainImage(image)}
              />
            ))}
          </Box>
          {/* Main Image Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Box className="p-10 rounded-lg mx-auto md:w-[300px] bg-white">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-auto max-h-[500px] object-contain"
              />
            </Box>
            {/* Product Details Section */}
            <Box className="w-full md:w-1/3 space-y-4">
              <h1 className="text-2xl text-center md:text-start font-bold text-[#1F276C]">
                {product.name}
              </h1>
              <div className="flex items-center gap-2">
                <img src={star} alt="star" className="w-5 h-5" />
                <Text as="p" className="text-gray-500">
                  {product.rating}{" "}
                  {product.reviews && `(${product.reviews} reviews)`}
                </Text>
              </div>
              <Text as="p" className="text-2xl text-[#FF6135] font-semibold">
                ${product.price.toFixed(2)}
              </Text>
              {product.description && (
                <Text as="p" className="mx-auto text-gray-700">
                  {product.description}
                </Text>
              )}
              <Button
                onClick={handleAddToCart} // Call the handler function
                className="w-full py-6 bg-[#FF6135] text-white hover:bg-[#e55831]"
              >
                Add to Cart
              </Button>
              <LinkButton name="Back To Shop" link="shop" className="w-full" />
            </Box>
          </div>
        </div>
      </Container>
    </Box>
  );
};

const slugify = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export default ProductDetailPage;
