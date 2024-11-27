import {KTIcon} from '../../../../../../_ronak/helpers'
import {useListView} from '../../core/ListViewProvider'

const ListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* begin::Add */}
      <button type='button' className='btn btn-primary' onClick={openAddModal}>
        <KTIcon iconName='plus' className='fs-2' />
        محصول جدید
      </button>
      {/* end::Add */}
    </div>
  )
}

export {ListToolbar}
