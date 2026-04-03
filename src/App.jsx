import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import PricingPage from './pages/PricingPage'
import FeaturesPage from './pages/FeaturesPage'
import AdvisorPage from './pages/AdvisorPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="platform" element={<PlatformPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="advisor" element={<AdvisorPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
