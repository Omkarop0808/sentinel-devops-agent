const express = require('express');
const app = express();
const port = 3003;

let healthStatus = 'healthy';

app.get('/health', (req, res) => {
  if (healthStatus === 'slow') {
    setTimeout(() => res.json({ status: 'slow', timestamp: new Date() }), 2000);
  } else if (healthStatus === 'degraded') {
    res.status(429).json({ status: 'degraded', error: 'SMTP server degraded', message: 'Email queue backlog detected' });
  } else if (healthStatus === 'down') {
    res.status(500).json({ status: 'down', error: 'SMTP server unreachable' });
  } else {
    res.json({
      status: 'ok',
      service: 'notification-service',
      timestamp: Date.now(),
      cpu: Math.random() * 100,
      memory: Math.random() * 500
    });
  }
});

app.post('/simulate/:mode', (req, res) => {
  healthStatus = req.params.mode;
  console.log(`[Notification] Switched to mode: ${healthStatus}`);
  res.json({ message: `Notification Service set to: ${healthStatus}` });
});

app.listen(port, () => {
  console.log(`Notification Service listening on port ${port}`);
});
