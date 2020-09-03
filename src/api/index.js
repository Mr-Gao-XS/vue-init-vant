import axios from 'axios'
import QS from 'qs'

const ajax = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截
ajax.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截
ajax.interceptors.response.use(
  (response) => {
    return response
  },

  (error) => {
    Promise.reject(error)
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    ajax
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        resolve(err.data)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    ajax
      .post(url, QS.stringify(params))
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

export default ajax
