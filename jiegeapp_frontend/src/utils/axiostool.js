
import axios from 'axios'

const utils = {
  axiosconfig:
       (config) => {
          axios({
            method: config.method,
            url: config.url,
            arams: config.params ? config.params : null,
            data: config.data ? config.data : null
          })
            .then(config.callback)
            .catch(config.catch ? config.catch : () => {})
        }
}

export default utils
