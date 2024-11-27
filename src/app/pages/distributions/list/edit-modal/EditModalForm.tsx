import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty} from '../../../../../_ronak/helpers'
import {initialData, Model} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {ListLoading} from '../components/loading/ListLoading'
import {create, update} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isLoading: boolean
  data: Model
}

const editSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'حداقل 4 کاراکتر')
    .max(50, 'حداکثر 50 کاراکتر')
    .required('نام اجباری است')
    .trim(),
  province: Yup.string()
    .min(3, 'حداقل 4 کاراکتر')
    .max(50, 'حداکثر 50 کاراکتر')
    .required('نام اجباری است')
    .trim(),
  city: Yup.string()
    .min(3, 'حداقل 4 کاراکتر')
    .max(50, 'حداکثر 50 کاراکتر')
    .required('نام اجباری است')
    .trim(),
  address: Yup.string()
    .min(3, 'حداقل 4 کاراکتر')
    .max(100, 'حداکثر 100 کاراکتر')
    .required('نام اجباری است')
    .trim(),
})

const EditModalForm: FC<Props> = ({data, isLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [forEdit] = useState<Model>({
    ...data,
    name: data.name || initialData.name,
    province: data.province || initialData.province,
    city: data.city || initialData.city,
    address: data.address || initialData.address,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const formik = useFormik({
    initialValues: forEdit,
    validationSchema: editSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await update(values)
        } else {
          await create(values)
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
              placeholder='نام پخش'
              {...formik.getFieldProps('name')}
              type='text'
              name='name'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.name && formik.errors.name},
                {
                  'is-valid': formik.touched.name && !formik.errors.name,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isLoading}
            />
            {formik.touched.name && formik.errors.name && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.name}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            <label className='required fw-bold fs-6 mb-2'>استان</label>

            <input
              placeholder='استان'
              {...formik.getFieldProps('province')}
              type='text'
              name='province'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.province && formik.errors.province},
                {
                  'is-valid': formik.touched.province && !formik.errors.province,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isLoading}
            />
            {formik.touched.province && formik.errors.province && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.province}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            <label className='required fw-bold fs-6 mb-2'>شهر</label>

            <input
              placeholder='شهر'
              {...formik.getFieldProps('city')}
              type='text'
              name='city'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.city && formik.errors.city},
                {
                  'is-valid': formik.touched.city && !formik.errors.city,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isLoading}
            />
            {formik.touched.city && formik.errors.city && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.city}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            <label className='required fw-bold fs-6 mb-2'>آدرس</label>

            <input
              placeholder='آدرس'
              {...formik.getFieldProps('address')}
              type='text'
              name='address'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.address && formik.errors.address},
                {
                  'is-valid': formik.touched.address && !formik.errors.address,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isLoading}
            />
            {formik.touched.address && formik.errors.address && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.address}</span>
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
            disabled={formik.isSubmitting || isLoading}
          >
            بیخیال
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>ثبت</span>
            {(formik.isSubmitting || isLoading) && (
              <span className='indicator-progress'>
                لطفا صبر کنید...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isLoading) && <ListLoading />}
    </>
  )
}

export {EditModalForm}
