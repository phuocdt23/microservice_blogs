const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto')
const posts = {};
const app = express();

app.use(bodyParser.json());

app.get('/posts', (req, res) => {

})
app.post('/posts', (req, res) => {

})



app.listen(4000, () => {
  console.log('blog is listening on port 4000');
})