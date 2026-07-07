import type { AgentDetail } from './types'

const roles = [
  'Research',
  'Support',
  'Engineering',
  'Operations',
  'Sales',
  'Security',
  'Finance',
  'Data',
]

const capabilities = [
  'Summarisation',
  'Planning',
  'Tool use',
  'Code review',
  'Document drafting',
  'Data extraction',
  'Workflow automation',
  'Incident triage',
]

const tools = [
  'Browser',
  'Calendar',
  'CRM',
  'GitHub',
  'Knowledge base',
  'Slack',
  'Spreadsheet',
  'Ticketing',
]

export const agents: AgentDetail[] = Array.from({ length: 100 }, (_, index) => {
  const agentNumber = index + 1
  const paddedNumber = agentNumber.toString().padStart(3, '0')
  const role = roles[index % roles.length]
  const status = index % 9 === 0 ? 'offline' : index % 4 === 0 ? 'busy' : 'available'

  return {
    id: `agent-${paddedNumber}`,
    name: `${role} Agent ${paddedNumber}`,
    role,
    model: index % 3 === 0 ? 'gpt-5-mini' : 'gpt-5',
    status,
    shortDescription: `A ${role.toLowerCase()} assistant for focused team workflows.`,
    createdBy: ['Platform Team', 'Automation Guild', 'AI Enablement'][index % 3],
    version: `1.${index % 8}.${index % 5}`,
    capabilities: [
      capabilities[index % capabilities.length],
      capabilities[(index + 2) % capabilities.length],
      capabilities[(index + 5) % capabilities.length],
    ],
    tools: [
      tools[index % tools.length],
      tools[(index + 3) % tools.length],
      tools[(index + 6) % tools.length],
    ],
    memoryPolicy: index % 2 === 0 ? 'Project-scoped memory' : 'Session-only memory',
    averageRunTimeSeconds: 20 + (index % 12) * 7,
    successRate: 82 + (index % 15),
    lastRunAt: new Date(Date.UTC(2026, 6, 1, 9 + (index % 12), index % 60)).toISOString(),
    description: `${role} Agent ${paddedNumber} can collect context, decide which tools to use, and return a concise recommendation for the operator to review.`,
  }
})
