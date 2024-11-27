import {MenuItem} from './MenuItem'
// import {MenuInnerWithSub} from './MenuInnerWithSub'
// import {MegaMenu} from './MegaMenu'
// import {useIntl} from 'react-intl'

export function MenuInner() {
  // const intl = useIntl()
  return (
    <>
      <MenuItem title='مدیریت کاربران' to='/users' />
      <MenuItem title='مدیریت محصولات' to='/products' />
      <MenuItem title='مدیریت داروخانه ها' to='/pharmacies' />
      <MenuItem title='مدیریت پخش ها' to='/distributions' />
    </>
  )
}
