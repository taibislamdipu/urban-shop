import Image1 from "../assets/img/image-1.png";
import Image10 from "../assets/img/image-10.png";
import Image11 from "../assets/img/image-11.png";
import Image12 from "../assets/img/image-12.png";
import Image2 from "../assets/img/image-2.png";
import Image3 from "../assets/img/image-3.png";
import Image4 from "../assets/img/image-4.png";
import Image5 from "../assets/img/image-5.png";
import Image6 from "../assets/img/image-6.png";
import Image7 from "../assets/img/image-7.png";
import Image8 from "../assets/img/image-8.png";
import Image9 from "../assets/img/image-9.png";

const data = [
  {
    id: crypto.randomUUID(),
    title: "Gradient Graphic T-shirt",
    price: 145,
    image: Image1,
    stock: 5,
    rating: 4,
  },
  {
    id: crypto.randomUUID(),
    title: "Polo with Tipping Details",
    price: 180,
    image: Image2,
    stock: 3,
    rating: 3,
  },
  {
    id: crypto.randomUUID(),
    title: "Black Striped T-shirt",
    price: 120,
    image: Image3,
    stock: 4,
    rating: 5,
  },
  {
    id: crypto.randomUUID(),
    title: "Classic White Shirt",
    price: 95,
    image: Image4,
    stock: 6,
    rating: 4,
  },
  {
    id: crypto.randomUUID(),
    title: "Denim Blue Jeans",
    price: 210,
    image: Image5,
    stock: 7,
    rating: 4,
  },
  {
    id: crypto.randomUUID(),
    title: "Casual Hoodie",
    price: 130,
    image: Image6,
    stock: 8,
    rating: 3,
  },
  {
    id: crypto.randomUUID(),
    title: "Summer Shorts",
    price: 85,
    image: Image7,
    stock: 9,
    rating: 4,
  },
  {
    id: crypto.randomUUID(),
    title: "Leather Jacket",
    price: 350,
    image: Image8,
    stock: 2,
    rating: 5,
  },
  {
    id: crypto.randomUUID(),
    title: "Striped Polo Shirt",
    price: 140,
    image: Image9,
    stock: 4,
    rating: 3,
  },
  {
    id: crypto.randomUUID(),
    title: "Basic Tank Top",
    price: 70,
    image: Image10,
    stock: 10,
    rating: 4,
  },
  {
    id: crypto.randomUUID(),
    title: "Running Sneakers",
    price: 180,
    image: Image11,
    stock: 5,
    rating: 5,
  },
  {
    id: crypto.randomUUID(),
    title: "Woolen Scarf",
    price: 60,
    image: Image12,
    stock: 12,
    rating: 3,
  },
];

function getAllProducts() {
  return data;
}

export { getAllProducts };
