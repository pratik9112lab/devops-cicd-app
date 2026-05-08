const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps CI/CD Kubernetes Project</title>

      <style>
        body {
          margin: 0;
          padding: 0;
          background: #0f172a;
          color: white;
          font-family: Arial, sans-serif;
        }

        .container {
          max-width: 1000px;
          margin: auto;
          padding: 40px;
        }

        h1 {
          color: #38bdf8;
          font-size: 42px;
          margin-bottom: 10px;
        }

        h2 {
          color: #f8fafc;
          margin-top: 40px;
        }

        p {
          line-height: 1.7;
          color: #cbd5e1;
        }

        .card {
          background: #1e293b;
          padding: 20px;
          margin-top: 20px;
          border-radius: 12px;
          border: 1px solid #334155;
        }

        ul {
          line-height: 1.8;
        }

        .badge {
          display: inline-block;
          background: #0ea5e9;
          color: white;
          padding: 8px 14px;
          border-radius: 30px;
          margin: 5px;
          font-size: 14px;
        }

        .footer {
          margin-top: 50px;
          color: #94a3b8;
          font-size: 14px;
        }

        .success {
          color: #22c55e;
          font-weight: bold;
        }
      </style>
    </head>

    <body>
      <div class="container">

        <h1>🚀 DevOps CI/CD Kubernetes Project</h1>

        <p>
          Complete end-to-end DevOps deployment pipeline using Docker,
          GitHub Actions, Self-Hosted Runner, and Kubernetes.
        </p>

        <div class="card">
          <h2>📌 Project Overview</h2>

          <p>
            This project demonstrates a production-style DevOps workflow
            where code changes pushed to GitHub automatically trigger
            CI/CD pipelines and deploy applications into Kubernetes.
          </p>
        </div>

        <div class="card">
          <h2>⚙️ Technologies Used</h2>

          <div class="badge">Node.js</div>
          <div class="badge">Express.js</div>
          <div class="badge">Docker</div>
          <div class="badge">GitHub Actions</div>
          <div class="badge">Self-Hosted Runner</div>
          <div class="badge">Kubernetes</div>
          <div class="badge">Minikube</div>
          <div class="badge">Ubuntu Server</div>
        </div>

        <div class="card">
          <h2>🔄 CI/CD Workflow</h2>

          <ul>
            <li>Developer pushes code to GitHub</li>
            <li>GitHub Actions workflow gets triggered</li>
            <li>Self-hosted runner executes pipeline on Ubuntu server</li>
            <li>Docker image gets built inside Minikube</li>
            <li>Kubernetes deployment updates automatically</li>
            <li>Application becomes available through Kubernetes Service</li>
          </ul>
        </div>

        <div class="card">
          <h2>☸️ Kubernetes Features</h2>

          <ul>
            <li>Deployment with multiple replicas</li>
            <li>Service-based networking</li>
            <li>Container orchestration</li>
            <li>Self-healing pods</li>
            <li>Rolling deployment support</li>
          </ul>
        </div>

        <div class="card">
          <h2>📦 Docker & Containerization</h2>

          <ul>
            <li>Application containerized using Docker</li>
            <li>Portable deployment architecture</li>
            <li>Consistent runtime environment</li>
            <li>Optimized deployment workflow</li>
          </ul>
        </div>

        <div class="card">
          <h2>✅ Deployment Status</h2>

          <p class="success">
            Application successfully deployed using Kubernetes CI/CD pipeline.
          </p>
        </div>

        <div class="footer">
          Built by Pratik Dubey • DevOps & Cloud Learning Project
        </div>

      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
