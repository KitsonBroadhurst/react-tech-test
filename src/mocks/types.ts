export type AgentSummary = {
  id: string
  name: string
  role: string
  model: string
  status: 'available' | 'busy' | 'offline'
  shortDescription: string
}

export type AgentDetail = AgentSummary & {
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

export type AgentsResponse = {
  items: AgentSummary[]
  page: number
  pageSize: number
  total: number
  totalPages: number
}
