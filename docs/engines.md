# Intelligence Engines

## IOC Extraction Engine

- Inputs: PDFs, DOCX, blogs, tweets, advisories, dark web posts.
- Methods: regex extraction, NLP entity extraction, LLM-assisted contextual extraction.
- Outputs: STIX indicators + observed-data and extraction confidence scores.

## Malware Intelligence Engine

- Integrations: MalwareBazaar, VirusTotal, HybridAnalysis, AnyRun.
- Functions: family classification, capability extraction, infrastructure linkage.
- Outputs: malware clusters, YARA starter rules, lineage graph edges.

## Dark Web Intelligence Engine

- Coverage: TOR forums, leak sites, ransomware blogs, marketplaces.
- Controls: keyword watchlists, brand watchlists, credential leak detection.
- Outputs: STIX reports, indicators, campaigns, and sightings.

## Attack Surface Monitoring Engine

- Integrations: Shodan, Censys, ZoomEye, SecurityTrails.
- Functions: domain/subdomain discovery, cert monitoring, exposed service detection.
- Outputs: infrastructure objects, vulnerability correlations, risk score updates.

## Vulnerability Intelligence Engine

- Sources: CVE, CISA KEV, ExploitDB, vendor advisories, GitHub exploits.
- Functions: exploitability scoring, weaponization status, campaign linkage.
- Outputs: vulnerability intelligence with actor/campaign mapping.

## Detection Engineering Platform

- Rule formats: Sigma, YARA, Suricata, Snort, KQL, Elastic.
- Functions: auto-rule generation from STIX+ATT&CK mappings.
- Outputs: coverage analytics per actor, malware family, campaign, technique.
