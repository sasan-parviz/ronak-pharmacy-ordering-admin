/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {Login} from './components/Login'
import {toAbsoluteUrl} from '../../../_ronak/helpers'

const AuthLayout = () => {
  useEffect(() => {
    document.body.style.backgroundImage = 'none'
    return () => {}
  }, [])

  return (
    <div
      className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
      style={{
        backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/sketchy-1/14.png')})`,
      }}
    >
      {/* begin::Content */}
      <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
        {/* begin::Logo */}
        <a href='#' className='mb-12'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/assets/images/ronak-logo.png')}
            className='theme-dark-show h-[50px]'
          />
          <img
            alt='Logo'
            src={toAbsoluteUrl('/assets/images/ronak-logo.png')}
            className='theme-light-show h-[50px]'
          ></img>
        </a>
        {/* end::Logo */}
        {/* begin::Wrapper */}
        <div className='w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto'>
          <Outlet />
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
      {/* begin::Footer */}
      <div className='d-flex flex-column flex-center flex-column-auto p-10'>
        <span className='mb-2'>طراحی شده توسط تیم وب ایت</span>
        <div className='d-flex align-items-center fw-semibold fs-6'>
          <a href='#' className='text-muted text-hover-primary px-2'>
            درباره Webit
          </a>
          <a href='#' className='text-muted text-hover-primary px-2'>
            تماس با Webit
          </a>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
