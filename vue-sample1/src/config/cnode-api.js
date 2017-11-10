import axios from 'axios'

var root = 'https://cnodejs.org/api/v1/'

export default {
  get: function (url, params, success, error) {
    axios.get(root + url, params)
      .then(response => success(response.data))
      .catch(error)
  }
}
