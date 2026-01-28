import { createRoot } from 'react-dom/client'
import './index.css'
import { MainPage } from './ui/MainPage'
// import { Header } from './components/Header'
// import { Sidebarmenu } from './components/Sidebarmenu'
// import { TrackList } from './components/TracksList'
// import { PageTitle } from './components/PageTitle'
// import { Footer } from './components/Footer'
// import { TrackDetail } from './components/TrackDetail'

createRoot(document.getElementById('root')!).render(
  <MainPage />
)

