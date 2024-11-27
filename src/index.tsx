import {createRoot} from 'react-dom/client'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'

// css
import './_ronak/assets/fonticon/fonticon.css'
import './_ronak/assets/keenicons/duotone/style.css'
import './_ronak/assets/keenicons/outline/style.css'
import './_ronak/assets/keenicons/solid/style.css'

import './_ronak/assets/css/style.rtl.css'
import './_ronak/assets/sass/style.react.scss'
import './global.css'

// App
import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'

setupAxios(axios)
Chart.register(...registerables)

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </QueryClientProvider>
  )
}
