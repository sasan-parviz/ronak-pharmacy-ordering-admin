import {PageLink, PageTitle} from '../../../_ronak/layout/core'
import {ListWrapper} from './list/List'

const breadcrumbs: Array<PageLink> = [
  {
    title: 'مدیریت پخش',
    path: '/distributions',
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

const DistributionsPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={breadcrumbs}>لیست پخش ها</PageTitle>
      <ListWrapper />
    </>
  )
}

export {DistributionsPage}
