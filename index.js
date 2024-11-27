const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Random Image API");
});

// Random image route
app.get("/api/image/random", async (req, res) => {
  try {
    const response = await axios.get("https://picsum.photos/200/300", {
      responseType: "arraybuffer",
    });
    // Send the image as a response
    res.set("Content-Type", response.headers["content-type"]);
    res.send(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching image", error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
