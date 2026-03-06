export default function HomePage() {
  const modules = [
    'Dashboard',
    'Threat Investigation Workspace',
    'Threat Reports',
    'Global Attack Map',
    'Detection Engineering',
    'Automation Workflows'
  ];

  return (
    <main style={{ padding: 24, fontFamily: 'Inter, system-ui' }}>
      <h1>CYBERINTEL OS</h1>
      <p>Enterprise Threat Intelligence Operating System</p>
      <ul>
        {modules.map((module) => (
          <li key={module}>{module}</li>
        ))}
      </ul>
    </main>
  );
}
