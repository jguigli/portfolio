import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'leaflet/dist/leaflet.css';

import AppRouter from './routes/Router'
import { LanguageProvider } from './contexts/LanguageContext'
import { TabProvider } from './contexts/TabContext'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <TabProvider>
        <AppRouter />
      </TabProvider>
    </LanguageProvider>
  </StrictMode>,
)
