import { Navigate, Route, Routes } from 'react-router-dom'
import { AgentDetail } from './components/AgentDetail'
import { AgentList } from './components/AgentList'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/agents" replace />} />
      <Route path="/agents" element={<AgentList />} />
      <Route path="/agents/:id" element={<AgentDetail />} />
    </Routes>
  )
}

export default App
