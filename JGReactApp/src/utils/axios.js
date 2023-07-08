
import axios from 'axios'
import configs from './config'

const utils = (config) => {
      axios({
          method: config.method,
          url: configs.common + config.url,
          data: config.data ? JSON.stringify(config.data) : null,  //post用
          params: config.data ? config.data : null,      //get用
          headers: {
        //    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              'Content-Type': 'application/json;charset=UTF-8',
              'Access-Control-Allow-Origin': '*',
        //    username: 'jack'
          },
          mode: 'cors',
          cache: 'force-cache'
      })
      .then(config.callBack)
      .catch(config.catch ? config.catch : () => {})
}

export default utils
