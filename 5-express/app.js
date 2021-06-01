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

// for testing we ideally OUTSOURCE the server startip (=listen) from the app file
// e.g. to a file: bin/www
// this way we can test all routes of our app without actually launching the API !

// app.listen(port, () => {
//   console.log('Example app listening on port port!');
// });


module.exports = app 
