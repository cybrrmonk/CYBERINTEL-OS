// Community detection (requires GDS)
CALL gds.louvain.stream('intelGraph')
YIELD nodeId, communityId
RETURN gds.util.asNode(nodeId).id AS entity_id, communityId
ORDER BY communityId;

// PageRank for influence scoring
CALL gds.pageRank.stream('intelGraph')
YIELD nodeId, score
RETURN gds.util.asNode(nodeId).id AS entity_id, score
ORDER BY score DESC
LIMIT 100;

// Shortest path analysis
MATCH (a:ThreatActor {name: $actor}), (b:Indicator {value: $ioc})
CALL gds.shortestPath.dijkstra.stream('intelGraph', {
  sourceNode: id(a),
  targetNode: id(b)
})
YIELD totalCost, nodeIds
RETURN totalCost, [nodeId IN nodeIds | gds.util.asNode(nodeId).id] AS path;
