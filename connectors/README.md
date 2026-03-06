# Connector Engine

Connectors emit normalized feed events into Kafka topics:

- `intel.raw.feed`
- `intel.normalized.stix`
- `intel.ioc.enriched`

Each connector should implement:

1. collection
2. normalization
3. deduplication hash generation
4. STIX object serialization
5. Kafka publish
