/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {useFormik} from 'formik'
import {useAuth} from '../core/Auth'
import {login} from '../core/_requests'

const loginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/09[0-9]{9}/, {
      message: 'شماره تلفن اشتباه است',
    })
    .required('تلفن اجباری است'),
  password: Yup.string()
    .min(3, 'حداقل 3 کاراکتر')
    .max(50, 'حداکثر 50 کاراکتر')
    .required('رمز عبور اجباری است'),
})

const initialValues = {
  phoneNumber: '09371181647',
  password: '123456',
}

export function Login() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data} = await login(values.phoneNumber, values.password)
        saveAuth(data)
        setCurrentUser(data.user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The login details are incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-11'>
        <h1 className='text-dark fw-bolder mb-3'>ورود به</h1>
        <div className='text-gray-500 fw-semibold fs-6'>پنل مدیریت سامانه فروش روناک</div>
      </div>
      {/* begin::Heading */}

      {/* begin::Separator */}
      <div className='separator separator-content my-14'>
        <span className='w-125px text-gray-500 fw-semibold fs-7'>ایمیل و رمز</span>
      </div>
      {/* end::Separator */}

      {formik.status && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      )}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
        <label className='form-label fs-6 fw-bolder text-dark'>تلفن همراه</label>
        <input
          placeholder='09xxxxxxxxx'
          {...formik.getFieldProps('phoneNumber')}
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.phoneNumber && formik.errors.phoneNumber},
            {
              'is-valid': formik.touched.phoneNumber && !formik.errors.phoneNumber,
            }
          )}
          name='phoneNumber'
          autoComplete='off'
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.phoneNumber}</span>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-3'>
        <label className='form-label fw-bolder text-dark fs-6 mb-0'>رمز</label>
        <input
          type='password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Wrapper */}
      <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
        <div />
      </div>
      {/* end::Wrapper */}

      {/* begin::Action */}
      <div className='d-grid'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-primary'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>ورود</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              لطفا صبر کنید...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>
      {/* end::Action */}
    </form>
  )
}
