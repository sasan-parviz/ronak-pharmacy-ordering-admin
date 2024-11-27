import {useQuery} from 'react-query'
import {EditModalForm} from './EditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../_ronak/helpers'
import {useListView} from '../core/ListViewProvider'
import {getById} from '../core/_requests'

const EditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {isLoading, data, error} = useQuery(
    `${QUERIES.DISTRIBUTIONS_LIST}-distribution-${itemIdForUpdate}`,
    async () => {
      return getById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )

  if (!itemIdForUpdate) {
    return <EditModalForm isLoading={isLoading} data={{id: undefined}} />
  }

  if (!isLoading && !error && data) {
    return <EditModalForm isLoading={isLoading} data={data} />
  }

  return null
}

export {EditModalFormWrapper}
