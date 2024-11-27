import axios from 'axios'
import {AuthModel, UserModel} from './_models'

const API_URL = 'http://localhost:3000'
export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/verify-token`
export const LOGIN_URL = `${API_URL}/auth/login-password`

// Server should return AuthModel
export function login(phoneNumber: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    phoneNumber,
    password,
  })
}

export function getUserByToken(token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    token,
  })
}
