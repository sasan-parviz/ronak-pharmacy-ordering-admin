import {useMutation, useQueryClient} from 'react-query'
import {QUERIES} from '../../../../../../_ronak/helpers'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {deleteSelected} from '../../core/_requests'

const ListGrouping = () => {
  const {selected, clearSelected} = useListView()
  const queryClient = useQueryClient()
  const {query} = useQueryResponse()

  const deleteSelectedItems = useMutation(() => deleteSelected(selected), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.PHARMACIES_LIST}-${query}`])
      clearSelected()
    },
  })

  return (
    <div className='d-flex justify-content-end align-items-center'>
      <div className='fw-bolder me-5'>
        <span className='me-2'>{selected.length}</span> مورد انتخاب شده
      </div>

      <button
        type='button'
        className='btn btn-danger'
        onClick={async () => await deleteSelectedItems.mutateAsync()}
      >
        حذف موارد
      </button>
    </div>
  )
}

export {ListGrouping}
