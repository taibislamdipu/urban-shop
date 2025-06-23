import Image1 from "../assets/img/image-1.png";
import Image2 from "../assets/img/image-2.png";
import Image3 from "../assets/img/image-3.png";

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
];

function getAllProducts() {
  return data;
}

export { getAllProducts };
