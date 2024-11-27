import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../_ronak/helpers'
import {Model, QueryResponse} from './_models'

const BASE_URL = 'http://localhost:3000'
const API_URL = `${BASE_URL}/distributions`

const getAll = (query: string): Promise<QueryResponse> => {
  return axios.get(`${API_URL}?${query}`).then((d: AxiosResponse<QueryResponse>) => d.data)
}

const getById = (id: ID): Promise<Model | undefined> => {
  return axios.get(`${API_URL}/${id}`).then((response: AxiosResponse<Model>) => response.data)
}

const create = (object: Model): Promise<Model | undefined> => {
  return axios
    .post(API_URL, object)
    .then((response: AxiosResponse<Response<Model>>) => response.data)
    .then((response: Response<Model>) => response.data)
}

const update = (object: Model): Promise<Model | undefined> => {
  return axios
    .put(`${API_URL}/${object.id}`, object)
    .then((response: AxiosResponse<Response<Model>>) => response.data)
    .then((response: Response<Model>) => response.data)
}

const deleteById = (id: ID): Promise<void> => {
  return axios.delete(`${API_URL}/${id}`).then(() => {})
}

const deleteSelected = (ids: Array<ID>): Promise<void> => {
  const requests = ids.map((id) => axios.delete(`${API_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getAll, deleteById, deleteSelected, getById, create, update}
