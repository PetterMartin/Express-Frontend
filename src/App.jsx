import { useState } from "react";
import CreateUserForm from "./components/form/CreateUserForm";
import CreateProductForm from "./components/form/CreateProductForm";
import UsersList from "./components/tables/Users";
import ProductList from "./components/tables/Products";

export default function App() {
  const [userCreated, setUserCreated] = useState(false);
  const [productCreated, setProductCreated] = useState(false);

  const handleUserCreated = () => {
    setUserCreated(true);
  };

  const handleProductCreated = () => {
    setProductCreated(true);
  };
  

  return (
    <>
      <div className="w-full bg-emerald-300 text-center text-indigo-900 text-2xl font-semibold py-6 mb-4">
        Express Frontend
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="mt-12">
          <div className="flex justify-between">
            <CreateUserForm onUserCreated={handleUserCreated} />
            <CreateProductForm onProductCreated={handleProductCreated} />
          </div>
          <div className="flex gap-4">
            <UsersList key={userCreated.toString()} />
            <ProductList key={productCreated.toString()}/>
          </div>
        </div>
      </div>
    </>
  );
}
