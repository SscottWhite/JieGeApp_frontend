import config from '../utils/config'
import request from '../utils/request'


export default async function UserLogin(params){
    //这个是自己封装的request请求方法
    return request(`${config.common}`,{
        method: 'POST',
       // body: params,
    })
}