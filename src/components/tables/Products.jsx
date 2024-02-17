import { useState, useEffect } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa6";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://express-hosting.onrender.com/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="mt-8">
      <h1 className="text-center">Product List</h1>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            className="py-4 ps-16 pe-4 border rounded-lg border-gray-600 mb-1 text-sm font-bold"
          >
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div>
                  title :{" "}
                  <span className="text-green-400">&quot;{product.title}&quot;</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center bg-gray-600 rounded-md border border-grray-600 py-1 px-2 cursor-pointer hover:bg-gray-500">
                  <BiSolidPencil className="text-gray-100" />
                </div>
                <div className="flex items-center bg-gray-600 rounded-md border border-grray-600 py-1 px-2 cursor-pointer hover:bg-gray-500">
                  <FaTrash className="text-gray-100" />
                </div>
              </div>
            </div>
            <div>
              description :{" "}
              <span className="text-green-400">&quot;{product.description}&quot;</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
