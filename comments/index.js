const axios = require('axios');
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
app.post('/posts/:id/comments', async (req, res) => {
  const { id: postId } = req.params;
  const { content } = req.body;
  const commentId = randomBytes(4).toString('hex');

  comments[postId] = comments[postId] || [];
  comments[postId].push({
    id: commentId, content, postId, status: 'pending'
  });

  await axios.post('http://localhost:4005/events', {
    type: 'CommentCreated',
    data: {
      id: commentId,
      content,
      postId,
      status: 'pending'
    }
  })

  return res.status(201).send(comments)
})

app.post('/events', async (req, res) => {
  const { data, type } = req.body;
  if (type === 'CommentModerated') {
    const { postId, id, status, content } = data;
    const comment = comments[postId].find(comment => comment.id === id);
    comment.status = status;
    await axios.post('http://localhost:4005/events', {
      type: 'CommentUpdated',
      data: {
        id,
        status,
        postId,
        content
      }
    })
  }
  return res.status(201).send(comments)
})





app.listen(4001, () => {
  console.log('comment is listening on port 4001');
})