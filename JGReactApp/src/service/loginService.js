import config from '../utils/config'
import { postrequest,getrequest } from '../utils/request'
import axios from '../utils/axios'


export async function UserLogin(params){
    //这个是自己封装的request请求方法
    // return postrequest(`${config.common}/postbody`,{
    //     method: 'POST',
    //     body: params,
    // })

    return getrequest(`${config.common}/getparam`,{
        method: 'GET',
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