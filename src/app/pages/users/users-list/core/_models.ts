import {ID, Response} from '../../../../../_ronak/helpers'
export type User = {
  id?: ID
  firstname?: string
  lastname?: string
  phoneNumber?: string
  nationalCode?: string
  createdAt?: Date
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  firstname: '',
  lastname: '',
  phoneNumber: '',
  nationalCode: '',
  createdAt: new Date(),
}
