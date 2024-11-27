import {ID, Response} from '../../../../../_ronak/helpers'
export type Model = {
  id?: ID
  name?: string
  province?: string
  city?: string
  address?: string
  createdAt?: Date
}

export type QueryResponse = Response<Array<Model>>

export const initialData: Model = {
  name: '',
  province: '',
  city: '',
  address: '',
  createdAt: new Date(),
}
