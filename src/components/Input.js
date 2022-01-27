import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MultilineTextFields() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, ml: 0, width: "75ch", maxWidth: "90%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Title"
          defaultValue="Hello World"
        />
      </div>
      <div>
        <TextField
          id="outlined-error"
          label="Description"
          defaultValue="Hello World"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-multiline-flexible note"
          label="Note"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Box>
  );
}
