
import config from '../utils/config'
import request from '../utils/request'

//service 封装了请求数据, 进行请求, 再返回

//请求后端, 返回数据, 类似于后端请求sql
// /getResults/{id}
// /getResults
// /getResultsByNum   id
export default async function UserLogin(params){
    //这个是自己封装的request请求方法
    return request(`${config.common}/getResultsByNum`,{
        method: 'POST',
        body: params,
    })
}