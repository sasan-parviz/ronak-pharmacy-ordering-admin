import {PageLink, PageTitle} from '../../../_ronak/layout/core'
import {ListWrapper} from './list/List'

const breadcrumbs: Array<PageLink> = [
  {
    title: 'مدیریت محصولات',
    path: '/products',
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

const ProductsPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={breadcrumbs}>لیست محصولات</PageTitle>
      <ListWrapper />
    </>
  )
}

export {ProductsPage}
