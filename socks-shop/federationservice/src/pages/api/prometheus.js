const prometheus = require('prom-client');

// Define the metric for counting requests
const httpRequestCount = new prometheus.Counter({
    name: 'http_request_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status'],
  });
  
  // Register the metric with the Prometheus registry
  prometheus.register.registerMetric(httpRequestCount);

const express = require('express');
const app = express();

app.get('/metrics', (req, res) => {
  res.set('Content-Type', prometheus.register.contentType);
  res.end(prometheus.register.metrics());
});

// Export the app for Next.js to handle the endpoint
module.exports = app;

  
