# React Agents Tech Test

This is a small React tech test designed to take roughly one hour.

It is split into two parts:

1. Fetch and display data.
2. Make the UI look and feel nice.

The app already includes React, TypeScript, Vite, React Router, Tailwind CSS, and
MSW. The mock API is available in development mode.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. The default route redirects to `/agents`.

## Exercise 1: Fetch And Display Agents

Spend around 20-30 minutes fetching data from the API and rendering it on the
page.

The `/agents` page should fetch a list of agents and display them in a list.
Use whatever state management approach you think is appropriate.

Bonus: when a user clicks an agent, navigate to `/agents/:id`, fetch the
individual agent, and show the extra information.

Pagination is supported by the API. It is optional.

## Exercise 2: Improve The UI

Spend around 20-30 minutes improving the interface. Ignore the data-fetching
part if needed and focus on making the existing pages look and feel good.

Tailwind CSS is installed and configured, but you can style things however you
prefer.

## API

### List Agents

```http
GET /api/agents
GET /api/agents?page=1&pageSize=20
```

If `pageSize` is not provided, the API returns all agents.

Response:

```ts
type AgentsResponse = {
  items: AgentSummary[]
  page: number
  pageSize: number
  total: number
  totalPages: number
}

type AgentSummary = {
  id: string
  name: string
  role: string
  model: string
  status: 'available' | 'busy' | 'offline'
  shortDescription: string
}
```

### Get Agent

```http
GET /api/agents/:id
```

Response:

```ts
type AgentDetail = AgentSummary & {
  createdBy: string
  version: string
  capabilities: string[]
  tools: string[]
  memoryPolicy: string
  averageRunTimeSeconds: number
  successRate: number
  lastRunAt: string
  description: string
}
```

## Starting Points

- `src/components/AgentList.tsx`
- `src/components/AgentDetail.tsx`
- `src/mocks/handlers.ts`
- `src/mocks/agents.ts`
