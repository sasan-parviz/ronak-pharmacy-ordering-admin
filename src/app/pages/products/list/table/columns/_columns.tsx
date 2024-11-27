// @ts-nocheck
import {Column} from 'react-table'
import {CreatedAtCell} from './CreatedAtCell'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {CustomHeader} from './CustomHeader'
import {SelectionHeader} from './SelectionHeader'
import {Model} from '../../core/_models'

const columnsConfig: ReadonlyArray<Column<Model>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='نام' className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='قیمت' className='min-w-125px' />,
    accessor: 'price',
  },
  {
    Header: (props) => (
      <CustomHeader tableProps={props} title='تاریخ ثبت' className='min-w-125px' />
    ),
    id: 'createdAt',
    Cell: ({...props}) => <CreatedAtCell createdAt={props.data[props.row.index].createdAt} />,
  },
  {
    Header: (props) => (
      <CustomHeader tableProps={props} title='عملیات' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ActionsCell id={props.data[props.row.index].id} />,
  },
]

export {columnsConfig}
