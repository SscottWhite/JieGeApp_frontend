import config from '../utils/config'
import { postrequest } from '../utils/request'

//导入excel
export async function excelImport(params){
    return postrequest(`${config.common}/excel/import`,{
        method: 'POST',
        body: params,
    })
}

//验证是否已经导入
export async function excelIsImport(params){
    return postrequest(`${config.common}/excel/isImport`,{
        method: 'POST',
        body: params,
    })
}

//获取基本信息
export async function excelGetInfo(params){
    return postrequest(`${config.common}/excel/getInfo`,{
        method: 'POST',
        body: params,
    })
}