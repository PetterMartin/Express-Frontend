import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

function CreateProductForm({ onProductCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://express-hosting.onrender.com/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      setTitle("");
      setDescription("");

      // Call the onProductCreated function passed as a prop
      onProductCreated();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-green-400 text-center mb-4 border-b-2 border-green-500 pb-2">Create Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ backgroundColor: "transparent" }}
            className="border ms-2 border-gray-600 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ backgroundColor: "transparent" }}
            className="border ms-2 border-gray-600 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-green-800 border-2 border-green-400 rounded-md text-white font-bold px-4 mt-10 hover:bg-green-900 hover:border-green-600 flex items-center justify-center"
        >
          <FaPlusCircle className="mr-2" />
          CREATE PRODUCT
        </button>
      </form>
    </div>
  );
}

export default CreateProductForm;
