import {KTIcon} from '../../../../../_ronak/helpers'
import {useListView} from '../core/ListViewProvider'

const EditModalHeader = () => {
  const {setItemIdForUpdate} = useListView()

  return (
    <div className='modal-header'>
      {/* begin::Modal title */}
      <h2 className='fw-bolder'>ثبت داروخانه جدید</h2>
      {/* end::Modal title */}

      {/* begin::Close */}
      <div
        className='btn btn-icon btn-sm btn-active-icon-primary'
        data-kt-users-modal-action='close'
        onClick={() => setItemIdForUpdate(undefined)}
        style={{cursor: 'pointer'}}
      >
        <KTIcon iconName='cross' className='fs-1' />
      </div>
      {/* end::Close */}
    </div>
  )
}

export {EditModalHeader}
