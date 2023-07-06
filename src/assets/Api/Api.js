import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://back.studuniverse.ru',
  withCredentials: true, // required to handle the CSRF token
})

export default {
  async getStartdata() {
    return await apiClient.get('/api/v1/user/start')
  },
  async getSLkInfo() {
    return await apiClient.get('/api/v1/user/start')
  },
  getNewsList(payload) {
    return apiClient.get('/api/v1/news', payload ? payload : null)
  },
  getNewsListStart(payload) {
    return apiClient.get('/api/v1/news/start', payload ? payload : null)
  },
  getBlogsList(payload) {
    return apiClient.get('/api/v1/blog', payload ? payload : null)
  },
  getBlogsListStart(payload) {
    return apiClient.get('/api/v1/blog/start', payload ? payload : null)
  },
  getNewsItems(id, payload) {
    return apiClient.get('/api/v1/news/' + id, payload ? payload : null)
  },
  getBlogsItems(id, payload) {
    return apiClient.get('/api/v1/blog/' + id, payload ? payload : null)
  },
  getFinanceHistory(page, payload) {
    return apiClient.post(
      page ? '/api/v1/finance' + '?page=' + page : '/api/v1/finance',
      payload ? payload : null,
    )
  },
}
