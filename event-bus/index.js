const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  console.log('Event Received Type:', event.type);
  console.log('Event Received Data:', event.data);

  axios.post('http://localhost:4000/events', event)
    .catch(
      (err) => {
        console.log(err.message);
      }
    ) // Posts
  axios.post('http://localhost:4001/events', event)
    .catch(
      (err) => {
        console.log(err.message);
      }
    ) // Comments
  axios.post('http://localhost:4002/events', event)
    .catch(
      (err) => {
        console.log(err.message);
      }
    ) // Query
  axios.post('http://localhost:4003/events', event)
    .catch(
      (err) => {
        console.log(err.message);
      }
    ) // Moderation
  res.send({ status: 'OK' })
})

app.get('/events', (req, res) => {
  res.send(events);
})
app.listen(4005, () => {
  console.log('event-bus listening on 4005')
})
