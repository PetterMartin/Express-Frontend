import { useState } from "react";

const ProductDetailsModal = ({ product, onClose, fetchProducts }) => {
    const [editedProduct, setEditedProduct] = useState({
      title: product.title,
      description: product.description,
    });
    const [isSaved, setIsSaved] = useState(false);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setEditedProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
      setIsSaved(false); // Reset the save confirmation
    };
  
    const handleSaveChanges = async () => {
      try {
        const response = await fetch(
          `https://express-hosting.onrender.com/api/products/${product._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editedProduct),
          }
        );
    
        if (!response.ok) {
          throw new Error("Failed to update product");
        }
    
        // Refresh the product list after updating
        await fetchProducts();
        setIsSaved(true); // Set the save confirmation
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-gray-900 p-8 rounded-lg border-2 border-gray-800">
          <h2 className="text-3xl font-bold text-white">
            <input
              type="text"
              name="title"
              value={editedProduct.title}
              onChange={handleInputChange}
              className="bg-gray-800 text-white px-2 py-1 rounded-lg"
            />
          </h2>
          <p className="text-gray-300 text-center">
            <textarea
              name="description"
              value={editedProduct.description}
              onChange={handleInputChange}
              className="bg-gray-800 text-white px-2 py-1 rounded-lg w-full"
            />
          </p>
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleSaveChanges}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
            >
              Save Changes
            </button>
            <button
              onClick={onClose}
              className="ml-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
            >
              Close
            </button>
          </div>
          {isSaved && (
            <p className="text-green-500 mt-4 text-center">Product has been successfully updated!</p>
          )}
        </div>
      </div>
    );
  };
  
  export default ProductDetailsModal;
