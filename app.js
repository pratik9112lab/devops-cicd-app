const express = require('express');
const { Client } = require('pg');

const app = express();

const client = new Client({
  host: 'db',            // IMPORTANT (service name from docker-compose)
  user: 'user1',
  password: 'welcome',
  database: 'mydb',
  port: 5432
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL ✅'))
  .catch(err => console.error('DB connection error:', err));

app.get('/', async (req, res) => {
  try {
    const result = await client.query('SELECT NOW()');
    res.send(`DB Time: ${result.rows[0].now}`);
  } catch (err) {
    res.send('Error connecting DB');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
