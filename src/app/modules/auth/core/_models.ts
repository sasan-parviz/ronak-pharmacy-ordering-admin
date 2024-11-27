import {ID} from '../../../../_ronak/helpers'

export interface AuthModel {
  token: string
  user: UserModel
}

export interface UserModel {
  id: ID
  firstname: string
  lastname: string
  phoneNumber: string
  nationalCode: string
  createdAt: Date
}
