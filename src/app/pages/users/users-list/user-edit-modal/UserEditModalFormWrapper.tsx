import {useQuery} from 'react-query'
import {UserEditModalForm} from './UserEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../_ronak/helpers'
import {useListView} from '../core/ListViewProvider'
import {getUserById} from '../core/_requests'

const UserEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {isLoading, data, error} = useQuery(
    `${QUERIES.USERS_LIST}-user-${itemIdForUpdate}`,
    async () => {
      return getUserById(itemIdForUpdate)
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
    return <UserEditModalForm isUserLoading={isLoading} user={{id: undefined}} />
  }

  if (!isLoading && !error && data) {
    return <UserEditModalForm isUserLoading={isLoading} user={data} />
  }

  return null
}

export {UserEditModalFormWrapper}
