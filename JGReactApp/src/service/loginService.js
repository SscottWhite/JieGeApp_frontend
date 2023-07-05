import config from '../utils/config'
import request from '../utils/request'
import axios from '../utils/axios'

export default async function UserLogin(params){
    //这个是自己封装的request请求方法
    // return request(`${config.common}/vue/success2`,{
    //     method: 'GET',
    //     body: params,
    // })

    return axios({
        url: "/vue/success2",
        params: params,
        method:'POST',
        data: params,
        body: params
    })
}