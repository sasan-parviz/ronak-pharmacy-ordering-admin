// @ts-nocheck
import {Column} from 'react-table'
import {UserCreatedAtCell} from './UserCreatedAtCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='نام' className='min-w-125px' />,
    accessor: 'firstname',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='نام خانوادگی' className='min-w-125px' />
    ),
    accessor: 'lastname',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='شماره تلفن' className='min-w-125px' />
    ),
    accessor: 'phoneNumber',
    id: 'phoneNumber',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='کدملی' className='min-w-125px' />
    ),
    accessor: 'nationalCode',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='تاریخ ثبت' className='min-w-125px' />
    ),
    id: 'createdAt',
    Cell: ({...props}) => <UserCreatedAtCell createdAt={props.data[props.row.index].createdAt} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='عملیات' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
