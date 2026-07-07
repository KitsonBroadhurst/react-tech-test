import { Link, useParams } from "react-router-dom";

export function AgentDetail() {
  const { id } = useParams();
  return (
    <main>
      <Link to="/agents">Back to agents</Link>

      <h1>Agent detail</h1>

      <p>
        Fetch the selected agent from <code>/api/agents/{id}</code> and render
        the response here.
      </p>

      <section>
        <h2>{id ?? "Selected agent"}</h2>
        <p>Replace this placeholder with detailed API data.</p>
      </section>
    </main>
  );
}
