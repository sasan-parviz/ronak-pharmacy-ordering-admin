// import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
// import TopBarProgress from 'react-topbar-progress-indicator'
import {MasterLayout} from '../../_ronak/layout/MasterLayout'
// import {getCSSVariableValue} from '../../_ronak/assets/ts/_utils'
// import {WithChildren} from '../../_ronak/helpers'

// Pages
import {UsersPage} from '../pages/users/UsersPage'
import {ProductsPage} from '../pages/products/ProductsPage'
import {PharmaciesPage} from '../pages/pharmacies/PharmaciesPage'
import {DistributionsPage} from '../pages/distributions/DistributionsPage'

const PrivateRoutes = () => {
  //const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login */}
        <Route path='auth/*' element={<Navigate to='/users' />} />

        {/* Pages */}
        <Route path='users' element={<UsersPage />} />
        <Route path='products' element={<ProductsPage />} />
        <Route path='pharmacies' element={<PharmaciesPage />} />
        <Route path='distributions' element={<DistributionsPage />} />

        {/* Lazy Modules */}
        {/* <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        /> */}

        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

// const SuspensedView: FC<WithChildren> = ({children}) => {
//   const baseColor = getCSSVariableValue('--bs-primary')
//   TopBarProgress.config({
//     barColors: {
//       '0': baseColor,
//     },
//     barThickness: 1,
//     shadowBlur: 5,
//   })
//   return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
// }

export {PrivateRoutes}
