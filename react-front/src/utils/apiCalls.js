import axios from "axios";


export const getAllSpeakers = async () => {
  try {
    const response = await axios.get("http://localhost:3001/products", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYmM0YTBkYzcwMTA3N2Y2NTAxNGYiLCJpYXQiOjE3MTA5MjcwOTB9.IZ4yEMeOqbHD3J8_XxGn6afXeU1XLyFqM8KVg5vbITE",
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export async function createNewProduct(body) {
  try {
    const response = await axios.post("http://localhost:3001/products", body, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYmM0YTBkYzcwMTA3N2Y2NTAxNGYiLCJpYXQiOjE3MTA5MjcwOTB9.IZ4yEMeOqbHD3J8_XxGn6afXeU1XLyFqM8KVg5vbITE",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
