const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 CI/CD Pipeline Working!</h1>
    <p>Docker + GitHub Actions + Self Hosted Runner</p>
    <p>Deployment successful ✅</p>
  `);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
