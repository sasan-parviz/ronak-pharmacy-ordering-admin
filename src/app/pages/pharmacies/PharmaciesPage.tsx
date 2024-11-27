import {PageLink, PageTitle} from '../../../_ronak/layout/core'
import {ListWrapper} from './list/List'

const breadcrumbs: Array<PageLink> = [
  {
    title: 'مدیریت داروخانه',
    path: '/pharmacies',
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

const PharmaciesPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={breadcrumbs}>لیست داروخانه ها</PageTitle>
      <ListWrapper />
    </>
  )
}

export {PharmaciesPage}
