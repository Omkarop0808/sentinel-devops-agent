const express = require('express');
const app = express();
const port = 3002;

let healthStatus = 'healthy';

app.get('/health', (req, res) => {
  if (healthStatus === 'slow') {
    setTimeout(() => res.json({ status: 'slow', timestamp: new Date() }), 2000);
  } else if (healthStatus === 'degraded') {
    res.status(429).json({ status: 'degraded', error: 'Payment gateway degraded', message: 'High latency detected' });
  } else if (healthStatus === 'down') {
    res.status(500).json({ status: 'down', error: 'Payment gateway timeout' });
  } else {
    res.json({
      status: 'ok',
      service: 'payment-service',
      timestamp: Date.now(),
      cpu: Math.random() * 100,
      memory: Math.random() * 500
    });
  }
});

app.post('/simulate/:mode', (req, res) => {
  healthStatus = req.params.mode;
  console.log(`[Payment] Switched to mode: ${healthStatus}`);
  res.json({ message: `Payment Service set to: ${healthStatus}` });
});

app.listen(port, () => {
  console.log(`Payment Service listening on port ${port}`);
});
