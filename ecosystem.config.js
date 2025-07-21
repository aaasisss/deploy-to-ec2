// pm2 start ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "frontend-preview",
      cwd: "./frontend",
      script: "npm",
      args: "run preview",
      watch: false,
    },
    {
      name: "backend-prod",
      cwd: "./backend",
      script: "npm",
      args: "run start",
      watch: false,
    },
  ],
};
