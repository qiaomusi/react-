import axios from 'axios';
import { message } from 'antd';

// axios.defauls.baseURL = 'xxx';
axios.defaults.timeout = 100000;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use(config => {

    return config
 });

axios.interceptors.response.use(response => {
    // 在这里你可以判断后台返回数据携带的请求码
   if (response.data.retcode === 200 || response.data.retcode === '200') {
     return response.data.data || response.data
   }else {
     // 非200请求抱错
     message.error('服务异常')
   }
});
export function get(url, params) {
  return new Promise((resolve, reject) => {
      axios.get(url, params)
          .then(res => {
              resolve(res.data);
          })
          .catch(err => {
              reject(err.data);
          })
  });
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
      axios.post(url, params)
          .then(res => {
              resolve(res.data);
          })
          .catch(err => {
              reject(err.data);
          })
  })
}

export function objPost(url, params) {
  return new Promise((resolve, reject) => {
      axios.post(url, params)
          .then(res => {
              resolve(res.data);
          })
          .catch(err => {
              reject(err.data);
          })
  })
}

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
      axios.put(baseUrl + url, data)
          .then(response => {
              resolve(response.data)
          }, err => {
              reject(err)
          })
  })
}

export function del(url, data = {}) {
  return new Promise((resolve, reject) => {
      axios.delete(baseUrl + url, { data: data })
          .then(response => {
              resolve(response.data)
          }, err => {
              reject(err)
          })
  })
}