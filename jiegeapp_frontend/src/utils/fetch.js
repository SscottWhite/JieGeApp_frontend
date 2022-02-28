
import config from './config'

//异步方法
//两种请求
//参数： url， data， type，method
export default async(url = '', data = {}, type= 'GET', method = 'fetch') => {
    type = type.toUpperCase();
    url = config.common + url;

    //拼接后面数据
    if(type == 'GET') {
        let dataStr = '';
        //value = data(key)
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })

        //去掉最后一个&, 然后拼接get url
        if(dataStr !== ''){
            dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }

    if(window.fetch && method == 'fetch') {
        let requestConfig = {
           // credentials: 'include',//表示跨域请求是可以带cookie（fetch 跨域请求时默认不会带 cookie/ session，需要时得手动指定 credentials: 'include'。
            method: type,
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                // Accept: "application/json",
                username: 'jack'
            },
            mode: 'cors',
            cache: 'force-cache'
        }

        //post不用拼接
        if(type == 'POST') {
            Object.defineProperty(requestConfig, 'body', {
                value: JSON.stringify(data)
            })
        }

        try  {
            const response = await fetch(url,requestConfig);
            const responseJson = await response.json();
            return responseJson;
        } catch(error) {
            throw new Error(error)
        }

    } else {  
        //不支持fetch，则用promise
        return new Promise((resolve, reject) => {
            let requestObj;
            if(window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
                requestObj = new ActiveXObject;  //兼容IE
            }
            
            let sendData = '';
            if(type == 'POST'){
                sendData = JSON.stringify(data);
            }

            requestObj.open(type, url, true);
            requestObj.setRequestHeader("Content-type",'application/json;charset=UTF-8')
            requestObj.send(sendData);

            requestObj.onreadystatechange = () => {
                if(requestObj.readyState == 4) {
                    if(requestObj.status == 200) {
                        let obj = requestObj.response
                        if(typeof obj !== 'Object') {
                            obj = JSON.parse(obj)
                        }
                        resolve(obj)
                    } else {
                        reject(requestObj)
                    }
                }
            }
        })
    }



}