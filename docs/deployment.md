# Deployment Guide

## Docker Compose

Run the baseline platform stack:

```bash
cd infra/docker
docker compose up -d --build
```

Includes core services, workers, Redis, Kafka, Neo4j, OpenSearch, MinIO, and observability components.

## Kubernetes (Helm)

```bash
helm upgrade --install cyberintel-os infra/k8s/helm/cyberintel-os -n cyberintel --create-namespace
```

### Helm Features

- service deployment templates
- horizontal autoscaling settings
- configurable image repositories/tags
- secret injection support
- service account and pod annotations hooks

## Performance Recommendations

- Kafka: tune partitions and retention by feed profile.
- Neo4j: separate read/write workloads and enable page cache sizing.
- OpenSearch: hot-warm index lifecycle for IOC and report indices.
- Workers: autoscale with queue depth and execution latency thresholds.
