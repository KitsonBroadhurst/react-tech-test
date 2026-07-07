import { http, HttpResponse } from 'msw'
import { agents } from './agents'
import type { AgentSummary, AgentsResponse } from './types'

const toSummary = (agent: (typeof agents)[number]): AgentSummary => ({
  id: agent.id,
  name: agent.name,
  role: agent.role,
  model: agent.model,
  status: agent.status,
  shortDescription: agent.shortDescription,
})

export const handlers = [
  http.get('/api/agents', ({ request }) => {
    const url = new URL(request.url)
    const page = Number(url.searchParams.get('page') ?? '1')
    const pageSizeParam = url.searchParams.get('pageSize')
    const pageSize = pageSizeParam === null ? agents.length : Number(pageSizeParam)
    const safePage = Number.isFinite(page) && page > 0 ? page : 1
    const safePageSize = Number.isFinite(pageSize) && pageSize > 0 ? pageSize : agents.length
    const start = (safePage - 1) * safePageSize
    const items = agents.slice(start, start + safePageSize).map(toSummary)

    return HttpResponse.json<AgentsResponse>({
      items,
      page: safePage,
      pageSize: safePageSize,
      total: agents.length,
      totalPages: Math.ceil(agents.length / safePageSize),
    })
  }),

  http.get('/api/agents/:id', ({ params }) => {
    const agent = agents.find((item) => item.id === params.id)

    if (!agent) {
      return HttpResponse.json({ message: 'Agent not found' }, { status: 404 })
    }

    return HttpResponse.json(agent)
  }),
]
