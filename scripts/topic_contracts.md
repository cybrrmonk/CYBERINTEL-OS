# Kafka Topic Contracts

## intel.raw.feed
- key: source_id
- value: raw payload + metadata

## intel.normalized.stix
- key: stix_object_id
- value: STIX object JSON + extension fields

## intel.ioc.enriched
- key: indicator value
- value: enrichment profile (reputation, geo, sightings)

## intel.analytics.events
- key: tenant_id
- value: computed analytics (risk, trends, clusters)

## intel.alerts
- key: alert_id
- value: routed alert with workflow context
