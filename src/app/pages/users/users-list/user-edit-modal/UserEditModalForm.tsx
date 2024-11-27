import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty} from '../../../../../_ronak/helpers'
import {initialUser, User} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {UsersListLoading} from '../components/loading/UsersListLoading'
import {createUser, updateUser} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isUserLoading: boolean
  user: User
}

const editUserSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'حداقل 4 کاراکتر')
    .max(50, 'حداکثر 50 کاراکتر')
    .required('نام اجباری است')
    .trim(),
  lastname: Yup.string()
    .min(3, 'حداقل 4 کاراکتر')
    .max(50, 'حداکثر 50 کاراکتر')
    .required('نام خانوادگی اجباری است')
    .trim(),
  phoneNumber: Yup.string()
    .matches(/09[0-9]{9}/)
    .required('تلفن اجباری است'),
  nationalCode: Yup.string()
    .matches(/[0-9]{10}/)
    .required('کدملی اجباری است'),
})

const UserEditModalForm: FC<Props> = ({user, isUserLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [userForEdit] = useState<User>({
    ...user,
    firstname: user.firstname || initialUser.firstname,
    lastname: user.lastname || initialUser.lastname,
    phoneNumber: user.phoneNumber || initialUser.phoneNumber,
    nationalCode: user.nationalCode || initialUser.nationalCode,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const formik = useFormik({
    initialValues: userForEdit,
    validationSchema: editUserSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateUser(values)
        } else {
          await createUser(values)
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  })

  return (
    <>
      <form id='kt_modal_add_user_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_user_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_user_header'
          data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
          data-kt-scroll-offset='300px'
        >
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            <label className='required fw-bold fs-6 mb-2'>نام</label>

            <input
              placeholder='نام کوچک'
              {...formik.getFieldProps('firstname')}
              type='text'
              name='firstname'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.firstname && formik.errors.firstname},
                {
                  'is-valid': formik.touched.firstname && !formik.errors.firstname,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.firstname && formik.errors.firstname && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.firstname}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            <label className='required fw-bold fs-6 mb-2'>نام خانوادگی</label>

            <input
              placeholder='نام خانوادگی'
              {...formik.getFieldProps('lastname')}
              type='text'
              name='lastname'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.lastname && formik.errors.lastname},
                {
                  'is-valid': formik.touched.lastname && !formik.errors.lastname,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.lastname}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            <label className='required fw-bold fs-6 mb-2'>تلفن همراه</label>

            <input
              placeholder='09xxxxxxxxx'
              {...formik.getFieldProps('phoneNumber')}
              type='text'
              name='phoneNumber'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.phoneNumber && formik.errors.phoneNumber},
                {
                  'is-valid': formik.touched.phoneNumber && !formik.errors.phoneNumber,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.phoneNumber}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            <label className='required fw-bold fs-6 mb-2'>کدملی</label>

            <input
              placeholder='xxxxxxxxxx'
              {...formik.getFieldProps('nationalCode')}
              type='text'
              name='nationalCode'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.nationalCode && formik.errors.nationalCode},
                {
                  'is-valid': formik.touched.nationalCode && !formik.errors.nationalCode,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.nationalCode && formik.errors.nationalCode && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.nationalCode}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Input group */}
        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isUserLoading}
          >
            بیخیال
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isUserLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>ثبت</span>
            {(formik.isSubmitting || isUserLoading) && (
              <span className='indicator-progress'>
                لطفا صبر کنید...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isUserLoading) && <UsersListLoading />}
    </>
  )
}

export {UserEditModalForm}
