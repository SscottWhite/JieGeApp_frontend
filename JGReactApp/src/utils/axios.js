
import axios from 'axios'
import configs from './config'

const utils = (config) => {
      console.log(config)
      axios({
          method: config.method,
          url: configs.common + config.url,
          params: config.params ? config.params : null,
          data: config.data ? config.data : null,
          body: config.body ? config.body : null,
          headers: {
              //'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              'Content-Type': 'application/json;charset=UTF-8',
              'Access-Control-Allow-Origin': '*',
              // Accept: "application/json",
              username: 'jack'
          },
          mode: 'cors',
          cache: 'force-cache'
      })
      .then(config.callback)
      .catch(config.catch ? config.catch : () => {})
}

export default utils
