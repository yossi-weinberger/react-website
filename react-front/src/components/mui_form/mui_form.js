import "./mui_form.css";
import { Button, TextField } from "@mui/material";

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {};
  formData.forEach((v, k) => {
    data[k] = v;
  });
  console.log(data);
}

export function RegForm() {
  return (
    <div className="column form-container">
      <form className="column form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <TextField name="name" label="Name" />
        <TextField
          name="dob"
          type="text"
          label="Date of birth"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
        <TextField name="email" type="email" label="Email" />
        <TextField name="address" type="text" label="Address" />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
