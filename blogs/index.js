const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto')
const cors = require('cors');
const axios = require('axios');
const posts = {};
const app = express();

app.use(bodyParser.json());
app.use(cors())

app.get('/posts', (req, res) => {
  res.send(posts).status(200);
})
app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  posts[id] = { id, title };
  console.log('posts', posts);
  await axios.post('http://localhost:4005/events', {
    type: 'PostCreated',
    data: {
      id,
      title
    }
  })

  res.status(201).send(posts[id]);
})



app.listen(4000, () => {
  console.log('blog is listening on port 4000');
})