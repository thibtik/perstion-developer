import { BaseService } from '@core/services/http'
import axios from '@core/libs/axios'
import { api } from '@core/config/api'

export class ApiService extends BaseService {
  constructor (baseURl = '') {
    super(baseURl || api.baseURl + api.prefix)
  }

  // get all data to match with the resource
  async fetch (path, config = {}) {
    return await axios.get(this.getUrl(path), config)
  }

  // get data to match with the resource by ID
  async get (path, id) {
    if (!id) throw Error('Id is not provided')
    return await axios.get(this.getUrl(path, id))
  }

  // update/get data to match with the resource
  async post (path, data = {}, config = {}) {
    return await axios.post(this.getUrl(path), data, config)
  }

  // update data to match with the resource
  async put (path, id, data = {}, config = {}) {
    if (!id) throw Error('Id is not provided')
    return await axios.put(this.getUrl(path, id), data, config)
  }

  // delete data to match with the resource by ID
  async delete (path, id, config = {}) {
    if (!id) throw Error('Id is not provided')
    return await axios.delete(this.getUrl(path, id), config)
  }

  handleError (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
  }
}
