const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors');

const app = express();
const comments = {}
app.use(bodyParser.json());
app.use(cors());

app.get('/comments', (req, res) => {
  return res.status(201).send(comments);
})
//return all comment of an posts
app.get('/posts/:id/comments', (req, res) => {
  const { id: postId } = req.params;
  return res.status(201).send(comments[postId]);
})
app.post('/posts/:id/comments', (req, res) => {
  const { id: postId } = req.params;
  const { content } = req.body;
  const commentId = randomBytes(4).toString('hex');

  comments[postId] = comments[postId] || [];
  comments[postId].push({
    commentId, content, postId
  });
  return res.status(201).send(comments)
})




app.listen(4001, () => {
  console.log('comment is listening on port 4001');
})