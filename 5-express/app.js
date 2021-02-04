const express = require('express');
const app = express();

app.use( express.json() ) // parse incoming bodies to req.body

// app.js
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.post('/', (req, res) => {
  res.json(req.body)
})

// bin/www
// app.listen(port, () => {
//   console.log('Example app listening on port port!');
// });


module.exports = app 
