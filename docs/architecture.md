# CYBERINTEL OS Architecture

## Distributed Service Topology

1. **api-gateway**: single entrypoint for REST/GraphQL, authn/authz checks, request shaping.
2. **identity-service**: OIDC/OAuth2/SAML integration, MFA policy, RBAC token claims.
3. **intel-core**: STIX object lifecycle, case management, collaboration primitives.
4. **intel-graph-engine**: Neo4j-backed knowledge graph and graph analytics APIs.
5. **intel-ingestion-engine**: source ingestion, normalization, validation, dedup orchestration.
6. **intel-automation-engine**: workflow rules and playbooks for enrichment/alerting actions.
7. **intel-ai-engine**: LLM/NLP extraction, summarization, ATT&CK mapping, attribution signals.
8. **intel-analytics-engine**: campaign trend analytics, actor scoring, risk indices.
9. **intel-stream-engine**: Kafka event contracts, WebSocket fan-out, live intelligence stream.
10. **intel-search-engine**: OpenSearch indexing and low-latency IOC/entity retrieval.
11. **intel-notification-service**: email/webhook/slack notification policy execution.
12. **connector-engine**: connector lifecycle management and health supervision.
13. **frontend-ui**: Next.js analyst workspace, global attack map, investigation timeline.

## Data Flow

`Collect -> Normalize -> Extract IOC -> STIX Convert -> Validate -> Dedup -> Kafka -> Worker -> Graph+Search -> Stream`

### Kafka Topics

- `intel.raw.feed`
- `intel.normalized.stix`
- `intel.ioc.enriched`
- `intel.analytics.events`
- `intel.alerts`

## Threat Knowledge Graph

Neo4j stores STIX entities and typed relationships. Core query layers:

- Cypher query endpoint for advanced pivots.
- GraphQL facade for analyst tooling.
- Graph algorithms pipeline for community detection, pagerank, path analysis, centrality, malware clustering, and attribution scoring.

## Scalability Strategy

- Stateless Node.js APIs behind Kubernetes HPA.
- Kafka partitioned by source/tenant and object type.
- Celery workers horizontally scaled by queue depth.
- Neo4j clustering with read replicas.
- OpenSearch sharding + lifecycle management.
- MinIO distributed object storage for large artifacts.

## Security Model

- OIDC/OAuth2/SAML federation.
- Fine-grained RBAC roles: admin, analyst, researcher, viewer, automation, connector.
- Audit trail for API access, intel modification, user actions, and connector operations.

## Observability

- OpenTelemetry traces across all services.
- Prometheus metrics for API latency, feed throughput, queue backlog, connector health.
- Loki for structured logs and investigation replay.
- Grafana dashboards for ingestion SLOs and graph-query p99 latency.
