import Fastify from 'fastify';

const app = Fastify({ logger: true });
const serviceName = 'intel-automation-engine';
const port = Number(process.env.PORT || 8080);

app.get('/health', async () => ({
  status: 'ok',
  service: serviceName,
  ts: new Date().toISOString()
}));

app.get('/capabilities', async () => ({
  service: serviceName,
  capabilities: ['stix', 'streaming', 'scalable', 'observability-ready']
}));

app.listen({ port, host: '0.0.0.0' }).catch((err) => {
  app.log.error(err);
  process.exit(1);
});
