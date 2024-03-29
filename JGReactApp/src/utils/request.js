//import fetch from "dva/fetch"
import { fetch } from "dva"
import { notification } from "antd"

//用fetch的时候检查状态
function checkStatus(response) {  
    if (response.status >= 200 && response.status < 300) {
      return response
    }
    const error = new Error(response.statusText)
    error.response = response
    throw error
}

export async function postrequest(url, options) {
    const defaultOption = {
        mode: 'cors',
        // credentials: 'include',  
        //表示跨域请求是可以带cookie（fetch 跨域请求时默认不会带 cookie/ session，需要时得手动指定 credentials: 'include'。
    }
    //组合body
    const newOption = {...options,...defaultOption}
    //1
    newOption.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'token': window.localStorage.getItem('token')
    }
    //2
    newOption.body = JSON.stringify(newOption.body)

    return Promise.race([
            //fetch用来返回包装过的data
             fetch(url,newOption) //下面是promise
                .then(checkStatus)        //查看状态
                .then(res => {            //如果再接一个then处理数据,那返回毫无意义
                  const jsonPromise = res.json()
                  return jsonPromise.then(e => {
                    return e.data
                  })})          
        ]).catch(error => {
           if (error.toString() === "TypeError: Failed to fetch") {
             notification.error({
              message: "无法访问接口",
              description: "请求接口不存在，请确定访问网址是否正确"
            })
           }
           if (error.toString() === "Error: request timeout") {
             notification.error({
              message: "无法访问接口",
              description: "请求接口超时"
             })
           }
           return null
        })        
}

export async function getrequest(url,options){
    const defaultOption = {mode: 'cors',}
    //组合body
    const newOption = {...options,...defaultOption}
    //1
    newOption.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'token': window.localStorage.getItem('token')
    }
    const params = options.body
    const queryStr = Object.keys(params)
          .reduce((ary, key) => {
              ary.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
              return ary;
            }, [])
            .join('&');
    url += `?${queryStr}`

    return Promise.race([
            //fetch用来返回包装过的data
             fetch(url) //下面是promise
                .then(checkStatus)        //查看状态
                .then(res => {            //如果再接一个then处理数据,那返回毫无意义
                  const jsonPromise = res.json()
                  return jsonPromise.then(e => {
                    return e.data
                  })})         
        ]).catch(error => {
          if (error.toString() === "TypeError: Failed to fetch") {
            notification.error({
             message: "无法访问接口",
             description: "请求接口不存在，请确定访问网址是否正确"
           })
          }
          if (error.toString() === "Error: request timeout") {
            notification.error({
             message: "无法访问接口",
             description: "请求接口超时"
            })
          }
          return null
       }) 
}


 /* 
    return fetch(url,newOption) //下面是promise
          .then(checkStatus)
          .then(res => {           
                const jsonPromise = res.json()               
                return jsonPromise.then(json => {  
                    //json是统一的返回数据
                    //data就是resultDO里面的data
                    return json.data
                })
            })  
            .then((d) => d )  //then就是一层层捕捉上面的返回值, d就是json.data
            .catch((err) => err)
    */