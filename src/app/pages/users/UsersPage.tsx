import {PageLink, PageTitle} from '../../../_ronak/layout/core'
import {UsersListWrapper} from './users-list/UsersList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'مدیریت کاربران',
    path: '/users',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const UsersPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={usersBreadcrumbs}>لیست کاربران</PageTitle>
      <UsersListWrapper />
    </>
  )
}

export {UsersPage}
