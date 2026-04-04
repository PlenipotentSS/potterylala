import { Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import WorkCreations from './pages/WorkCreations'
import MyStory from './pages/MyStory'

export default function App() {
  return (
    <div className="app-root">
      <div className="under-construction">
        Under Construction — check back soon.
      </div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkCreations />} />
          <Route path="/my-story" element={<MyStory />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
