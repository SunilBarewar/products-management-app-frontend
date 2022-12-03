import axios from 'axios'

export const baseUrl = process.env.REACT_APP_SERVER

const API = axios.create({ baseURL: baseUrl })
export default API