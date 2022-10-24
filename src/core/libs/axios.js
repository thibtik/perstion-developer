import Vue from 'vue'

// axios
import axios from 'axios'
import axiosRetry from 'axios-retry'
const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: process.env.VUE_APP_API,
  // timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json; charset=UTF-8'
  }
})

// Add a request interceptor
axiosIns.interceptors.request.use(function (config) {
  // Do something before request is sent
  // Get token from localStorage
 
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// Add a response interceptor
axiosIns.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

axiosRetry(axiosIns, {
  retries: 1, // number of retries
  retryDelay: (retryCount) => {
    return retryCount * 2000 // time interval between retries
  },
  retryCondition: (error) => {
    return axiosRetry.isRetryableError(error) || axiosRetry.isNetworkOrIdempotentRequestError(error) || axiosRetry.isSafeRequestError(error) || axiosRetry.isNetworkError(error)
  }
})
Vue.prototype.$http = axiosIns

export default axiosIns
