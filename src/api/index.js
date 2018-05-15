import axios from 'axios'
import Qs from 'qs'
import {Message} from 'element-ui'
import router from '@/router'

//请求拦截器
axios.interceptors.request.use(config => {
  return config;
}, err => {
  Message.error('请求超时!');
  return Promise.reject(err);
});

//响应拦截器
axios.interceptors.response.use(res => {
  return res;
}, err => {
  const response = err.response;
  return Promise.resolve(response);
});

//parameters
const host = '';
const apiURL = `${host}/api`;
const loginURL = `${apiURL}/login`;

//functions
function checkHttpStatus(axiosPromise) {
  return new Promise(function (resolve, reject) {
    axiosPromise.then(res => {
        console.log('checkHttpStatus', res);
        if (res.status === 200 || res.status === 304) {
          return resolve(res.data);
        }

        /**
         * 对指定Code全局处理
         */
        if (res.status === 401) {
          console.log("用户未登录");
          Message.error(res.data.msg);
          router.replace('/');
          return;
        } else if (res.status === 500) {
          console.log("服务器无法理解", res.data);
          Message.error(res.data.msg);
          return;
        }

        /**
         * 其他Code传递到promise链中
         */
        let error = res.data;
        error.status = res.status;
        reject(error);
      }
    );
  });
}

function formatParameters(parameter) {
  if (!parameter) {
    return '';
  }

  let parameterString = '?';
  let keys = Object.keys(parameter);
  for (let index in keys) {
    let key = keys[index];
    if (index > 0) {
      parameterString += '&';
    }
    parameterString += key + '=' + parameter[key];
  }
  return parameterString;
}

export default {
  login: function (form) {
    return checkHttpStatus(
      axios.post(loginURL, Qs.stringify(form),
        {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
      )
    );
  },
  get: function (url, data) {
    return checkHttpStatus(
      axios.get(`${apiURL}${url}${formatParameters(data)}`));
  },
  post: function (url, data) {
    return checkHttpStatus(
      axios.post(`${apiURL}${url}`, data));
  },
  put: function (url, data) {
    return checkHttpStatus(
      axios.put(`${apiURL}${url}`, data));
  }
}
