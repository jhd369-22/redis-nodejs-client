const express = require('express');
const app = express();


const redisClient = require('./redis-client');

let time = 0;

app.get('/store/:key', async (req, res) => {
  const { key } = req.params;
  const value = req.query;
  await redisClient.setAsync(key, time, JSON.stringify(value));
  time += 1;
  return res.send('Success');
});


app.get('/admin', async (req, res) => {
  const rawData = await redisClient.getAsync("order", 0, -1);

  let data = "";
  for (let i = 0; i < rawData.length; i++) {
    data += (rawData[i] + "<br/>");
  }
  
  return res.send(data);
});


app.get('/', (req, res) => {
  return res.send('Welcome, you can start placing your order.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
