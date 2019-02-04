const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const server = app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});