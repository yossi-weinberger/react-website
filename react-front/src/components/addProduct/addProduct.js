import { Button, CircularProgress, TextField } from "@mui/material";
import "../addProduct/addProduct.css";
import { useLoadingContext } from "../../contexts/loadingContext";
import { createNewProduct } from "../../utils/apiCalls";
export default function AddProductForm() {
  const { loading, setLoading } = useLoadingContext();
  const createProduct = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData(e.target);
      const body = Object.fromEntries(formData);
      await createNewProduct(body);
      e.target.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form">
      <form className="form" onSubmit={createProduct}>
        <h1>Add new product</h1>
        <input
          className="form_input"
          placeholder="title"
          label="title"
          name="title"
        />
        <input
          className="form_input"
          placeholder="price"
          label="price"
          name="price"
        />
        <input
          className="form_input"
          placeholder="img url"
          label="img"
          name="img"
        />
        <textarea
          className="form_input"
          placeholder="Description..."
          maxLength={200}
          name="desc"
        />

        {loading ? (
          <CircularProgress />
        ) : (
          <Button
            className="form_input submit"
            type="submit"
            variant="contained"
          >
            Add Product
          </Button>
        )}
      </form>
    </div>
  );
}
