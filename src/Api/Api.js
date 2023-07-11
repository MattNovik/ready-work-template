import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://stuservis.ru/api/services',
  withCredentials: true, // required to handle the CSRF token
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getListServices() {
    return apiClient.get('/services')
  },
  getItemServices(id) {
    return apiClient.get('/services/' + id)
  },
  sendNewService(payload) {
    return apiClient.post('/services', payload)
  },
  updateItemService(id, payload) {
    return apiClient.put('/services/' + id, payload)
  },
  deleteItemService(id) {
    return apiClient.delete('/services/' + id)
  },
  /* async getStartdata() {
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
  }, */
}
