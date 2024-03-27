import AddProductForm from "../components/addProduct/addProduct";
import Navbar from "../components/navbar/navbar";

const NewProduct = () => {
  return (
    <div>
      <Navbar />
      <AddProductForm />
      <h1>Contact</h1>
      <p>This is the Contact page.</p>
      <div
        style={{ backgroundColor: "Red", width: "500px", height: "600px" }}
      ></div>
    </div>
  );
};

export default NewProduct;
