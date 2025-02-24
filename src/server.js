const express = require("express");

const app = express();

app.get("/message", (require, response) => {
    response.send("Hello world, good mooring")
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server ir running on Port ${PORT}`));