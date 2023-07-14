import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://stuservis.ru/api',
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
  getListSettingsContacts() {
    return apiClient.get('/settings/contacts')
  },
  sendSettingsContacts(payload) {
    return apiClient.post('/settings/contacts', payload)
  },
  updateItemSettingsContacts(name, payload) {
    return apiClient.put('/settings/contacts/' + name, payload)
  },
  deleteItemSettingsContacts(name) {
    return apiClient.delete('/settings/contacts/' + name)
  },
  getCategoriesList() {
    return apiClient.get('/categories/')
  },
  getCategoriesItem(id) {
    return apiClient.get('/categories/' + id)
  },
  sendCategoriesItem(payload) {
    return apiClient.post('/categories/', payload)
  },
  updateCategoriesItem(id, payload) {
    return apiClient.put('/categories/' + id, payload)
  },
  deleteCategoriesItem(id) {
    return apiClient.delete('/categories/' + id)
  },
  getDocumentsList() {
    return apiClient.get('/documents/')
  },
  sendDocumentItem(name, payload) {
    return apiClient.post('/documents/' + name, payload)
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
