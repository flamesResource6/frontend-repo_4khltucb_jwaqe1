import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import Server from './pages/Server'
import Guide from './pages/Guide'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/server" element={<Server />} />
      <Route path="/guide" element={<Guide />} />
    </Routes>
  )
}

export default App
