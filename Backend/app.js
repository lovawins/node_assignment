const express = require("express");
const app = express();
const port = process.env.PORT || 2000;
var cors = require("cors");

app.use(express.static('public'))
app.use(cors());
app.use(express.json());
app.use(require("./modules/endpoints"));

app.use(express.static('../Public'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
