import { Link } from "react-router-dom";

export function AgentList() {
  return (
    <main>
      <h1>Agents</h1>

      <p>
        Fetch the available agents from <code>/api/agents</code> and render them
        here.
      </p>

      <ul>
        <li>
          <Link to="/agents/agent-001">Example agent</Link>
          <p>Replace this placeholder with API data.</p>
        </li>
      </ul>
    </main>
  );
}
