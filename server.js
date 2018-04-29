// require().dotenv.config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
