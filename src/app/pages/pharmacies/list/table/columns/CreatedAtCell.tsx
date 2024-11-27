import {FC} from 'react'
import {format} from 'date-fns-jalali'

type Props = {
  createdAt?: string
}

const CreatedAtCell: FC<Props> = ({createdAt}) => (
  <div className='badge badge-light fw-bolder'>
    {createdAt ? format(new Date(createdAt), 'd MMMM yyyy') : ''}
  </div>
)

export {CreatedAtCell}
