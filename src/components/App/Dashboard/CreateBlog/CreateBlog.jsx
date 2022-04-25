import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import axios from "../../../services/http.service";

const CreateBlog = () => {
  // states
  const [data, setData] = useState({});
  const [category, setCategory] = useState("Offer");
  const [image, setImage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [url, setUrl] = useState("");
  console.log(data, category);

  // handlers

  // triggers when submits the form
  const handleCreateBlog = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const date = new Date();
    formData.append("image", image);
    const post = {
      title: data.title,
      desc: data.desc,
      date: date.toLocaleDateString(),
    };

    if (!image) {
      setIsError(true);
    } else {
      fetch(
        `https://api.imgbb.com/1/upload?key=120eb66f81a548efb0c10de7b88fca02`,
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          axios
            .post("/blog", {
              title: data.title,
              desc: data.desc,
              date: date.toLocaleDateString(),
              src: data.url,
            })
            .then((res) => console.log(res.data.insertedId));
        });
    }
  };

  // triggers when form input fields changes
  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  // handle on blur
  const handleBlur = (e) => {
    setIsError(false);
    setIsSuccess(false);
  };
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 0px 4px 0px #42a5f5",
          width: "100%",
          p: 1,
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleCreateBlog}
        >
          {/* title */}
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            label="Title"
            name="title"
            required
          />

          {/* description */}
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            margin="normal"
            label="Description"
            name="desc"
            required
            multiline
            rows={4}
          />

          {/* image */}
          <Input
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
            multiple
            type="file"
          />

          {/* category */}
          <FormControl>
            <FormLabel>Category</FormLabel>
            <RadioGroup
              onChange={(e) => setCategory(e.target.value)}
              defaultValue="Offer"
              name="category-radio-group"
            >
              <FormControlLabel
                value="Offer"
                control={<Radio />}
                label="Offer"
              />
              <FormControlLabel value="News" control={<Radio />} label="News" />
            </RadioGroup>
          </FormControl>

          <Button sx={{ mt: 2 }} variant="outlined" type="submit">
            Create
          </Button>
        </form>
        {isError && <Alert severity="warning">Please Choose an image</Alert>}
        {isSuccess && (
          <Alert severity="success">Blog created successfully.</Alert>
        )}
      </Box>
    </Box>
  );
};

export default CreateBlog;
