const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const morgan = require('morgan');

// serves our static files
app.use(express.static('client/dist'));


app.use(morgan);

// parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());




app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})