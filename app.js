const express = require('express');
const { Client } = require('pg');

const app = express();

const client = new Client({
  host: 'db',
  user: 'user1',
  password: 'welcome',
  database: 'mydb',
  port: 5432
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL ✅');
  } catch (err) {
    console.log('DB not ready, retrying in 5s...');
    setTimeout(connectDB, 5000);
  }
};

connectDB();

app.get('/', async (req, res) => {
  try {
    const result = await client.query('SELECT NOW()');
    res.send(`DB Time: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.send('DB ERROR');
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
