import { api } from '@core/config/api'

export class BaseService {
    baseUrl = api.baseURl;

    constructor (baseUrl = '') {
      if (baseUrl) this.baseUrl = baseUrl
    }

    getUrl (url = '', id = '', full_url = false) {
      // eslint-disable-next-line camelcase
      if (full_url === true) {
        return `${url || ''}${id ? '/' + id : ''}`
      } else {
        return `${this.baseUrl}${url ? '/' + url : ''}${id ? '/' + id : ''}`
      }
    }
}
