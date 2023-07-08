import config from '../utils/config'
import request from '../utils/request'
import axios from '../utils/axios'


export default async function UserLogin(params){
    //这个是自己封装的request请求方法
    return request(`${config.common}/postbody`,{
        method: 'POST',
        body: params,
    })


    // return axios(
    //     {
    //         method:"GET",
    //         url: "/vue/success2",
    //         data: params,
    //         callBack: (e) => {
    //             return e.data
    //         }
    //     }
    // )
}