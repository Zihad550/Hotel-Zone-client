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
import React, { useEffect, useState } from "react";
import {
  default as axios,
  default as axiosInstance,
} from "services/http.service";

const CreateBlog = ({ setDashboardPageTitle }) => {
  // states
  const [data, setData] = useState({});
  const [category, setCategory] = useState("Offer");
  const [image, setImage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setDashboardPageTitle("Create Blog");
  }, []);

  // handle create new blog
  const handleCreateBlog = (e) => {
    e.preventDefault();
    if (isSuccess || isError) resetMessage();

    const formData = new FormData();
    const date = new Date();
    formData.append("image", image);
    const post = {
      title: data.title,
      desc: data.desc,
      date: date.toLocaleDateString(),
      category,
      deletable: true,
    };

    if (!image) {
      setIsError(true);
    } else {
      axiosInstance
        .post(
          "https://api.imgbb.com/1/upload?key=120eb66f81a548efb0c10de7b88fca02",
          formData
        )
        .then(({ data }) => {
          axios
            .post("/blog", {
              ...post,
              src: data.data.url,
            })
            .then((res) => {
              if (res.data.insertedId) setIsSuccess(true);
              setData("");
              e.target.reset();
            });
        });
    }
  };

  // triggers when form input fields changes
  const handleBlur = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    resetMessage();
  };

  // reset form values
  const resetMessage = () => {
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
          <TextField onBlur={handleBlur} label="Title" name="title" required />

          {/* description */}
          <TextField
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
          <FormControl sx={{ mt: 1 }}>
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
