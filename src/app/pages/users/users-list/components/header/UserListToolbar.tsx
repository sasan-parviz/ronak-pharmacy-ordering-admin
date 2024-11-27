import {KTIcon} from '../../../../../../_ronak/helpers'
import {useListView} from '../../core/ListViewProvider'

const UsersListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* begin::Add user */}
      <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        کاربر جدید
      </button>
      {/* end::Add user */}
    </div>
  )
}

export {UsersListToolbar}
