import {ID, Response} from '../../../../../_ronak/helpers'
export type Model = {
  id?: ID
  name?: string
  price?: number
  createdAt?: Date
}

export type QueryResponse = Response<Array<Model>>

export const initialData: Model = {
  name: '',
  price: 1,
  createdAt: new Date(),
}
