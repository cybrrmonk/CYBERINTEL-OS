# CYBERINTEL OS

CYBERINTEL OS is an enterprise-grade cyber threat intelligence operating system designed for SOCs, CERTs, and government agencies. It delivers high-throughput ingestion, STIX-native normalization, graph intelligence, AI-assisted analytics, and real-time streaming.

## Platform Goals

- Ingest and normalize massive multi-source threat intelligence data.
- Build and query a cyber threat knowledge graph with STIX 2.1 semantics.
- Support actor, campaign, malware, vulnerability, and IOC intelligence lifecycles.
- Provide real-time threat streaming, automated enrichment, and detection engineering.
- Operate in containerized and Kubernetes environments with full observability.

## Monorepo Structure

- `services/`: TypeScript microservices (Fastify + Apollo/GraphQL where needed).
- `workers/`: Python Celery workers for extraction, enrichment, and automation.
- `connectors/`: Feed integrations and connector framework.
- `schemas/stix/`: STIX 2.1 extensions and validation definitions.
- `frontend-ui/`: Next.js frontend and analyst workspace modules.
- `infra/docker/`: Local Docker Compose stack.
- `infra/k8s/helm/`: Helm chart for Kubernetes deployment.
- `observability/`: Prometheus, Grafana, Loki, OpenTelemetry configuration.
- `docs/`: Architecture, data model, operations, and scaling guidance.

## Core Services

- api-gateway
- identity-service
- intel-core
- intel-graph-engine
- intel-ingestion-engine
- intel-automation-engine
- intel-ai-engine
- intel-analytics-engine
- intel-stream-engine
- intel-search-engine
- intel-notification-service
- connector-engine
- frontend-ui

## Quick Start (Local)

```bash
cp .env.example .env
cd infra/docker
docker compose up -d --build
```

Then access:

- API Gateway: `http://localhost:8080`
- GraphQL: `http://localhost:8080/graphql`
- Frontend: `http://localhost:3000`
- Grafana: `http://localhost:3001`
- Prometheus: `http://localhost:9090`

## Scale Targets

Designed target envelope:

- 100M indicators
- 50M relationships
- 10k feeds
- real-time ingestion pipeline
- sub-second graph query for indexed pivots

## Security & Governance

- OIDC/OAuth2/SAML-ready identity integration
- RBAC roles: admin, analyst, researcher, viewer, automation, connector
- End-to-end audit logging for data and action traceability
- STIX/TAXII exchange and sharing support

## License

Internal/Proprietary template. Replace with organizational policy.
