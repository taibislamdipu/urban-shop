import { useContext } from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { ProductContext } from "../context";

export default function Header() {
  const { searchTerm, setSearchTerm } = useContext(ProductContext);

  return (
    <header className="border-b border-gray-200 py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          Urban Shop
        </a>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-500 transition-colors">
            Shop
          </a>
          <a href="#" className="hover:text-gray-500 transition-colors">
            On Sale
          </a>
          <a href="#" className="hover:text-gray-500 transition-colors">
            New Arrivals
          </a>
          <a href="#" className="hover:text-gray-500 transition-colors">
            Brands
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block w-64 border rounded-full border-gray-300">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for products..."
              className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
            />
            <span className="absolute right-3 top-2">
              <IoSearchOutline />
            </span>
          </div>

          <a href="#" className="hover:text-gray-500 transition-colors">
            <IoCartOutline size={30} />
          </a>

          <a href="#" className="hover:text-gray-500 transition-colors">
            <FaRegUser size={23} />
          </a>
        </div>
      </div>
    </header>
  );
}
